import { CategoryComponent } from './components/category/category.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EditJobComponent } from './components/edit-job/edit-job.component';
import { IsUserAuthenticatedGuard } from './guards/is-user-authenticated.guard';
import { SearchComponent } from './components/search/search.component';

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
    path: 'edit-job/:id',
    component: EditJobComponent,
    canActivate: [IsUserAuthenticatedGuard],
  },
  {
    path: 'dashboard/create-a-job',
    component: CreateJobComponent,
    canActivate: [IsUserAuthenticatedGuard],
  },
  {
    path: 'dashboard/jobs-list',
    component: JobsListComponent,
    canActivate: [IsUserAuthenticatedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'search/:search',
    component: SearchComponent,
  },
  {
    path: 'category/:category',
    component: CategoryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
