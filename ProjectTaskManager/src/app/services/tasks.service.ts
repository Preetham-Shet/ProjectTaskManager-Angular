import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { GroupedTask } from '../models/grouped-task';
import { TaskStatusDetail } from '../models/task-status-detail';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private httpClient: HttpClient)
  {
  }

  getTasks() : Observable<GroupedTask[]>
  {
    return this.httpClient.get<GroupedTask[]>("/api/tasks", { responseType: "json" });
  }

  getTaskByTaskID(TaskID: number): Observable<Task> {
    return this.httpClient.get<Task>("/api/tasks/searchbytaskid/" + TaskID, { responseType: "json" });
  }

  updateTaskStatus(taskStatusDetail: TaskStatusDetail): Observable<TaskStatusDetail> {
    var user = JSON.parse(sessionStorage['currentUser']);
    //console.log(user);
    taskStatusDetail.userID = user.id; //add this statement to store the current user's id in the 'taskStatusDetails' table

    return this.httpClient.put<TaskStatusDetail>("/api/updatetaskstatus", taskStatusDetail, { responseType: "json" });
  }

  insertTask(newTask: Task): Observable<Task>
  {
    var user = JSON.parse(sessionStorage['currentUser']);
    newTask.createdBy = user.id; //add this statement to store the current user's id in the 'tasks' table
    return this.httpClient.post<Task>("/api/createtask", newTask, { responseType: "json" });
  }
}
