import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { SingleProductComponent } from './single-product/single-product.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent} from './app.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BuyComponent } from './buy/buy.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleProductComponent,
    ErrorComponent,
    MainComponent,
    CartComponent,
    WishlistComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
