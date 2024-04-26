import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskRootState } from './models';

const selectTaskFeature = createFeatureSelector<TaskRootState>('task');

export const selectTasks = createSelector(selectTaskFeature, (state) => Object.keys(state).map((key) => state[key]));
