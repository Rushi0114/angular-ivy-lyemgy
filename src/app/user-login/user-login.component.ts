import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  customerform=this.fb.group({

   firstName:['',Validators.required],
   password:['',Validators.required]

  });
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
  }

  loginUser(){
    let {firstName,password}=this.customerform.value;

    if(firstName=== 'Rushikesh'&& password=== '12345' )
    {
      console.log("success");
    }


  }

}