import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddtowishlistService } from 'src/services/addtowishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  private dataSubscription!: Subscription | null;
  //array ob items
  cartItems: any[] = [];
  show:boolean=true

  constructor(private wishes: AddtowishlistService) {}

  ngOnInit(): void {
    this.dataSubscription = this.wishes.data$.subscribe(data => {
      if (data) {
        this.cartItems=data;
      }
    });
    //show/doesnt show depending if items are in the wishlist array
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
  //check if the wishlist is empty
  if(this.cartItems.length<=0) this.show=false 
  }
}
