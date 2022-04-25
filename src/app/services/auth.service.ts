import { User } from '../shared/models/user';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: Observable<User>;
  errorMessage: string = '';
  constructor(private http: HttpClient, private router: Router) {}

  // login user
  login(username: string, password: string) {
    return this.http.post(environment.apiUrl + '/auth/', {
      username: username,
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
  // getUserDetailsToken(token: string) {
  //   return this.http.post(environment.apiUrl + '/user/details/', {
  //     token: token,
  //   });
  // }
  checkIsUserAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
