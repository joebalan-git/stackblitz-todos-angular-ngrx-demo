import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task, AppState } from 'src/app/store/models';
import { selectTasks } from 'src/app/store/selectors';
import { LOAD_TASKS } from 'src/app/store/actions';

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
    // this.store.dispatch(new EditTaskAction(task));
  }

  deleteTask(task: Task){
    // this.store.dispatch(new DeleteTaskAction(task));
  }
}
