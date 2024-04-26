import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Task } from './store/models/task.model';
import { Store } from '@ngrx/store';
import { State } from './store/models/state.model';
import { AddTaskAction } from './store/actions/task.action';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  totalTodos = 0;
  formGroup: FormGroup;

  tasks$: Observable<Array<Task>>;

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      id: 0,
    });

    // https://blog.logrocket.com/angular-state-management-made-simple-with-ngrx/
  }

  ngOnInit() {
    this.tasks$ = this.store.select((store) => store.tasks);
  }

  saveTodo() {
    this.store.dispatch(new AddTaskAction(this.formGroup.value));
    this.formGroup.reset();
  }
}
