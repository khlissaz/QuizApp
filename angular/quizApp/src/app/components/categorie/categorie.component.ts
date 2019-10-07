import { Component, OnInit, } from '@angular/core';
import { Quiz } from 'src/app/modeles/quiz';
import { TestService } from 'src/app/services/test.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {
  quizzes: Quiz[] = [];
  currentQuiz: any;
  listCat: Quiz[] = [];
  constructor(private testService: TestService, private router: Router, route: ActivatedRoute) { }

  ngOnInit() {


    this.loadAllTests()
  }
  loadAllTests() {

    this.testService.getAll().subscribe((result: Quiz[]) => {
      this.quizzes = result;
      console.log(this.quizzes);
    });

  }

  lengthTestCat(category) {
    this.testService.getTestCat(category).subscribe((res: Quiz[]) => {
      this.listCat = res;

    });
    return this.listCat.length;
  }

}
