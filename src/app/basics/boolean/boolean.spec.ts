import { userLogged } from './boolean';



describe( 'Boolean tests', () => {

    it('Should return true', () => {
        const res = userLogged();
        expect( res ).toBeTruthy();
    });

    it('Should return true', () => {
        const res = userLogged();
        expect( res ).not.toBeFalsy();
    });

});

