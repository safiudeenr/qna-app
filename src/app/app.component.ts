import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qna-app';

  currentUser: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/logon']);
}

}
