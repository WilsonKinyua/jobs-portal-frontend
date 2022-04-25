import { User } from '../shared/models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  errorMessage: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  // login user
  login(username: string, password: string) {
    return this.http.post(environment.apiUrl + '/auth/', {
      username: username,
      password: password,
    });
  }
  // register user
  register(
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string
  ) {
    return this.http.post(environment.apiUrl + '/user/create/', {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    });
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getUserLoggedInToken() {
    return JSON.parse(localStorage.getItem('token') ?? '');
  }
  getLoggedUserDetailsLocalStorage(): User {
    return JSON.parse(localStorage.getItem('user') ?? '');
  }
  getUserDetailsToken(token: string) {
    return this.http.post(environment.apiUrl + '/user/details/', {
      token: token,
    });
  }
  getUserId() {
    return this.http.get(
      environment.apiUrl +
        '/user/' +
        this.getUserLoggedInToken().token +
        '/details/'
    );
  }
  checkIsUserAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
