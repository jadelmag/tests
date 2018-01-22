import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementComponent } from './increment.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendat Component', () => {

    let component: IncrementComponent;
    let fixture: ComponentFixture<IncrementComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementComponent);
        component = fixture.componentInstance;

    });

    it('Should show title', () => {

        component.title = 'Loading Progress';
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')  ).nativeElement;
        expect( elem.innerHTML ).toContain( 'Loading Progress' );
    });


    it('Should show progress value', () => {

        component.updateValue(5);
        fixture.detectChanges();
        fixture.whenStable().then( () => {
            const input = fixture.debugElement.query( By.css('input') );
            const elem = input.nativeElement;

            expect( elem.value ).toBe('55');
        });

    });

    it('Must increase/decrease in 5 with a button click', () => {
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        botones[0].triggerEventHandler('click', null);
        expect( component.progress).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect( component.progress).toBe(50);
    });

    it('When click first button, progress should be 45', () => {
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3')  ).nativeElement;
        expect( elem.innerHTML ).toContain('45');
    });

});
