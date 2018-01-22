import { DoctorsComponent } from './doctor.component';
import { DoctorsService } from './doctor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('DoctorsComponent Tests', () => {

    let component: DoctorsComponent;
    const service = new DoctorsService( null );

    beforeEach( () => {
        component = new DoctorsComponent(service);
    });


    it('Init should load doctors', () => {

        const doctors = ['doctor1', 'doctor2', 'doctor3' ];

        spyOn( service, 'getDoctors' ).and.callFake( () => {
            return Observable.from( [ doctors ] );
        });

        component.ngOnInit();
        expect( component.doctors.length ).toBeGreaterThan(0);
    });


    it('Should call server to add a doctor', () => {

        const spy = spyOn( service, 'addDoctor' ).and.callFake( doctor => {
            return Observable.empty();
        });

        component.addDoctor();
        expect( spy ).toHaveBeenCalled();
    });


    it('Should add a new doctor', () => {

        const doctor = { id: 1, name: 'Franciso Javier '};

        spyOn( service, 'addDoctor' ).and.returnValue(
            Observable.from( [ doctor ] )
        );

        component.addDoctor();
        expect( component.doctors.indexOf( doctor ) ).toBeGreaterThanOrEqual(0);

    });


    it('If fail addDoctor, messageError should be equal to service error', () => {
        const myError = 'Error adding doctor';

        spyOn( service, 'addDoctor' ).and.returnValue( Observable.throw( myError) );
        component.addDoctor();

        expect( component.messageError ).toBe( myError );
    });


    it('Should call server to remove a doctor', () => {

        spyOn( window, 'confirm' ).and.returnValue( true );

        const spy = spyOn( service, 'removeDoctor').and.returnValue( Observable.empty() );
        component.removeDoctor('1');
        expect( spy ).toHaveBeenCalledWith('1');
    });

    it('Should not call server to remove a doctor', () => {

        spyOn( window, 'confirm' ).and.returnValue( false );

        const spy = spyOn( service, 'removeDoctor').and.returnValue( Observable.empty() );
        component.removeDoctor('1');
        expect( spy ).not.toHaveBeenCalledWith('1');
    });

});

