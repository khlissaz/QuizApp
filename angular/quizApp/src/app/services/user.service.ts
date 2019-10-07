import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import {  HttpClient  } from '@angular/common/http';
import {User} from '../modeles/user';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    id:new FormControl(''),
    firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    
  });



  
  register(user){
    
    return this.http.post('http://localhost:3000/users/register',user);
  
  }
  getAll() {
    return this.http.get('http://localhost:3000/users/getAllusers');
}

getById(id: number) {
    return this.http.get('/api/users/' + id);
}

update(user: User) {
  console.log(user._id)
  
   return this.http.post('http://localhost:3000/users/updateUser/' + user._id, user);
}

delete(user) {
 
    return this.http.post('http://localhost:3000/users/deleteUser/' + user._id,user);
}
populateForm(user) {
   
  this.form.setValue({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,

  });

}


}
