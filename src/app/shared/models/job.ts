export class Job {
  constructor(
    public company_name: string,
    public company_website: string,
    public title: string,
    public category: number,
    public salary_range: string,
    public job_type: string,
    public job_description: string,
    public location: string,
    public application_deadline: string,
    public experience: string,
    public qualification: string,
    public link_to_job: string,
    public user: number,
    public slug?: string,
    public id?: number
  ) {}
}
