import { Component} from '@angular/core';
import products from "src/assets/products.json";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  products:any=products

}