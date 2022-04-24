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
      username,
      first_name,
      last_name,
      email,
      password,
    });
  }

  // logout user
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    window.location.reload();
  }

  // get user data
  getUserId() {
    return this.http.get(
      environment.apiUrl +
        '/user/' +
        JSON.parse(localStorage.getItem('token') ?? '').token +
        '/details/'
    );
  }

  // check if user is authenticated
  checkIsUserAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
