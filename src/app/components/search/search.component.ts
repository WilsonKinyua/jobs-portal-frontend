import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  jobs: any = [];
  searchParam: any;
  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.searchParam = params;
        this.jobService
          .getJobsBySearch(this.searchParam.search)
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

    if (this.searchParam.search == undefined) {
      this.jobService.getJobsList().subscribe((response) => {
        this.jobs = response;
      });
    }
  }
}
