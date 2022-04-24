export class User {
  constructor(
    public password: string,
    public username: string,
    public email?: string,
    public id?: number,
    public token?: string,
  ) {}
}
