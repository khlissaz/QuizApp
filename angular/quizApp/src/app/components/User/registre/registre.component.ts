import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
//import { User } from 'src/app/modeles/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
  submitted = false;
  registreForm: FormGroup;
  loading = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  model: any = {};
  selectedFile: File;

  constructor(private router: Router, private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
    this.registreForm = new FormGroup({
       
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });


  }




  get f() { return this.registreForm.controls; }

  onSubmit(form?: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registreForm.invalid) {
      return;
    }



    this.userService.register(this.registreForm.value).subscribe(
      data => {
        // set success message and pass true paramater to persist the message after redirecting to the login page
           console.log(data)
        this.alertService.success('Registration successful', true);

        this.router.navigate(['login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });

  }


}
