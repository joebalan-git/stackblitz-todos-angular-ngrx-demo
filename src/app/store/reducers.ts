import { createReducer, on } from '@ngrx/store';
import { LOAD_TASKS_SUCCESS, ADD_TASK_SUCCESS, EDIT_TASK_SUCCESS, DELETE_TASK_SUCCESS } from './actions';
import { Task } from './models';

const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(LOAD_TASKS_SUCCESS, (state, { task }) => task),
  on(ADD_TASK_SUCCESS, (state, { task }) => {
    let newState = [...state];
    newState.unshift(task);
    return newState;
  }),
  on(EDIT_TASK_SUCCESS, (state, { task }) => {
    let index = state.findIndex((_) => _.id == task.id);
    state[index] = task;
    let newState = [...state]
    return newState;
  }),
  on(DELETE_TASK_SUCCESS, (state, { task }) => {
    let newState = state.filter((_) => _.id != task.id);
    return newState;
  }),
);
