import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQCMComponent } from './list-qcm.component';

describe('ListQCMComponent', () => {
  let component: ListQCMComponent;
  let fixture: ComponentFixture<ListQCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListQCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
