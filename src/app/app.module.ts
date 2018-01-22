import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DoctorsComponent } from './middle/spies/doctor.component';
import { DoctorComponent } from './middle2/doctor/doctor.component';
import { DoctorService } from './middle2/doctor/doctor.service';

import { HospitalComponent } from './middle2/hospital/hospital.component';
import { IncrementComponent } from './middle2/increment/increment.component';


import { RouterModule } from '@angular/router';
import { ROUTES } from './advanced/routes/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    DoctorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
