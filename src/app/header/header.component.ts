import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import * as firebase from 'firebase';
import {Book} from "../models/book.model";
import {BooksService} from "../services/books.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  books: Book[];
  booksSubscription: Subscription;

  constructor(private authService: AuthService, private booksService: BooksService) {
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    )
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
