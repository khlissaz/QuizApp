import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/modeles/result';
import { FormGroup } from '@angular/forms';
import { ResultService } from 'src/app/services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.scss']
})
export class ListResultComponent implements OnInit {
  results: Result[] = [];
  form: FormGroup;
  currentResult:any;
 
  searchText:String;
  constructor(private resltService: ResultService, private router: Router) { }

  ngOnInit() {
    this.loadAll();
  }
  loadAll(){
    this.resltService.getAll().subscribe((result:Result[]) => {
      this.results = result;
      console.log(this.results);
    });

}
}