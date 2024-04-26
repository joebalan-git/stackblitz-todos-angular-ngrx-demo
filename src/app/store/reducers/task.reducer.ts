import { TaskAction, TaskActionType } from '../actions/task.action';
import { Task } from '../models/task.model';

// create a dummy initial state
const initialState: Array<Task> = [];

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
    case TaskActionType.EDIT_TASK:
      const index = state.findIndex(task => task.id === action.payload.id)
      const updatedTask = {
        ...state[index],
        ...action.payload
      };
      const updatedTasks = [
        ...state
      ];
      return {
        ...updatedTasks
      }
    case TaskActionType.DELETE_TASK:
      const tasksAfterDelete = state.filter(task => task.id !== action.payload.id)
      return {
        ...tasksAfterDelete
      }
    default:
      return state;
  }
}
