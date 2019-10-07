import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-creat-question',
  templateUrl: './creat-question.component.html',
  styleUrls: ['./creat-question.component.scss']
})
export class CreatQuestionComponent implements OnInit {
  creatQForm: FormGroup;
  options: FormArray;
  question: any;
  submitted = false;
  form: FormGroup;
  score: number = null;
  isQuizDone = false;
  constructor(private fb: FormBuilder, private router: Router, private questionService: QuestionService, private alertService: AlertService) {

  }

  ngOnInit() {
    this.creatQForm = new FormGroup({

      questionText: new FormControl('', Validators.required),
      options: new FormArray([
        this.createOption()
      ]),

      answer: new FormControl('', Validators.required),
      solution: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      difficultyLevel: new FormControl('', Validators.required),

    });
  }

  createOption(): FormGroup {
    return new FormGroup({
      option1: new FormControl('', Validators.required),
      option2: new FormControl('', Validators.required),
      option3: new FormControl('', Validators.required),
      option4: new FormControl('', Validators.required),
    });
  }


  get f() { return this.creatQForm.controls; }
  onSubmit(form?: NgForm) {
    this.submitted = true;
    console.log(this.creatQForm.value.questionText);
    console.log('//////' + this.creatQForm.value.options[0].option1);

    this.form = new FormGroup({
      id: new FormControl(''),
      questionText: new FormControl(this.creatQForm.value.questionText, Validators.required),
      options: new FormArray([

      ]),

      answer: new FormControl(this.creatQForm.value.answer),
      solution: new FormControl(this.creatQForm.value.solution),
      category: new FormControl(this.creatQForm.value.category),
      difficultyLevel: new FormControl(this.creatQForm.value.difficultyLevel),
    });

    const options = this.form.get('options') as FormArray;

    console.log(this.creatQForm.value.options);
    options.push(new FormGroup({
      option1: new FormControl(this.creatQForm.value.options[0].option1),
      option2: new FormControl(this.creatQForm.value.options[0].option2),
      option3: new FormControl(this.creatQForm.value.options[0].option3),
      option4: new FormControl(this.creatQForm.value.options[0].option4),
    }));
    this.question = JSON.stringify(this.form.value);
    console.log(this.question + 'hhhhhh');
    this.questionService.addQuestion(this.form.value).subscribe(result => {
      this.alertService.success('Add question successfuly', true);
      alert('Add question successfuly');
      console.log(result != null);
    }
      ,
      error => {
        this.alertService.error(error);
      });


    this.ngOnInit();

  }


}
