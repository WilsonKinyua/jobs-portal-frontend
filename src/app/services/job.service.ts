import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  // get jobs list
  getJobsList() {
    return this.http.get(environment.apiUrl + '/jobs/');
  }

  // get job details by id
  getJob(id: number) {
    return this.http.get(environment.apiUrl + '/job/' + id);
  }

  // create job
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
    link_to_job: string,
    user: number
  ) {
    return this.http.post(environment.apiUrl + '/jobs/', {
      company_name,
      company_website,
      title,
      category,
      salary_range,
      job_type,
      job_description,
      location,
      application_deadline,
      experience,
      qualification,
      link_to_job,
      user,
    });
  }

  // update job
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
    id: number,
    user: number
  ) {
    return this.http.put(environment.apiUrl + '/job/' + id, {
      company_name,
      company_website,
      title,
      category,
      salary_range,
      job_type,
      job_description,
      location,
      application_deadline,
      experience,
      qualification,
      link_to_job,
      user,
    });
  }

  // get user jobs list
  getUserJobs(id: number) {
    return this.http.get(environment.apiUrl + '/user/' + id + '/jobs');
  }

  // get jobs by search
  getJobsBySearch(search: string) {
    return this.http.get(environment.apiUrl + '/job/search/' + search);
  }

  // delete job
  deleteJob(id: number) {
    return this.http.delete(environment.apiUrl + '/job/' + id);
  }

  // search jobs by category id
  getJobsByCategory(id: number) {
    return this.http.get(environment.apiUrl + '/category/' + id + '/jobs');
  }
}
