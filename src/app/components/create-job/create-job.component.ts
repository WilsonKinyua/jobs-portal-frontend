import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { JobService } from 'src/app/services/job.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {
  constructor(
    private catService: CategoryService,
    private jobAuth: JobService,
    private auth: AuthService
  ) {}

  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;
  loading = false;
  user: any;

  ngOnInit(): void {
    this.getCategories();
    // console.log(this.getUserId());
  }

  getCategories() {
    this.catService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createJob(form: NgForm) {
    let data = form.form.value;
    this.loading = true;
    this.jobAuth
      .createJob(
        data.company_name,
        data.company_website,
        data.title,
        data.category,
        data.salary_range,
        data.job_type,
        data.job_description,
        data.location,
        data.application_deadline,
        data.experience,
        data.qualification,
        data.job_to_job
      )
      .subscribe(
        (response) => {
          this.loading = false;
          this.successMessage = 'Job created successfully';
          form.reset();
        },
        (error) => {
          this.loading = true;
          this.error = true;
          this.errorMessages = error.error;
        }
      );
  }

  // get user id
  // getUserId(token:string){
  // getUserId() {
  //   return this.auth.getUserId().subscribe((response) => {
  //     this.user = response;
  //   });
  // }
}
