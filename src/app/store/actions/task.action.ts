import { Action } from '@ngrx/store';
import { Task } from '../models/task.model';

export enum TaskActionType {
  GET_TASKS = '[TASK] Get Tasks',
  ADD_TASK = '[TASK] Add Task',
  EDIT_TASK = '[TASK] Edit Task',
  DELETE_TASK = '[TASK] Delete Task',
}

export class GetTasksAction implements Action {
  readonly type = TaskActionType.GET_TASKS;

  constructor(public payload: Task[]) {}
}

export class AddTaskAction implements Action {
  readonly type = TaskActionType.ADD_TASK;

  constructor(public payload: Task) {}
}

export class EditTaskAction implements Action {
  readonly type = TaskActionType.EDIT_TASK;

  constructor(public payload: Task){}
}

export class DeleteTaskAction implements Action {
  readonly type = TaskActionType.DELETE_TASK;

  constructor(public payload: Task){}
}

export type TaskAction = GetTasksAction | AddTaskAction | EditTaskAction | DeleteTaskAction;
