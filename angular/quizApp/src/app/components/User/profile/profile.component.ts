import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modeles/user';
import { Result } from 'src/app/modeles/result';
import { ResultService } from 'src/app/services/result.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  currentUser: User;

  results: Result[] = [];
  user: string;
  ModForm: FormGroup;

  constructor(private resultService: ResultService, private router: Router, route: ActivatedRoute, private userService: UserService, private dialog: MatDialog) {

    this.ModForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),


    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {


    this.loadTestsP();

  }

  loadTestsP() {

    this.resultService.getResultUser().subscribe((data: Result[]) => {

      this.results = data;
    });
  }

  edit(user) {


    this.userService.populateForm(user);
    this.ModForm.setValue({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,

    });


  }

  updateUser() {
    if (confirm('Are you sure to update this user?')) {
      this.userService.update(this.currentUser).subscribe((data) => {

      });
    }
  }
}