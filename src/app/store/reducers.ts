import { createReducer, on } from '@ngrx/store';
import { LOAD_TASKS_SUCCESS, ADD_TASK_SUCCESS } from './actions';
import { TaskState } from './models';

const initialState: TaskState = {};

export const taskReducer = createReducer(
  initialState,
  on(LOAD_TASKS_SUCCESS, (state, { task }) =>
    task.reduce((acc, task) => ({
        ...acc,
        [task.id]: task,
      }),
      {}
    )
  ),
  on(ADD_TASK_SUCCESS, (state, { task }) => {
    // state.task.unshift(task);
    // task.reduce((acc, task) => ({
    //     ...acc,
    //     [task.id]: task,
    //   }),
    //   {}
    // )
    return {
      [task.id]: task,
      ...state,
    };
  })
);
