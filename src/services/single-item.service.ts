import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SingleItemService {

  constructor() { }

  //create data source,make it observable
  private dataSource=new BehaviorSubject<any>(null)
  dataSource$=this.dataSource.asObservable()

  //get the data and send it to the subscribers
  sendData(data:any[]){
   this.dataSource.next(data)
  }

}