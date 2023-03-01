import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { AllEmployeesComponent } from './components/all-employees/all-employees.component';
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
   {path: '', component: LoginComponent},
   {path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
   {path: 'projects', component: ProjectsComponent,  canActivate: [AuthGuard] },
   {path: 'profile', component: ProfileComponent,  canActivate: [AuthGuard]},
   {path: 'addemp', component: AddEmployeeComponent,  canActivate: [AuthGuard]},
   {path: 'help', component: HelpPageComponent,  canActivate: [AuthGuard]},
   {path: 'empDirectory', component: AllEmployeesComponent,  canActivate: [AuthGuard]},
   {path: 'faq', component: FaqComponent,  canActivate: [AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
