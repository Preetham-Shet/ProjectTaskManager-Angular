import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

const routes:Routes = [
  {
    path: 'admin',
    data: { expectedRole: 'Admin' },
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'projects/view/:projectid', component: ProjectDetailsComponent },
    ],
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
export class AdminRoutingModule { }
