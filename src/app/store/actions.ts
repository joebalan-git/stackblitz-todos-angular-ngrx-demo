import { createAction, props} from '@ngrx/store';
import { Task } from './models';

export const LOAD_TASKS = createAction('[Task] Load Tasks');
export const LOAD_TASKS_SUCCESS = createAction('[Task] Load Tasks Success', props<{task: Task[]}>());
export const LOAD_TASKS_ERROR = createAction('[Task] Load Tasks Error');

export const ADD_TASK = createAction('[Task] Add Task', props<{task: Task}>());
export const ADD_TASK_SUCCESS = createAction('[Task] Add Task Success', props<{task: Task}>());
export const ADD_TASK_ERROR = createAction('[Task] Add Task Error');