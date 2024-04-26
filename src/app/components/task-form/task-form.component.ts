import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTaskAction } from 'src/app/store/actions/task.action';
import { State } from 'src/app/store/models/state.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      id: 0,
    });

    // https://blog.logrocket.com/angular-state-management-made-simple-with-ngrx/
  }

  saveTask() {
    this.store.dispatch(new AddTaskAction(this.formGroup.value));
    // this.formGroup.reset();
  }
}
