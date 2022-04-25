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
  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.categoryId = params;
        this.jobService
          .getJobsByCategory(this.categoryId.category)
          .subscribe((response) => {
            this.jobs = response;
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
  }
}
