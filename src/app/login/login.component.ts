import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router}from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router){

  }
  title = 'reactive-form';
  // exform: FormGroup;
  emails: string = '';
  passwords:string='';

  
  public exform = new FormGroup({

    frmemail: new FormControl([Validators.required, Validators.email]),
    frmpassword: new FormControl([Validators.required,Validators.minLength(3)])
    //decimalPrecision: new FormControl()
    

  });
  get eform(){
    return this.exform.controls;
  }
 
  login(){
    console.log(this.exform.value)
    if(this.passwords=="Admin@123"){
      console.log("correct")
      this.router.navigate(['/home'])
    }else{
      console.log("Please Enter valid details")
    }
  }
  

  ngOnInit(): void {
  }

}
