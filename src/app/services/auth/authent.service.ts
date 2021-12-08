import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  users : User[] = [
    {
      "id" : 1,
      "name" : "admin",
      "password" : "1234",
      "roles" : ['ADMIN']
    },
    {
      "id" : 2,
      "name" : "badin",
      "password" : "1234",
      "roles" : ['USER']
    }
  ]

  public loggedUser : string;
  public isloggedIn : Boolean = false;
  public roles : string[];

  constructor( private router : Router) { }

  SignIn(user : User){
    let valideUser : Boolean = false;
    this.users.forEach((curUser) => {
      if(user.name === curUser.name && user.password === curUser.password){
        valideUser = true;
        this.loggedUser = curUser.name;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return valideUser
  }

  logOut(){
    this.isloggedIn = true;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));;
    this.router.navigate(['/']);
  }

  
  }


