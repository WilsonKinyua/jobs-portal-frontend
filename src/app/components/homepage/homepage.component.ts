import { NgForm } from '@angular/forms';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  categories: any = [];
  jobs: any = [];
  error: any;
  success: any;
  loading = false;
  catDisplay = true;

  constructor(
    private catService: CategoryService,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getJobsList();
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

  getJobsList() {
    this.jobService.getJobsList().subscribe(
      (response) => {
        this.jobs = response;
      },
      (error) => {
        console.log(error);
        this.error = 'No such results';
      }
    );
  }

  searchJobs(form: NgForm) {
    this.loading = true;
    this.jobService.getJobsBySearch(form.form.value.query).subscribe(
      (response) => {
        this.loading = false;
        this.catDisplay = false;
        this.jobs = response;
        this.success = "Below is your search results";
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
