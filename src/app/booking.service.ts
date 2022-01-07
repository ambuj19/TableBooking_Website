import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public display=[{"Number":1,"firtname":"Ambuj","Booked":true,"BookingDate":"27/01/2022"},
  {"Number":2,"firtname":"Doe","Booked":false,"BookingDate":"28/01/2022"},
  {"Number":3,"firtname":"Cooper","Booked":true,"BookingDate":"29/01/2022"},]; 
  constructor() { }
  getdetails(){
    return this.display;
      
    
  }
}
