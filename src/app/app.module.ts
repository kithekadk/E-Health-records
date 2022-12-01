import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { DoctorSignupComponent } from './components/doctor-signup/doctor-signup.component';
import { UpdatePatientInfoComponent } from './components/update-patient-info/update-patient-info.component';
import { PatientregIDComponent } from './components/patientreg-id/patientreg-id.component';
import { DoctorSerialnoComponent } from './components/doctor-serialno/doctor-serialno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PatientRegisterComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent,
    DoctorSignupComponent,
    UpdatePatientInfoComponent,
    PatientregIDComponent,
    DoctorSerialnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
