import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modeles/user';
import { MatDialogConfig, MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../User/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(){}

  ngOnInit() {
  }
  

}