import { getUSers } from '../array/array.spec';



describe('Array tests', () => {

    it('Should return at least 3 users', () => {
        const res = getUSers();
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    it('Should exists Javi and Paco users', () => {
        const res = getUSers();
        expect( res ).toContain('Javi');
        expect( res ).toContain('Paco');
    });

});

