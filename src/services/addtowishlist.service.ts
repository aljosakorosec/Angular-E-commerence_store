import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtowishlistService {

  constructor() { }

  private wishes:any[]=[]
  private data= new BehaviorSubject<any>(null)
  data$=this.data.asObservable()

  senddata(item:any[]){
//sends the array of wishes and store wishes if component is destroyed
    this.wishes.push(item)
    this.data.next(this.wishes)
  }
}
