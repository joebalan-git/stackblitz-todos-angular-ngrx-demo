import { TaskAction, TaskActionType } from '../actions/task.action';
import { Task } from '../models/task.model';

// create a dummy initial state
const initialState: Array<Task> = [
  {
    id: 1,
    title: 'Test task',
  },
];

export function taskReducer(
  state: Array<Task> = initialState,
  action: TaskAction
) {
  switch (action.type) {
    case TaskActionType.GET_TASKS:
      return {
        ...state
      }
    case TaskActionType.ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
