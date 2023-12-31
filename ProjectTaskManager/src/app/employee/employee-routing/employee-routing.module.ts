import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from '../components/tasks/tasks.component';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { EditTaskComponent } from '../components/edit-task/edit-task.component';
import { UpdateTaskStatusComponent } from '../components/update-task-status/update-task-status.component';

const routes: Routes = [
  {
    path: 'employee',
    data: { expectedRole: 'Employee' },
    children: [
      { path: 'tasks', component: TasksComponent, data: { linkIndex: 1 } },
      {
        path: 'createtask',
        component: CreateTaskComponent,
        data: { linkIndex: 2 },
      },
      {
        path: 'edittask/:taskid',
        component: EditTaskComponent,
        data: { linkIndex: 3 },
      },
      {
        path: 'updatetaskstatus/:taskid',
        component: UpdateTaskStatusComponent,
        data: { linkIndex: 4 },
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
