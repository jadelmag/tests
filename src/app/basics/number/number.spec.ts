import { increase } from './number';



describe( 'Number test', () => {

    it( 'Should return 100 if num is higher than 100', () => {
        const res = increase(300);
        expect( res ).toBe(100);
    });

    it ( 'Should return a number increase + 1, if is not higher than 100', () => {
        const res = increase(50);
        expect( res ).toBe(51);
    });

});

