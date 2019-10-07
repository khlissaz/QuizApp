import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionService } from 'src/app/services/question.service';
import { TestService } from 'src/app/services/test.service';
import { MatDialogRef } from '@angular/material';
import { Question } from 'src/app/modeles/question';
import { Quiz } from 'src/app/modeles/quiz';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-QCM',
  templateUrl: './create-QCM.component.html',
  styleUrls: ['./create-QCM.component.scss']
})
export class CreateQCMComponent implements OnInit {

  creatQCMForm: FormGroup;
  selectedquestions: FormArray;
  questions: Question[];

  groupOptionsSelect: Array<any>;
  quiz: any;
  constructor(private questionService: QuestionService, private testService: TestService, private router: Router) { }

  ngOnInit() {

    this.creatQCMForm = new FormGroup({

      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),

      category: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
      questions: new FormArray([]),

      date: new FormControl('', Validators.required),

    });

    this.quiz = {

      name: "",
      description: "",
      category: "",
      dateTest: null,
      difficultyLevel: "",
      questions: []

    };
    this.loadAllQuestions()
  }




  loadAllQuestions() {
    this.questionService.getAll().subscribe((result: Question[]) => {
      this.questions = result;
      console.log(this.questions);
    });
  }
  createOption(): FormGroup {
    return new FormGroup({
      questionText: new FormControl('', Validators.required),

    });
  }


  addQCM(form?: NgForm) {
    this.quiz.name = this.creatQCMForm.value.name,
      this.quiz.description = this.creatQCMForm.value.description,
      this.quiz.category = this.creatQCMForm.value.category;
    this.quiz.difficultyLevel = this.creatQCMForm.value.difficulty,
      this.quiz.dateTest = this.creatQCMForm.value.date;

    console.log(this.creatQCMForm.value)
    console.log(this.creatQCMForm.value.difficulty)
    this.testService.addQCM(this.quiz).subscribe(result => {
      console.log(result);
    });
    alert("QCM bien créer");
    this.ngOnInit();
  }



}
