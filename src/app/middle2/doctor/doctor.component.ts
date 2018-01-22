import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  doctors: any[];

  constructor( public _doctorService: DoctorService) {
    this.doctors = [];
   }

  ngOnInit() {
  }

  greetDoctor( name: string ) {
    return `Hello ${ name }`;
  }

  getDoctors() {
    this._doctorService.getDoctors()
    .subscribe( (doctors: any[]) => this.doctors = doctors );
  }
}
