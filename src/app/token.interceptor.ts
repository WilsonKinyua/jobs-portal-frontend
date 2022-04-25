import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.checkIsUserAuthenticated()) {
      let tokenObject = this.authService.getUserLoggedInToken();
      if (tokenObject && tokenObject.token) {
        request = request.clone({
          setHeaders: { Authorization: `${tokenObject.token}` },
        });
      }
      request = request.clone({
        setHeaders: { 'Content-Type': 'application/json' },
      });
    }
    return next.handle(request);
  }
}
