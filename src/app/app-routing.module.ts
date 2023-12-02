import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BuyComponent } from './buy/buy.component';

const routes: Routes = [
  {path:"products/:id", component:SingleProductComponent},
  {path:"cart", component:CartComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"cart/payment",component:BuyComponent},
  {path:"", component:MainComponent},
  {path:"**",component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
