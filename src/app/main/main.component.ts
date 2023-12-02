import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import products from 'src/assets/products.json';
import { AddToCartService } from 'src/services/add-to-cart.service';
import { AddtowishlistService } from 'src/services/addtowishlist.service';
import { SingleItemService } from 'src/services/single-item.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'E-commerceWebsite';
  hide: boolean = false;
  products: any = products;
  originalProducts: any[] = [...products];
  currentFilter: 'name' | 'price' | 'weight' | null = null;

  constructor(
    private singleItem: SingleItemService, 
    private router: Router, 
    private addItemService: AddToCartService, 
    private wishlistService: AddtowishlistService
  ) { }

  ngOnInit(): void {
    this.products = products.map(product => ({ ...product, like: false }));
  }

  showItem(data: any) {
    this.singleItem.sendData(data);
  }

  value: boolean = false;
  inputValue: string = "";
  show: boolean = false;

  toggleValue() {
    this.value = !this.value;
  }
  toggle(){
    this.show=!this.show
  }

  newProducts: any[] = [];
  searchData() {
    this.newProducts = [];
    this.products = products;

    this.newProducts = this.products.slice(0, 30).filter((product: any) => {
      const wordsArray = product.name.toUpperCase().split(" ");
      return wordsArray.some((word: any) => word === this.inputValue.toUpperCase());
    });
    this.inputValue = "";

    if (this.newProducts.length > 0) {
      this.products = this.newProducts;
    } else {
      alert("No such item");
    }
  }

  goToProduct() {
    this.router.navigate(["products"]);
  }

  addItem(data: any[]) {
    this.addItemService.sendData(data, 1, "black");
    setTimeout(() => {
      this.display = !this.display;
    }, 250);
  }

  display: boolean = false;
  toggleAlert() {
    this.display = !this.display;
  }

  hideItem(product: any) {
    product.like = !product.like;
    this.wishlistService.senddata(product);
  }

  hideItemLike(product: any) {
    product.like = !product.like;
  }

  // Centralized method for sorting
  sortProducts(sortKey: 'name' | 'price' | 'weight') {
    if (this.currentFilter !== sortKey) {
      this.products.sort((a: any, b: any) => {
        if (sortKey === 'name') {
          return a.name.localeCompare(b.name);
        } else {
          return a[sortKey] - b[sortKey];
        }
      });
      this.currentFilter = sortKey;
    } else {
      this.resetFilter();
    }
  }

  // Reset filter to original state
  resetFilter() {
    this.products = [...this.originalProducts];
    this.currentFilter = null;
  }

  // Specific filter methods
  filterByName() {
    this.sortProducts('name');
  }

  filterByPrice() {
    this.sortProducts('price');
  }

  filterByWeight() {
    this.sortProducts('weight');
  }
}
