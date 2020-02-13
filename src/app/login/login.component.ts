import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray,Validators,FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeralbumsService } from '../seralbums.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg:string;
  constructor(private routes:Router, private js:SeralbumsService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8)])
  });
  }
  loginUser() {
  
  console.log(this.loginForm.value);
}
check(username: string, password : string)
  {
    var output = this.js.checklogin(username, password);
    console.log(output);
    if(output == true)
    {
      this.routes.navigate(['userdetails']);
    }
    else{
this.msg ='Invalid username or password';
    }
  }
  
}
