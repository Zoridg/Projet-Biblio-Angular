import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {BookListComponent} from './book-list/book-list.component';
import {SingleBookComponent} from './book-list/single-book/single-book.component';
import {BookFormComponent} from './book-list/book-form/book-form.component';
import {HeaderComponent} from './header/header.component';
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {BooksService} from "./services/books.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './footer/footer.component';
import {SidebarModule} from "ng-sidebar";
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { EventListComponent } from './event-list/event-list.component';
import {EventService} from "./services/event.service";

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'books', component: BookListComponent},
  {path: 'books/new', component: BookFormComponent},
  {path: 'books/view/:id', component: SingleBookComponent},
  {path: 'events/:id', component: EventListComponent},
  {path: '', component: HomepageComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    EventListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    SidebarModule
  ],
  providers: [
    AuthService, AuthGuardService, BooksService, EventService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
