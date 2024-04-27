import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import { Task } from "src/app/store/models";
import { 
  LOAD_TASKS, LOAD_TASKS_ERROR, LOAD_TASKS_SUCCESS,
  ADD_TASK, ADD_TASK_ERROR, ADD_TASK_SUCCESS,
  EDIT_TASK, EDIT_TASK_ERROR, EDIT_TASK_SUCCESS,
  DELETE_TASK, DELETE_TASK_ERROR, DELETE_TASK_SUCCESS,
} from './actions';

@Injectable()
export class TaskEffects {

  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_TASKS),
      switchMap(() =>
        this.taskService.getTasks().pipe(map((task: Task[]) => LOAD_TASKS_SUCCESS({ task })), catchError(() => [LOAD_TASKS_ERROR()]))
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ADD_TASK),
      switchMap((action) => {
        return this.taskService.addTask(action.task).pipe(map((task: Task) => ADD_TASK_SUCCESS({ task })), catchError(() => [ADD_TASK_ERROR()]))
        }
      )
    )
  );

  editTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EDIT_TASK),
      switchMap((action) => {
        return this.taskService.editTask(action.task).pipe(map((task: Task) => EDIT_TASK_SUCCESS({ task })), catchError(() => [EDIT_TASK_ERROR()]))
        }
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DELETE_TASK),
      switchMap((action) => {
        return this.taskService.deleteTask(action.task).pipe(map((task: Task) => DELETE_TASK_SUCCESS({ task })), catchError(() => [DELETE_TASK_ERROR()]))
        }
      )
    )
  );
}
