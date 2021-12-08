import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from 'src/app/services/auth/authent.service';
import { User } from './../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAlert : boolean = false;

  isLogged : boolean = false;

  user = new User();


  constructor( private authService : AuthentService,
               private route : Router ) { }

  ngOnInit(): void { }

  isLogin() {
    console.log(this.user);
    let isValidUser : Boolean = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.route.navigate(['/']);
    } else {
      alert('name or password incorrect')
    } 
  }
};
  
