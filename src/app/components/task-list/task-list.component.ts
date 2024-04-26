import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetTasksAction, TaskActionType } from 'src/app/store/actions/task.action';
import { State } from 'src/app/store/models/state.model';
import { Task } from 'src/app/store/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Array<Task>>;

  constructor(private store: Store<State>){}

  ngOnInit(){
    this.tasks$ = this.store.select((store) => store.tasks);
  }
}
