import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HeaderComponent} from './header/header.component';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {SidebarModule} from 'ng-sidebar';
import {HttpClientModule} from '@angular/common/http';
import {HomepageComponent} from './homepage/homepage.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventService} from './services/event.service';
import {EventDetailComponent} from './event-list/event-detail/event-detail.component';
import {EventFormComponent} from './event-list/event-form/event-form.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {BsDatepickerModule} from 'ngx-bootstrap';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'events', component: EventListComponent},
  {path: 'events/new', component: EventFormComponent},
  {path: 'events/view/:id', component: EventDetailComponent},
  {path: '', component: HomepageComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    EventListComponent,
    EventDetailComponent,
    EventFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'}, AuthService, EventService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
