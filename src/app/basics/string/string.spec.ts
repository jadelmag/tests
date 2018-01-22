import { message } from './string';


describe('String tests', () => {

    it('Should return an string', () => {
        const resp = message('Javier');
        expect( (typeof resp) ).toBe('string');
    });

    it('Should return a message with name sended', () => {
        const name = 'Javier';
        const resp = message(name);
        expect( resp ).toContain( name );
    });


});

