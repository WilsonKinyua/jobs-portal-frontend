import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job } from '../shared/models/job';
@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getJobsList() {
    return this.http.get(environment.apiUrl + '/jobs/');
  }

  getJob(id: number) {
    return this.http.get(environment.apiUrl + '/job/' + id);
  }

  createJob(
    company_name: string,
    company_website: string,
    title: string,
    category: number,
    salary_range: string,
    job_type: string,
    job_description: string,
    location: string,
    application_deadline: string,
    experience: string,
    qualification: string,
    link_to_job: string
  ) {
    return this.http.post(environment.apiUrl + '/jobs/', {
      company_name: company_name,
      company_website: company_website,
      title: title,
      category: category,
      salary_range: salary_range,
      job_type: job_type,
      job_description: job_description,
      location: location,
      application_deadline: application_deadline,
      experience: experience,
      qualification: qualification,
      link_to_job: link_to_job,
      user: 1,
    });
  }

  updateJob(
    company_name: string,
    company_website: string,
    title: string,
    category: number,
    salary_range: string,
    job_type: string,
    job_description: string,
    location: string,
    application_deadline: string,
    experience: string,
    qualification: string,
    link_to_job: string,
    id:number
  ) {
    return this.http.put(environment.apiUrl + '/job/' + id, {
      company_name: company_name,
      company_website: company_website,
      title: title,
      category: category,
      salary_range: salary_range,
      job_type: job_type,
      job_description: job_description,
      location: location,
      application_deadline: application_deadline,
      experience: experience,
      qualification: qualification,
      link_to_job: link_to_job,
      user: 1,
    });
  }

  getUserJobs() {
    return this.http.get(environment.apiUrl + '/user/' + 1 + '/jobs');
  }

  deleteJob(id: number) {
    return this.http.delete(environment.apiUrl + '/job/' + id);
  }
}
