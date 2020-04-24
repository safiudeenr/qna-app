import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  loggedUser: string;
  constructor(private authService: AuthService) {
     this.authService.currentUser.subscribe(u => this.currentUser = u);
     if(!this.currentUser) {
       console.log(JSON.stringify(this.currentUser));
       //this.loggedUser = this.currentUser.userName;
     }
  }

  ngOnInit(): void {
  }

}
