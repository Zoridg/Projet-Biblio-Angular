import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isConnected()) {
      this.router.navigate(['/events']);
    }
  }
}
