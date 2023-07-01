import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';

const routes:Routes=[
  {
    path: 'employee',
    data: { expectedRole: 'Employee' },
    children: [{ path: 'tasks', component: TasksComponent }],
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class EmployeeRoutingModule { }
