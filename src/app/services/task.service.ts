import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs';
import { Task } from "src/app/store/models";

@Injectable({
    providedIn: 'root'
})
export class TaskService{

    apiUrl = "https://jsonplaceholder.typicode.com";
    constructor(private http: HttpClient) {

    }

    getTasks() {
        return this.http.get(`${this.apiUrl}/todos`);
    }

    addTask(task: Task){
        return this.http.post(`${this.apiUrl}/todos`, task);
    }

    editTask(task: Task){
        return this.http.put(`${this.apiUrl}/todos/${task.id}`, task);
    }

    deleteTask(task: Task){
        return this.http.delete(`${this.apiUrl}/todos/${task.id}`).pipe(
            map((res) => {
                return task;
            })
        );
    }
}