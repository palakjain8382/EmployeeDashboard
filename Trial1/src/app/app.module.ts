import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {  GoogleLoginProvider} from '@abacritt/angularx-social-login';

import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EmpCardsComponent } from './components/emp-cards/emp-cards.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';

import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectsComponent } from './components/projects/projects.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { WorkInComponent } from './components/work-in/work-in.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    EmpCardsComponent,
    EmpDetailsComponent,
    CalendarComponent,
    ProjectsComponent,
    WorkInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('627823439671-rcguq1mr3qe6ul5bu61pp3idu9qjji27.apps.googleusercontent.com')
          }],
          onError: (err) => {
            console.error(err);
          }
        } as SocialAuthServiceConfig,
      }
  ],
bootstrap: [AppComponent],
})
export class AppModule { }
