import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { TaskService } from "src/app/services/task.service";
import { GetTasksAction, TaskActionType } from "../actions/task.action";
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
}