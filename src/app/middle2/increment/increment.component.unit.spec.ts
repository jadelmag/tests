import { IncrementComponent } from './increment.component';


describe('Increment Component Unit', () => {

    let component: IncrementComponent;

    beforeEach( () => {
        component = new IncrementComponent();
    });

    it('Progress should not be more than 100', () => {
        component.progress = 50;
        component.updateValue(5);
        expect( component.progress ).toBe(55);
    });
});
