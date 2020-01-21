import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListAddComponent } from './task-list-add.component';

describe('TaskListAddComponent', () => {
  let component: TaskListAddComponent;
  let fixture: ComponentFixture<TaskListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
