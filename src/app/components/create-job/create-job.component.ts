import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { JobService } from 'src/app/services/job.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {
  constructor(
    private catService: CategoryService,
    private jobAuth: JobService,
    private auth: AuthService,
    private router: Router
  ) {}

  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;
  loading = false;
  userId: any;

  ngOnInit(): void {
    this.getCategories();
    this.getCurrentLoggedInUserId();
  }

  getCurrentLoggedInUserId() {
    this.auth.getUserId().subscribe(
      (reponse) => {
        this.userId = reponse;
        this.userId = this.userId.id;
        console.log(this.userId);
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );
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
        data.job_link,
        this.userId
      )
      .subscribe(
        (response) => {
          this.loading = false;
          this.successMessage = 'Job created successfully';
          this.errorMessages = null;
          form.reset();
          this.router.navigate(['/dashboard/jobs-list']);
        },
        (error) => {
          this.loading = false;
          this.error = true;
          this.errorMessages = error.error;
        }
      );
  }
}
