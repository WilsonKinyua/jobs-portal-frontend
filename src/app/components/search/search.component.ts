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
  preloader = false;
  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit(): void {
    this.preloader = true;
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.searchParam = params;
        this.jobService
          .getJobsBySearch(this.searchParam.search)
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

    if (this.searchParam.search == undefined) {
      this.preloader = true;
      this.jobService.getJobsList().subscribe((response) => {
        this.preloader = false;
        this.jobs = response;
      });
    }
  }
}
