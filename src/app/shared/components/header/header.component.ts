import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isLoggedIn = false;

  ngOnInit(): void {
    if (!this.authService.checkIsUserAuthenticated()) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
  }
}
