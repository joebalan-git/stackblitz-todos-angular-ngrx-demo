import { createReducer, on } from '@ngrx/store';
import { LOAD_TASKS_SUCCESS, ADD_TASK_SUCCESS } from './actions';
import { Task } from './models';

const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(LOAD_TASKS_SUCCESS, (state, { task }) => task),
  on(ADD_TASK_SUCCESS, (state, { task }) => {
    let newState = [...state];
    newState.unshift(task);
    return newState;
  })
);
