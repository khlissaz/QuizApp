import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { User } from '../modeles/user';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  form:FormGroup;
  currentUser: User;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
   }

  registerQuiz(result){
    
   
    return this.http.post('http://localhost:3000/results/save',result);
  
  }
getAll(){

 return this.http.get('http://localhost:3000/results/getAll');
}
getResultUser(){


  return this.http.get('http://localhost:3000/results/getResultUser/'+ this.currentUser._id);
 
}
}
