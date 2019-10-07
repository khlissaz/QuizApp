import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/modeles/question';
import { QuestionService } from 'src/app/services/question.service';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';


@Component({

  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.scss']
})
export class ListQuestionComponent implements OnInit {
  questions: Question[];
  form: FormGroup;
  ModQForm: FormGroup;
  searchKey: String;
  p: number = 1;
  constructor(private questionService: QuestionService, private dialog: MatDialog) {
    this.form = new FormGroup({
      id: new FormControl(''),
      questionText: new FormControl('', Validators.required),
      options: new FormArray([
        this.createOption()
      ]),

      solution: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      difficultyLevel: new FormControl('', Validators.required),

    });
  }

  ngOnInit() {

    this.ModQForm = new FormGroup({
      id: new FormControl(''),
      questionText: new FormControl('', Validators.required),
      options: new FormArray([
        new FormGroup({
          option1: new FormControl(''),
          option2: new FormControl(''),
          option3: new FormControl(''),
          option4: new FormControl(''),
        })
      ]),

      solution: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      difficultyLevel: new FormControl('', Validators.required),


    });


    this.loadAllQuestions();
  }



  createOption(): FormGroup {
    return new FormGroup({
      option1: new FormControl(''),
      option2: new FormControl(''),
      option3: new FormControl(''),
      option4: new FormControl(''),
    });
  }
  initialiseOption(option): FormGroup {
    return new FormGroup({
      option1: new FormControl(option.option1),
      option2: new FormControl(option.option2),
      option3: new FormControl(option.option3),
      option4: new FormControl(option.option4),
    });
  }
  loadAllQuestions() {
    this.questionService.getAll().subscribe((result: Question[]) => {
      this.questions = result;
      console.log(this.questions);
    });
  }

  deleteQuestion(question) {
    if (confirm('Are you sure to delete this Question?')) {
      console.log(question._id)
      this.questionService.deleteQuestion(question).subscribe(() => {
        this.loadAllQuestions()
      });
    }
  }


  editQ(question) {
    console.log(question.options)

    this.ModQForm.patchValue({

      id: question._id,
      questionText: question.questionText,

      solution: question.solution,
      category: question.category,
      difficultyLevel: question.difficultyLevel,

    });
    this.ModQForm.controls["options"].patchValue(question.options)


  }


  update() {
    if (confirm('Are you sure to update this Question?')) {
      console.log(this.ModQForm)
      this.questionService.update(this.ModQForm.value).subscribe(() => {
        this.loadAllQuestions();
      });
    }
  }

}
