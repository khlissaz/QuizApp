import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../../User/login/login.component';
import { User } from 'src/app/modeles/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
declare var particlesJS: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  islogged: boolean = false;
  currentUser: User;
  loginDialogRef: MatDialogRef<LoginComponent>

  constructor(private authService: AuthenticationService, private dialog: MatDialog) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {

    particlesJS.load('particles-js', 'assets/particles.json', function () {
      console.log('callback - particles.js config loaded');
    });

  }

  isLogged() {
    if (this.currentUser) {
      this.islogged = true;
    } else { this.islogged = false; }
    return this.islogged;
  }


}
