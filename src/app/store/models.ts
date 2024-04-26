export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskState {
  [id: string]: Task;
}

export interface TaskRootState {
  ['task']: TaskState;
}

export interface AppState {
  task: TaskState;
}