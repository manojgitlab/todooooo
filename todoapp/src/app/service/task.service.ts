import { Injectable } from '@angular/core';
import {TaskList} from '../model/TaskList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/Task';
import { debug } from 'util';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
URL:String="http://18.188.162.176:9090";
  constructor(private http: HttpClient) { }
  getTaskList(id:number){
    return this.http.get<TaskList>(this.URL+"/taskList/"+id);   
  }
  getTaskLists(){
    return this.http.get<TaskList[]>(this.URL+"/taskList");
  }
  
  addNewTaskList(taskList:TaskList){ 
  
    return this.http.post<TaskList>(this.URL+"/taskList",taskList);
  }
  updateTaskListName(taskList:TaskList){
    return this.http.put<Task>(this.URL+"/taskList",taskList);
  }

  DeleteTaskList(id:number){
    return this.http.delete<Task>(this.URL+"/taskList/"+id)
  }
  
  addNewTask(task:Task){   
    return this.http.post<Task>(this.URL+"/task",task);
  }
  updateTask(task:Task){
    return this.http.put<Task>(this.URL+"/task",task);
  }

  DeleteTask(task:Task){
    return this.http.delete<Task>(this.URL+"/task/"+task.id);
  }


}
