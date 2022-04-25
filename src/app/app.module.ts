import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { FormsModule } from '@angular/forms';
import { EditJobComponent } from './components/edit-job/edit-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    JobDetailsComponent,
    JobsListComponent,
    CreateJobComponent,
    EditJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
