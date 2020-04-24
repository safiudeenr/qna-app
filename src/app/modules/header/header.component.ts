import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  constructor(private authService: AuthService) {
    // this.authService.currentUser.subscribe(u => this.currentUser = u.name);
  }

  ngOnInit(): void {
  }

}
