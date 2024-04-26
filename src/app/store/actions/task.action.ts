import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export enum TaskActionType {
  ADD_ITEM = '[TASK] Add Task',
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.ADD_ITEM;

  constructor(public payload: Task) {}
}

export type TaskAction = AddTaskAction;
