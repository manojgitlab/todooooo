import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../model/Task';
import { TaskService } from '../../../service/task.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TaskList } from '../../../model/TaskList';
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
 error:string;
@Input() taskList:TaskList;
  constructor(private taskService:TaskService,private modalService: NgbModal) { }
  err:string;
  ngOnInit() {
   
  }
  addTask(taskname:string){
   
    if(taskname.trim()===""){  //validation
     this.err="Please enter valid task name";
     return;
   }
    let task=new Task();
    //initializing task object before sending to server
    task.id=0;
    task.name=taskname;
    task.taskListId=this.taskList.id;
    //sending task to server
    this.taskService.addNewTask(task).subscribe(data=>{
      this.taskList.tasks.push(data);
      this.modalService.dismissAll();
    })
    
  }
}
