import { NgForm } from '@angular/forms';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  categories: any = [];
  jobs: any = [];
  error = false;
  loading = false;

  constructor(
    private catService: CategoryService,
    private jobService: JobService,
    private router: Router
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
      }
    );
  }

  searchJobs(form: NgForm) {
    this.loading = true;
    if (form.invalid) {
      this.loading = false;
      this.error = true;
      return;
    }
    this.router.navigate(['/search/', form.form.value.query]);
  }
}
