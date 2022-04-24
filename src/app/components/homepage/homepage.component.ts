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
  preloader = false;

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
    this.preloader = true;
    this.catService.getCategories().subscribe(
      (response) => {
        this.preloader = false;
        this.categories = response;
      },
      (error) => {
        this.preloader = false;
        console.log(error);
      }
    );
  }

  getJobsList() {
    this.preloader = true;
    this.jobService.getJobsList().subscribe(
      (response) => {
        this.preloader = false;
        this.jobs = response;
      },
      (error) => {
        this.preloader = false;
        console.log(error);
      }
    );
  }

  searchJobs(form: NgForm) {
    if (form.invalid) {
      this.error = true;
      return;
    }
    this.router.navigate(['/search/', form.form.value.query]);
  }
}
