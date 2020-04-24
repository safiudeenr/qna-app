import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(u => this.currentUser = u);
    if (!this.currentUser) {
      this.router.navigate(['/logon']);
   }
  }
    ngOnInit(): void {
  }

}
