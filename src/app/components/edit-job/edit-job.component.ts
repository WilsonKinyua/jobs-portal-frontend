import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
})
export class EditJobComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private JobService: JobService,
    private CategoryService: CategoryService,
    private router: Router,
    private auth: AuthService
  ) {}

  jobId: any;
  job: any;
  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;
  userId: any;
  preloader = false;

  ngOnInit(): void {
    this.preloader = true;
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.jobId = params;
        this.jobId = this.jobId.id;
        this.JobService.getJob(this.jobId).subscribe((response) => {
          this.preloader = false;
          this.job = response;
          console.log(this.job);
        });
      },
      (error) => {
        this.preloader = false;
        console.error(error);
        paramSub.unsubscribe();
      },
      () => {
        paramSub.unsubscribe();
      }
    );

    this.getCategories();

    this.getCurrentLoggedInUserId();
  }

  getCurrentLoggedInUserId() {
    this.auth.getUserId().subscribe(
      (reponse) => {
        this.userId = reponse;
        this.userId = this.userId.id;
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );
  }

  getCategories() {
    this.CategoryService.getCategories().subscribe(
      (response) => {
        this.categories = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateJob(form: NgForm) {
    let data = form.form.value;
    this.JobService.updateJob(
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
      this.jobId,
      this.userId
    ).subscribe(
      (response) => {
        this.successMessage = 'Job updated successfully';
        form.reset();
      },
      (error) => {
        console.log(error);
        this.error = true;
        this.errorMessages = error.error;
      }
    );
  }
}
