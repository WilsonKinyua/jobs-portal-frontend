import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
})
export class EditJobComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private JobService: JobService,
    private CategoryService: CategoryService
  ) {}

  jobId: any;
  job: any;
  categories: any = [];
  errorMessages: any;
  successMessage: any;
  error = false;

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.jobId = params;
        this.jobId = this.jobId.id;
        this.JobService.getJob(this.jobId).subscribe((response) => {
          this.job = response;
          console.log(this.job);
        });
      },
      (error) => {
        console.error(error);
        paramSub.unsubscribe();
      },
      () => {
        paramSub.unsubscribe();
      }
    );

    this.getCategories();
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
      this.jobId
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
