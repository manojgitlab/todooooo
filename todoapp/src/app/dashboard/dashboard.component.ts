import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskList } from '../model/TaskList';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   //Variable Declarations
    taskList:TaskList;
    showgrid:string="false";
  //Variable Declaration End here 
  constructor(private http: HttpClient) {
 
   }
   ngOnInit(){
  
   }
   getTask(event){
    this.taskList=event;
    this.showgrid="true";
    console.log(this.taskList);
  }
  showGrid(){
    if(this.showgrid=="true"){
      return "col-sm-6" ;
    }
    else{
      return "col-sm-12" ;
    }
  }
}
