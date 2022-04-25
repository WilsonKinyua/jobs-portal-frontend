import { JobService } from 'src/app/services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss'],
})
export class JobsListComponent implements OnInit {
  constructor(
    private JobService: JobService,
    private router: Router,
    private auth: AuthService
  ) {}

  jobs: any = [];
  successMessage: any;
  userId: any;

  covertDate(date: any) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit(): void {
    this.auth.getUserId().subscribe(
      (response) => {
        this.userId = response;
        this.JobService.getUserJobs(this.userId.id).subscribe((response) => {
          this.jobs = response;
        });
      },
      (error) => {
        this.router.navigate(['/login']);
      }
    );
  }

  deleteJob(id: number) {
    this.JobService.deleteJob(id).subscribe((response) => {
      this.successMessage = 'Job removed';
    });
  }
}
