import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/modeles/quiz';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {  MatDialog } from '@angular/material';
import { Question } from 'src/app/modeles/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-list-qcm',
  templateUrl: './list-qcm.component.html',
  styleUrls: ['./list-qcm.component.scss']
})

export class ListQCMComponent implements OnInit {
  i: number = 0;
  quizlength: number;
  creatQCMForm: FormGroup;
  questions: any;
  groupOptionsSelect: Array<any>;
  Cats: any;
  selectedQuestions: Question[];
  selectedCat: String;
  quizzes: Quiz[] = [];
  form: FormGroup;
  currentQuiz: any;
  ModQCMForm: FormGroup;
  searchText: String;
  p: number = 1;
  p1: number = 1;
  constructor(private testService: TestService, private questionService: QuestionService, private router: Router, private dialog: MatDialog) {

    this.currentQuiz = JSON.parse(localStorage.getItem("currentQuiz"));

  }

  ngOnInit() {
    this.ModQCMForm = new FormGroup({
     id:new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      difficulty: new FormControl('')
    })
    this.loadAllTests()

  }
  loadAllTests() {
    this.testService.getAll().subscribe((result: Quiz[]) => {
      this.quizzes = result;
      console.log(this.quizzes);
    });

  }

  edit(quiz) {
    console.log(quiz);

    this.ModQCMForm.setValue({
      id:quiz._id,
      name: quiz.name,
      description:quiz.description,
      category: quiz.category,
      difficulty: quiz.difficultyLevel


    });

  }


  deleteQCM(quiz) {
    console.log(quiz)
    if (confirm('Are you sure to delete this Quiz?')) {
      this.testService.deleteTest(quiz).subscribe(() => {
        this.loadAllTests()
      });
    }



  }
  startQCM(quiz) {
    console.log(quiz)
    localStorage.setItem('currentQuiz', JSON.stringify(quiz));
    

    this.router.navigate(['/quizitem'])
  }

  update(){
    if (confirm('Are you sure to update this QCM?')) {
      console.log(this.ModQCMForm.value)
      this.testService.update(this.ModQCMForm.value).subscribe(() => {
        this.loadAllQuestions();
      });
    }
  }



  
  affect_desaffect(quiz) {
    localStorage.setItem('currentQuiz', JSON.stringify(quiz));
    this.loadAllQuestions();
    
    
    this.loadCat();
   
  }


  isAffect(id) {

    let currentQ=JSON.parse(localStorage.getItem("currentQuiz"));
    var is_affected = false;
   
    for (var i = 0; i < currentQ.questions.length; i++) {
      if (currentQ.questions[i]._id == id) {
     
        
        is_affected = true;
    

      }
    }
    return is_affected
  }
  loadAllQuestions() {

    this.questionService.getAll().subscribe((result) => {
      this.questions = result;
     
    });

  }
  loadCat() {
    this.questionService.getCat().subscribe((result) => {
      this.Cats = result;
     
    });

  }


}