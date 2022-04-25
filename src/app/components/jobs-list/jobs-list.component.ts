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
}
