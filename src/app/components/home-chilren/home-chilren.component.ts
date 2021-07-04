import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-home-chilren',
  templateUrl: './home-chilren.component.html',
  styleUrls: ['./home-chilren.component.css']
})
export class HomeChilrenComponent implements OnInit {
  loginForm;
  constructor() { }

  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        email:new FormControl("",Validators.compose([
          Validators.required,
          Validators.email
        ])),
        password:new FormControl("",Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ]))
      }
    );
  }

  onClickSubmit(value){
    console.log(value);
    
  }


}
