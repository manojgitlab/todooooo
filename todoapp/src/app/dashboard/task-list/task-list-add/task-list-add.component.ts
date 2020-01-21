import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TaskList } from '../../../model/TaskList';
import {TaskService} from '../../../service/task.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-task-list-add',
  templateUrl: './task-list-add.component.html',
  styleUrls: ['./task-list-add.component.css']
})
export class TaskListAddComponent implements OnInit {

  constructor(private taskService:TaskService,private modalService: NgbModal) { }
 @Input() id:number;
 @Output() refreshList:EventEmitter<string>=new EventEmitter<string>()
 isEditable:boolean=false;
 taskList:TaskList;
 err:string;
  ngOnInit() {
    debugger;
    if(this.id!=-1){ 
      this.isEditable=true;
        this.taskService.getTaskList(this.id).subscribe(data=>{
        this.taskList=data;
        console.log(this.taskList);
      });
    }
  }

  addTask(taskname:string){
    if(taskname.trim()==""){
      this.err="Task name cannot be empty"
      return;
    }
    let task=new TaskList();
    //initializing task object before sending to server
    task.id=0;
    task.name=taskname;
    task.tasks=[];

    //sending task to server
    this.taskService.addNewTaskList(task).subscribe(data=>{
      this.refreshList.emit("");
      this.modalService.dismissAll();
     
    })  
  }

  updateTask(taskName:string){
    if(taskName.trim()==""){
      this.err="Task name cannot be empty"
      return;
    }
    let taskList=this.taskList;
    taskList.name=taskName;
    this.taskService.updateTaskListName(taskList).subscribe(data=>{
     
      this.refreshList.emit("");
      this.modalService.dismissAll();
      console.log("Emitting event")
    });
}


deleteTask(){
  console.log("Deleteing task list")
  this.taskService.DeleteTaskList(this.id).subscribe(data=>{
    this.refreshList.emit("");
    this.modalService.dismissAll();
  
  },
  err=>{
    console.log("Deleteing task list with error")
  }
)

console.log("Deleteing task list completed")
}
close(){
  this.modalService.dismissAll();
}




}
