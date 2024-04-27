import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task, AppState } from 'src/app/store/models';
import { selectTasks } from 'src/app/store/selectors';
import { LOAD_TASKS, EDIT_TASK, DELETE_TASK } from 'src/app/store/actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$ = this.store.pipe(select(selectTasks));

  constructor(private store: Store<AppState>){}

  ngOnInit(){
    this.store.dispatch(LOAD_TASKS());
  }

  editTask(task: Task){
    this.store.dispatch(EDIT_TASK({task: { ...task, completed: true }}));
  }

  deleteTask(task: Task){
    this.store.dispatch(DELETE_TASK({task}));
  }
}
