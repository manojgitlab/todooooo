import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../model/Task';
import { TaskService } from '../../../service/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-taskupdate',
  templateUrl: './taskupdate.component.html',
  styleUrls: ['./taskupdate.component.css']
})
export class TaskupdateComponent implements OnInit {
 
  @Input() task:Task;
  taskName:string;
 err:string;
  
 @Output() deleteTaskFromList:EventEmitter<Task>=new EventEmitter<Task>();
 
  constructor(private taskService: TaskService, private modalService: NgbModal) {
   
  }

  ngOnInit() {
    this.taskName=this.task.name;
  }
  updateTask(){
    if(this.taskName.trim()==""){
      this.err="Task name cannot be empty"
      return;
    }
    let item=new Task();
    item=this.task;
    item.name=this.taskName;

    this.taskService.updateTask(item).subscribe(data=>{
        this.task.name=this.taskName;
        this.modalService.dismissAll();
    })

  }

  deleteTask(){
    this.taskService.DeleteTask(this.task).subscribe(data=>{
      console.log("Deleted Successfully");
      
      this.deleteTaskFromList.emit(this.task);
      this.modalService.dismissAll();
    },err=>{
      console.log("Error in deleting");
      console.log(err);
    });
   
  }
  close(){
    this.modalService.dismissAll();
  }
   
}
