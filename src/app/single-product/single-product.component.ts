import { Component,OnInit,ChangeDetectorRef,OnDestroy } from '@angular/core';
import { SingleItemService } from 'src/services/single-item.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddToCartService } from 'src/services/add-to-cart.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit,OnDestroy{

  private subscription: Subscription | null=null

  constructor(private Item:SingleItemService, private activeRoute:ActivatedRoute, private cdr: ChangeDetectorRef, private cart:AddToCartService){ }

  singleItem:any={
    id:"",
    name:"",
    description:"",
    img:"",
    price:"",
    weight:""

  }

  //default color black
  color:string="black"
  //default quantity 1
  number:number=1
  missing:boolean=false
  buy:boolean=false
  
  ngOnInit(): void {
    //get id of active item
    this.activeRoute.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get("id")
    })
    this.subscription=this.Item.dataSource$.subscribe(item=>{
      this.singleItem=item
    })
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }


  //add item to cart
  addToCart(data:any[], quantity:number, color:string){
    if(quantity>0){
      this.cart.sendData(data,quantity,color)
      this.missing=false
      this.buy=true
      //alert item was bought
      setTimeout(() => {
        this.buy = false;
      }, 1500);
    }else{
      this.missing=!this.missing
      this.buy=false
    }
  }
}
