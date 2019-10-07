import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/modeles/user';
import { Router } from '@angular/router';
import { Role } from 'src/app/modeles/role';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  
  constructor(private router: Router,public authService: AuthenticationService) { 

    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    
    console.log(this.currentUser)
  }


}
