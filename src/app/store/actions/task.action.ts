import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export enum TaskActionType {
  GET_TASKS = '[TASK] Get Tasks',
  ADD_TASK = '[TASK] Add Task',
}

export class GetTasksAction implements Action {
  readonly type = TaskActionType.GET_TASKS;

  constructor(public payload: Task[]) {}
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.ADD_TASK;

  constructor(public payload: Task) {}
}

export type TaskAction = GetTasksAction | AddTaskAction;
