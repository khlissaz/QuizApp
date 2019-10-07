import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/app/modeles/quiz';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  quizzes: Quiz[] = [];
  currentQuiz: any;
  category: String;

  constructor(private testService: TestService, private router: Router, route: ActivatedRoute) {
    route.params.subscribe(params => this.loadAllTests(params['category']));
    route.params.subscribe(params => this.category = params['category']);

  }

  ngOnInit() {
    this.loadAllTests(this.category)

  }
  
  loadAllTests(category) {

    this.testService.getTestCat(category).subscribe((result: Quiz[]) => {
      this.quizzes = result;

    });

  }

  startQCM(quiz) {
    console.log(quiz)
    localStorage.setItem('currentQuiz', JSON.stringify(quiz));
    this.router.navigate(['/quizitem'])
  }







}
