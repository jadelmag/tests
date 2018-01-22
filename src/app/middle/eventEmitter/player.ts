import { EventEmitter } from '@angular/core';


export class Player {

    hp: number;
    hpChanged = new EventEmitter<number>();

    constructor() {
        this.hp = 100;
    }

    increaseDamage( value: number ) {
        if ( value >= this.hp ) {
            this.hp = 0;
        } else {
            this.hp = this.hp - value;
        }
        this.hpChanged.emit( this.hp );
    }
}




