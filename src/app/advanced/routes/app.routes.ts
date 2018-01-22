import { Routes } from '@angular/router';
import { HospitalComponent } from '../../middle2/hospital/hospital.component';
import { DoctorComponent } from '../../middle2/doctor/doctor.component';
import { IncrementComponent } from '../../middle2/increment/increment.component';

export const ROUTES: Routes = [
    { path: '/hospital', component: HospitalComponent },
    { path: '/doctor/:id', component: DoctorComponent },
    { path: '**', component: IncrementComponent }
];
