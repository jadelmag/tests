import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorsService {

  constructor( public http: Http ) { }

  getDoctors() {
    return this.http.get('...')
                .map( resp => resp['doctors'] );
  }

  addDoctor( doctor: any ) {
    return this.http.post('...', doctor )
                .map( resp => resp['doctor'] );
  }

  removeDoctor( id: string ) {
    return this.http.delete('...' )
                .map( resp => resp['doctor'] );
  }


}