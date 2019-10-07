import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../modeles/question';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  form:FormGroup;
  constructor(private http: HttpClient) { }
 
  addQuestion(question){
   
    return this.http.post('http://localhost:3000/questions/addQuestion',question);
  
  }
  getAll() {
    return this.http.get('http://localhost:3000/Questions/getAllQuestions');
}

getCat() {
  return this.http.get('http://localhost:3000/Questions/getCat');
}

getById(id: number) {
    return this.http.get('/api/questions/' + id);
}



update(question: Question) {
  
   return this.http.post('http://localhost:3000/Questions/updateQuestion/'+ question.id, question);
}

 deleteQuestion(question) {
   
    return this.http.post('http://localhost:3000/Questions/deleteQuestion/' +question._id, question);
}
}
