import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQCMComponent } from './create-QCM.component';

describe('CreateTestComponent', () => {
  let component: CreateQCMComponent;
  let fixture: ComponentFixture<CreateQCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
