import { JobService } from 'src/app/services/job.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent implements OnInit {
  constructor(private JobService: JobService) {}

  jobs: any = [];
  successMessage: any;

  covertDate(date: any) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit(): void {
    this.getUserLists();
  }

  getUserLists() {
    this.JobService.getUserJobs().subscribe((response) => {
      this.jobs = response;
    });
  }

  deleteJob(id: number) {
    this.JobService.deleteJob(id).subscribe((response) => {
      this.getUserLists();
      this.successMessage = 'Job removed';
    });
  }
}
