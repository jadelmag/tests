import { Player } from './player';


describe('Player Emit', () => {

    let player: Player;

    beforeEach( () => {
        player = new Player();
    });

    it('Should emit an event when user get damage', () => {

        let newHp = 0;

        player.hpChanged.subscribe( hp => {
            newHp = hp;
        });

        player.increaseDamage(1000);

        expect( newHp ).toBe(0);
    });


    it('Should emit an event when user get damage and survive if less than 100', () => {

        let newHp = 0;

        player.hpChanged.subscribe( hp => {
            newHp = hp;
        });

        player.increaseDamage(50);

        expect( newHp ).toBe(50);
    });

});
