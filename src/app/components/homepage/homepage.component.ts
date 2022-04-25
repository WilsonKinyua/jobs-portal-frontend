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
      }
    );
  }
}
