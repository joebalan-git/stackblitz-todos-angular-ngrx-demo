import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models';
import { ADD_TASK } from 'src/app/store/actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      id: 0,
    });

    // https://blog.logrocket.com/angular-state-management-made-simple-with-ngrx/
  }

  saveTask() {
    this.store.dispatch(ADD_TASK({ task: this.formGroup.value }));
    this.formGroup.reset();
  } 
}
