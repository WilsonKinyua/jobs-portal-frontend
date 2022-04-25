import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'job-details/:id',
    component: JobDetailsComponent,
  },
  {
    path: 'dashboard/create-a-job',
    component: CreateJobComponent,
  },
  {
    path: 'dashboard/jobs-list',
    component: JobsListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
