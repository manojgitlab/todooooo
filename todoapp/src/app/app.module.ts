import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTooltipModule,MatIconModule,MatCardModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TaskListViewComponent} from './dashboard/task-list/task-list-view.component';
import { TaskComponent } from './dashboard/task/task.component';
import { TaskListAddComponent } from './dashboard/task-list/task-list-add/task-list-add.component';
import { TaskAddComponent } from './dashboard/task/task-add/task-add.component'
import { FormsModule } from '@angular/forms';
import { TaskupdateComponent } from './dashboard/task/taskupdate/taskupdate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskListViewComponent,
    TaskComponent,
    TaskListAddComponent,
    TaskAddComponent,
    TaskupdateComponent,
    DashboardComponent,
    TaskAddComponent
  ],
  imports: [
    MatIconModule,
    FormsModule,
    NgbModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[TaskListViewComponent]
})
export class AppModule { }
