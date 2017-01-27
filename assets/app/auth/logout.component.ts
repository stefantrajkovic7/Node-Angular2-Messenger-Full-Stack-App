import { Component } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <button class="btn btn-danger" (click)="onLogout()">Logout</button>
    </div>
  `
})

export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {

  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'signin']);
  }

}
