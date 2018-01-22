import { ROUTES } from './app.routes';
import { DoctorComponent } from '../../middle2/doctor/doctor.component';




describe('Main Routes', () => {

    it('Should exist route /doctor/:id', () => {
        expect( ROUTES ).toContain({
            path: '/doctor/:id',
            component: DoctorComponent
        });
    });
});
