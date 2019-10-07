import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatQuestionComponent } from './creat-question.component';

describe('CreatQuestionComponent', () => {
  let component: CreatQuestionComponent;
  let fixture: ComponentFixture<CreatQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
