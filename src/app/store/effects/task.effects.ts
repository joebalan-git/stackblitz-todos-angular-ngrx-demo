import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { TaskService } from "src/app/services/task.service";
import { AddTaskAction, DeleteTaskAction, EditTaskAction, GetTasksAction, TaskActionType } from "../actions/task.action";
import { map, switchMap } from "rxjs";
import { Task } from "../models/task.model";

@Injectable()
export class TaskEffects {

    constructor(private action$: Actions, private taskService: TaskService) {}

    getTasks = createEffect(() => this.action$.pipe(
            ofType(TaskActionType.GET_TASKS),
            switchMap(() => {
                return this.taskService.getTasks().pipe(
                    map((res: Task[]) => {
                        return new GetTasksAction(res);
                    })
                )
            })
        )
    )

    addTask = createEffect(() => this.action$.pipe(
        ofType(TaskActionType.ADD_TASK),
        switchMap((taskAction: AddTaskAction) => {
            return this.taskService.addTask(taskAction.payload).pipe(
                map((res: Task) => {
                    return new AddTaskAction(res);
                })
            )
        })
    ))

    editTask = createEffect(() => this.action$.pipe(
        ofType(TaskActionType.EDIT_TASK),
        switchMap((taskAction: EditTaskAction) => {
            return this.taskService.updateTask(taskAction.payload).pipe(
                map((res: Task) => {
                    return new EditTaskAction(res);
                })
            )
        })
    ))

    deleteTask = createEffect(() => this.action$.pipe(
        ofType(TaskActionType.DELETE_TASK),
        switchMap((taskAction: DeleteTaskAction) => {
            return this.taskService.deleteTask(taskAction.payload).pipe(
                map((res: Task) => {
                    return new DeleteTaskAction(res);
                })
            )
        })
    ))
}