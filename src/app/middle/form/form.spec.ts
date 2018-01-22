import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';


describe('Form tests', () => {

    let component: FormRegister;

    beforeEach( () => {
        component = new FormRegister( new FormBuilder() );
    });

    it('Should create a form with two fields: email and password', () => {
        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();
    });

    it('Email should be required', () => {
        const control = component.form.get('email');
        control.setValue('');

        expect( control.valid ).toBeFalsy();
    });

    it('Email should be a valid email', () => {
        const control = component.form.get('email');
        control.setValue('user@test.com');

        expect( control.valid ).toBeTruthy();
    });

});

