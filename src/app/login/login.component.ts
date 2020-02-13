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
  constructor() { }

  ngOnInit() {
  }
}
