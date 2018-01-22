import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { RouterDoctorComponent } from './router-doctor.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import { Subject } from 'rxjs/Subject';

class FakeRouter {
  navigate( params ) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = Observable.empty();

  private subject = new Subject();

  push(value) {
    this.subject.next( value );
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterDoctorComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should redirect to doctor when is saved', () => {
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.saveDoctor();

    expect( spy ).toHaveBeenCalledWith( ['doctor', '123']);
  });

  it('Should get id called new', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push( { id: 'new'} );

    expect( component.id ).toBe( 'new' );
  });

});
