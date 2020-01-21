import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from '../../model/TaskList';
import { Task } from '../../model/Task';
import { TaskService } from '../../service/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debug } from 'util';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 //Variable Declarations
   @Input() taskList:TaskList;
   task:Task;
 //Variable Declaration End here
 
 constructor(private taskService: TaskService, private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.taskList)
  }

  editDialog(edit,task:Task){
    this.task=task;
    this.modalService.open(edit, { centered: true }); 
  }

  addDialog(content){
    this.modalService.open(content, { centered: true }); 
  }
  markComplete(task:Task){
    let item=task;
    if(item.status==true){
      item.status=false;
    }
    else{
      item.status=true;
    }
 
    this.taskService.updateTask(item).subscribe(data=>{
      task=data;
    })
  }

  deleteTaskFromList(event){
    debugger;
    console.log("Deleting task from list ");
    console.log(event);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
   this.taskList.tasks=this.taskList.tasks.filter(task=> task.id!==event.id);
  }
}
