import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { TaskList } from '../../model/TaskList';
import { Task } from '../../model/Task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-list-view',
  templateUrl: './task-list-view.component.html',
  styleUrls: ['./task-list-view.component.css']
})
export class TaskListViewComponent implements OnInit {
  //Variable Declarations
  taskLists: TaskList[];
  taskList:TaskList;
  id:number;

  @Output() notifiy:EventEmitter<TaskList>=new EventEmitter<TaskList>();
  //Variable Declaration End here


  constructor(private modalService: NgbModal,
              private taskService: TaskService
             ) {

  }

  ngOnInit() {
    this.getAllTaskList();
  }

  getAllTaskList() {
    this.taskService.getTaskLists().subscribe(taskLists => {
      this.taskLists = taskLists;
      console.log(taskLists);
    })
  }

  showTaskItems(taskList:TaskList){
    this.notifiy.emit(taskList);
  }

  addDialog(content){
    this.id=-1;
    this.modalService.open(content, { centered: true }); 
  }

  editDialog(content,taskList:TaskList){
    this.id=taskList.id;
    this.taskList=taskList;
    this.modalService.open(content, { centered: true }); 
  }
  
  deleteFromTaskList(event){
    this.taskLists=this.taskLists.filter(taskList=>taskList.id!==event.id)
  }

  refreshList(event){
    console.log("RefreshList");
    console.log(event);
    
    this.getAllTaskList();
  }
}
