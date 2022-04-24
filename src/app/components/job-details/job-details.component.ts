import { JobService } from 'src/app/services/job.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private JobService: JobService) {}

  jobId: any;
  job: any;
  preloader= false;

  ngOnInit(): void {
    this.preloader = true;
    let paramSub = this.route.params.subscribe(
      (params) => {
        this.jobId = params;
        this.jobId = this.jobId.id;
        this.JobService.getJob(this.jobId).subscribe((response) => {
          this.preloader = false;
          this.job = response;
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
