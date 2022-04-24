import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  jobs: any = [];
  categoryId: any;
  preloader = false;
  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    this.preloader = true;
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.categoryId = params;
        this.jobService
          .getJobsByCategory(this.categoryId.category)
          .subscribe((response) => {
            this.preloader = false;
            this.jobs = response;
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
  }
}
