import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegistreComponent } from '../registre/registre.component';
import { User } from 'src/app/modeles/user';
import { AlertService } from 'src/app/services/alert.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    
    regdialogRef: MatDialogRef<RegistreComponent>;
    public currentUser: User;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router, private dialog: MatDialog, private authenticationService: AuthenticationService, private alertService: AlertService) {
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        


        this.authenticationService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
            data => {
               console.log(data);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                
                this.alertService.error("Login ou mot de passe est incorrect!");
                this.loading = false;
            });
    }

}
 
 
  

