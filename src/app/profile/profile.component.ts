import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  // firstname:{firtname:string}[]=[];
  // public detail=[];
  listdata:any;
  constructor(private fb: FormBuilder,private _BookingService:BookingService) { this.listdata=[];}
  // ngOnInit(): void {
  //   this.firstname=this._BookingService.getdetails();
  // }
  
  userprofileForm= this.fb.group({
  firstname:['',Validators.required],
  lastname:[''],
  country:[''],
  state:[],
  city:[''],
  });
  get eform(){
    return this.userprofileForm.controls;
  }
  onSubmit(){
    console.warn(this.userprofileForm.value);
    if(this.userprofileForm.value!=null && this.userprofileForm.value !=''){
      this.listdata.push(this.userprofileForm.value);
      
    }
    this.userprofileForm.reset();this.userprofileForm.value;
  }

}
