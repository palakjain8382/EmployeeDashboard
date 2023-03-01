import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { FaqComponent } from './components/faq/faq.component';

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
    ProfileComponent,
    AddEmployeeComponent,
    HelpPageComponent,
    AllEmployeesComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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

  providers: [  ],
bootstrap: [AppComponent],
})
export class AppModule { }
