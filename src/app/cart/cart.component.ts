import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddToCartService } from 'src/services/add-to-cart.service';{}
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private dataSubscription!: Subscription | null;
  cartItems: any[] = [];
  show:boolean=true

  constructor(private cart: AddToCartService) {}

  ngOnInit(): void {
    this.dataSubscription = this.cart.data$.subscribe(data => {
      if (data) {
        this.cartItems=data;
      }
    });
    if(this.cartItems.length>0){
      this.show=true
    }else{
      this.show=false
    }
  }

  ngOnDestroy(): void {
   // Unsubscribe to avoid memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

//remove item function 
removeItem(data:any[]){
    this.cartItems.splice(this.cartItems.indexOf(data),1)
    if(this.cartItems.length<=0){
      this.show=false
    }
  }
}




