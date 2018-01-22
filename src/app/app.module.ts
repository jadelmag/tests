import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DoctorsComponent } from './middle/spies/doctor.component';
import { DoctorComponent } from './middle2/doctor/doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
