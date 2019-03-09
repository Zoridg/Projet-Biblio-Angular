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
import {AccordionModule, BsDatepickerModule, TabsModule} from 'ngx-bootstrap';
import {EventInfoComponent} from './event-list/event-detail/event-info/event-info.component';
import {EventParticipateComponent} from './event-list/event-detail/event-participate/event-participate.component';
import {EventBalanceComponent} from './event-list/event-detail/event-balance/event-balance.component';
import {UserService} from './services/user.service';
import {ParticipateService} from './services/participate.service';
import {PaymentService} from './services/payment.service';
import {PaimentComponent} from './event-list/paiment/paiment.component';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BalanceComponent} from './event-list/event-detail/event-balance/balance/balance.component';
import {ChartsModule, WavesModule} from 'angular-bootstrap-md';
import {AccountService} from './services/account.service';
import {MatTabsModule} from '@angular/material/tabs';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'events', component: EventListComponent},
  {path: 'events/new', component: EventFormComponent},
  {path: 'events/view/:id', component: EventDetailComponent},
  {path: 'events/balance/:id', component: BalanceComponent},
  {path: 'paiment/new', component: PaimentComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
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
    EventInfoComponent,
    EventParticipateComponent,
    EventBalanceComponent,
    PaimentComponent,
    BalanceComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    SidebarModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    ChartsModule, WavesModule,
    MatTabsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    AuthService,
    EventService,
    UserService,
    ParticipateService,
    PaymentService,
    AccountService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
