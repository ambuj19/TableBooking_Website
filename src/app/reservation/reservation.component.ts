import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
  selectedrow: NumberConstructor;
  ItemsArray= [];
  firstname:{Number:number,firtname:string,Booked:boolean,BookingDate:string,}[]=[];
  constructor( private _BookingService:BookingService) { }
  
  ngOnInit(): void {
  this.firstname=  this._BookingService.getdetails();
  
  }
  show:boolean=false;
  bgColor : string = 'yellowgreen';

  changestatus(id:number){
    console.log(this.firstname);
    console.log(id);
    this.firstname.filter(x=> x.Number===id)[0].Booked=false;
    console.log(this.firstname);
    this.bgColor = 'red';
    this.show=true;
}
}
