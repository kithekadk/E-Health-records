import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { DoctorSerialnoComponent } from './components/doctor-serialno/doctor-serialno.component';
import { DoctorSignupComponent } from './components/doctor-signup/doctor-signup.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientregIDComponent } from './components/patientreg-id/patientreg-id.component';

const routes: Routes = [
  {path:'', component: NavbarComponent},
  {path:'home', component:HomeComponent},
  {path:'patient', component:PatientregIDComponent},
  {path:'signup', component: PatientRegisterComponent},
  {path:'medic', component: DoctorSerialnoComponent},
  {path:'medic-dashboard', component: DoctorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
