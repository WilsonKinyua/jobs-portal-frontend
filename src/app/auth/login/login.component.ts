import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  errorMessage: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.checkIsUserAuthenticated()) {
      this.router.navigate(['/dashboard/jobs-list']);
    }
  }

  loginUser(form: NgForm) {
    this.loading = true;
    this.authService
      .login(form.form.value.username, form.form.value.password)
      .subscribe(
        (response) => {
          localStorage.setItem('token', JSON.stringify(response));
          this.loading = false;
          if (this.authService.checkIsUserAuthenticated()) {
            form.reset();
            this.router.navigate(['/dashboard/jobs-list']);
            // window.location.reload();
          }
        },
        (error) => {
          this.loading = false;
          this.errorMessage = error.error.non_field_errors;
        }
      );
  }
}
