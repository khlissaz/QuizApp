import { Component, OnInit } from '@angular/core';

import { TestService } from 'src/app/services/test.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/modeles/quiz';
import { Question } from 'src/app/modeles/question';
import { Result } from 'src/app/modeles/result';
import { ResultService } from 'src/app/services/result.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss']
})
export class QuizItemComponent implements OnInit {
  quizlength: number;
  quiz: Quiz;
  question: Question;
  options: String[];
  i: number  = 0;
  currentQuiz: any;
  scoreQuiz: number = 0;
  questions: Question[];
  marks: number = 0;
  radioSelected: string;
  Result: Result;
  //public currentResult:Result;
  d = new Date();
  seconds: number;
  timer;
  currentUser:any;
  constructor(private testService: TestService, private resultService: ResultService, private router: Router) {

    this.currentQuiz = JSON.parse(localStorage.getItem("currentQuiz"));
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currentQuiz)
    console.log(this.currentQuiz.questions[0])

    this.question = this.currentQuiz.questions[0];
    this.options = this.question.options;
    this.quizlength = this.currentQuiz.questions.length;
    this.Result = new Result();
    this.Result.answers = [""];

    //this.Result.name=this.currentQuiz.name;

  }

  ngOnInit() {

    
console.log(this.seconds)
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.seconds = parseInt(localStorage.getItem('seconds'));
        this.startTimer();
    }
    else {
      this.seconds = (this.currentQuiz.questions.length*120)/60;
      
          this.startTimer();
        }
     
  
  
    console.log(this.question.questionText)
    // this.loadOneTest();
    //   this.question=this.currentQuiz.questions[0];
    console.log(this.question);


  }

  loadOneTest() {

    /* this.testService.getTest(id).subscribe((result:Quiz) => {
       this.quiz = result;
       console.log(this.quiz);
     });
 */
  }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }


  startTimer() {
  this.seconds=(this.currentQuiz.questions.length*3600)/120;
  console.log(this.seconds)
    this.timer = setInterval(() => {
      this.seconds--;
      if(this.seconds<0){
      clearInterval(this.timer);
      this.Result.date = this.d;
      this.Result.name = this.currentQuiz.name;
      this.Result.score = this.marks;
      this.Result.test=this.currentQuiz
      this.Result.user=this.currentUser
      console.log(this.currentQuiz)
      console.log(this.Result)
      console.log(this.Result.answers)
  
      localStorage.setItem('currentResult', JSON.stringify(this.Result));
      this.saveResult(this.Result);
      this.router.navigate(['resultat']);
    }
      localStorage.setItem('seconds', this.seconds.toString());
    }, 2000);
  }

  /******************************************************** */
  next() {


    ++this.i;
    console.log(this.i)
    this.question = this.currentQuiz.questions[this.i];
     this.radioSelected;
    console.log(this.radioSelected)
    console.log(this.question.solution)
    console.log(this.question)
    this.options = this.question.options
    console.log(this.quizlength);
    console.log(this.i);

  }
  previous() {
    --this.i;
    this.question = this.currentQuiz.questions[this.i];
    this.options = this.question.options
    console.log(this.radioSelected)

  }

  /********************************************************* */
  generatemark() {

if(this.seconds<(this.currentQuiz.questions.length*120)/60){
    for (var i = 0; i < this.currentQuiz.questions.length; i++) {
      this.Result.answers[i] = this.currentQuiz.questions[i].answer;
      if (this.currentQuiz.questions[i].answer == this.currentQuiz.questions[i].solution) {

        this.marks++;

      }
      else  {
        
        
        
        localStorage.removeItem("seconds");
        console.log("===============" + this.radioSelected);
        console.log("===============" + this.Result);
        // this.Result.answer[i]= this.question.answer;
        // document.writeln("The correct answer for the question number "+i+" is :"+this.currentQuiz.questions[i].solution+ '\n');
        // document.writeln("<br>");

      }

    }
}

    // alert("your score is "+JSON.stringify(this.marks));
    /* let d=new Date();
      this.Result.score=this.marks;
     this.Result.date=d;
     this.Result.name=this.currentQuiz.category+'/'+d;
      
       for( var i = 0; i < this.currentQuiz.questions.length; i++){
         this.Result.answer[i]=this.radioSelected;
         console.log(this.Result.answer[i])
       }*/

    this.Result.date = this.d;
    this.Result.name = this.currentQuiz.name;
    this.Result.score = this.marks;
    this.Result.test=this.currentQuiz
    this.Result.user=this.currentUser
    console.log(this.currentQuiz)
    console.log(this.Result)
    console.log(this.Result.answers)

    localStorage.setItem('currentResult', JSON.stringify(this.Result));
    this.saveResult(this.Result);
    this.router.navigate(['resultat']);
    //document.writeln("your score is " + this.marks);

  }
  /*
  check1(e, str: String, answer: string) {
    if (e.target.checked) {
      console.log("..................." + str + " " + answer);
      this.question.answer = answer  // this.answerkey.push(new AnswerKey(str, answer));
    }

  }*/
  //**************************************************************
  check(option) {
    this.radioSelected = option
    console.log(this.radioSelected)
    // console.log(this.Result.answer)
    this.radioSelected = option;


    //console.log(this.Result[i].answer);


  }

  //*************************************************************** */
  saveResult(result) {
    console.log(result);

    //this.currentResult=JSON.parse(localStorage.getItem("currentResult"))
    console.log(result);
    this.resultService.registerQuiz(result).subscribe(result => {
      console.log(result);
    });
    this.ngOnInit();



  }


}

