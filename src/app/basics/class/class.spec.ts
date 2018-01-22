import { Player } from "./class";


describe('Class tests', () => {

    const player = new Player();

    it('Should return 80 hp if player get 20 of damage', () => {

        const res = player.damage(20);
        expect( res ).toBe(80);
    });

    it('Should return 0 hp if player get 100 of damage', () => {

        const res = player.damage(100);
        expect( res ).toBe(0);
    });

});

