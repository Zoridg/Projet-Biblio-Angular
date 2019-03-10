import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pseudo: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.pseudo = this.authService.user.pseudo;
  }

  onSignOut() {
    this.authService.signOutUser();
  }

  public isConnected(): boolean {
    return !!this.authService.user;
  }
}
