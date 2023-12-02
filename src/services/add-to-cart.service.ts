import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor() { }

  private dataSource:any[]=[]
  private data= new BehaviorSubject<any>(null)
  data$=this.data.asObservable()

  sendData(data:any[], quantity:number, color:string){
    //push item into data source and send it to the subscribers-->data source stores data when component is destroyed
    this.dataSource.push([data,quantity,color])
    this.data.next(this.dataSource) 
  }
}



///code i do not need
//   1)
//save data function 
  /* saveData(data:any[]){
    //save data into data source
    return this.dataSource=data
  }

  //get the data back on init
  getData(){
    return this.dataSource
  } */