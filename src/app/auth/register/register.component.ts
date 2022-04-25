import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loading = false;
  errorMessage: any;
  successMessage: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  registerUser(form: NgForm) {
    this.loading = true;
    this.authService
      .register(
        form.form.value.first_name,
        form.form.value.last_name,
        form.form.value.email,
        form.form.value.username,
        form.form.value.password
      )
      .subscribe(
        (response) => {
          this.loading = false;
          this.successMessage = 'User created successfully. Proceed to login';
          form.reset();
        },
        (error) => {
          this.loading = false;
          this.errorMessage =
            'Error occurred while trying to create account. Try again!';
        }
      );
  }
}
