import { Component, OnInit } from '@angular/core';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
currentResult:any;
currentUser:any;
currentQuiz:any;
  constructor(private resultService: ResultService) { 
     this.currentResult = JSON.parse(localStorage.getItem('currentResult'));
     this.currentQuiz = JSON.parse(localStorage.getItem('currentQuiz'));
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentResult)
  }

  ngOnInit() {
    console.log(this.currentResult)
  }

}
