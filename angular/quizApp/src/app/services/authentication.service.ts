import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../modeles/user';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { Role } from '../modeles/role';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
admin:boolean=false;
  constructor(private http: HttpClient,private myRoute : Router) {
   
  this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser =JSON.parse(localStorage.getItem("currentUser"));
  
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
  login(userName: string, password: string) {
   
    return this.http.post<any>(`http://localhost:3000/users/login/`, { userName, password }).pipe(map(user=>
  // login successful if there's a jwt token in the response
       { if (user && user.token) {
         
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            var decoded = jwt_decode(user.token); 
            console.log();
             localStorage.setItem('token', user.token);
             localStorage.setItem('currentUser', JSON.stringify(decoded.user));
          
          this.currentUser =jwt_decode(localStorage.getItem('token')).user
           
     }
     return user;
}));

  }

isAdmin()
{ 
  if( this.currentUserValue.role ===Role.Admin){
  
  this.admin=true;
  console.log(this.admin)
}

return this.admin
}


  logout() {
   
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token')
    this.myRoute.navigate(["/"]);
  }
}
