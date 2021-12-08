import { Component, OnInit } from '@angular/core';
import { AuthentService } from 'src/app/services/auth/authent.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public authService : AuthentService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut();
  }
}
