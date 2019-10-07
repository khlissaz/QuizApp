import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  form:FormGroup;
  
  constructor(private http: HttpClient) { }

  getAll()  {

    return this.http.get('http://localhost:3000/Tests/getAllTests');
  }

  getTest(id){
    return this.http.get('http://localhost:3000/Tests/getTest'+ id)

  }
  getTestCat(category){
 
    return this.http.get('http://localhost:3000/Tests/getTestCat/'+ category)

  }
  addQCM(quiz){
   
    return this.http.post('http://localhost:3000/tests/addTest/',quiz);
  
  }
  update(quiz) {
   
     return this.http.post('http://localhost:3000/tests/updateTest/'+ quiz.id, quiz);
  }

  deleteTest(quiz) {
    
      return this.http.post('http://localhost:3000/tests/deleteTest/'+ quiz._id,quiz);
  }

  affectQuestion(idTest,id){
    return this.http.post('http://localhost:3000/tests/affect/'+idTest+ '/' +id ,idTest)

  }
  desaffectQuestion(idTest,id){
    return this.http.post('http://localhost:3000/tests/desaffect/'+idTest+ '/' +id ,idTest)

  }
  getCat(){
    return this.http.get('http://localhost:3000/tests/getTestCategory/')
  }
}
