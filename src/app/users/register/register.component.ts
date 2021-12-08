import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentService } from './../../services/auth/authent.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup

  isLogged : false
  isAlert : boolean = false;

  constructor( private formBuilder : FormBuilder,
               private _http : HttpClient,
               private router : Router
               ) { }

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      id : ['', Validators.required],
      name : ['', Validators.required],
      surname : ['', Validators.required],
      mobile : ['', Validators.required],
      password : ['', Validators.required]
    });

  }

  registrationForm(){
    // console.log(this.registerForm.value);
    this._http.post<any>('http://localhost:3000/users', this.registerForm.value).subscribe(
      data => {
        console.log(data);
      }
    );
    this.registerForm.reset();
    this.onAlertopen();
    setTimeout(() => {
      this.onAlertclose();
      // this.router.navigateByUrl('/login');
    }, 2000);
  }

  onAlertclose() {
    this.isAlert = false;
  }

  onAlertopen() {
    this.isAlert = true;
  }
};