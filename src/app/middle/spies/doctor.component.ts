import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctor.service';

@Component({
  selector: 'app-doctors',
  template: `
    <p>
      doctors works!
    </p>
  `,
  styles: []
})

export class DoctorsComponent implements OnInit {

  public doctors: any[] = [];
  public messageError: string;

  constructor( public _doctorsService: DoctorsService ) { }

  ngOnInit() {
    this._doctorsService.getDoctors()
          .subscribe( doctors => this.doctors = doctors );
  }

  addDoctor() {
    const doctor = { name: 'Doctor Franciso Javier' };

    this._doctorsService.addDoctor(name)
          .subscribe(
            doctorDB => this.doctors.push(doctorDB),
            err => this.messageError = err
          );
  }

  removeDoctor(id: string) {
    const confirmation = confirm('Do you want delete this doctor');

    if ( confirmation ) {
      this._doctorsService.removeDoctor( id );
    }
  }

}
