import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import * as firebase from 'firebase';
import {Book} from "../models/book.model";
import {BooksService} from "../services/books.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService, private booksService: BooksService) {
  }

  ngOnInit() {
    this.isAuth = !!localStorage.getItem('uno');
  }

  onSignOut() {
    this.authService.signOutUser();
    this.isAuth = false;
  }
}
