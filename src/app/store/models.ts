export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskRootState {
  ['task']: Task[];
}

export interface AppState {
  task: Task[];
}