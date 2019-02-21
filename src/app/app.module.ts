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

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'books', canActivate: [AuthGuardService], component: BookListComponent},
  {path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent},
  {path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: '**', redirectTo: '/homepage'}
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
    AuthService, AuthGuardService, BooksService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
