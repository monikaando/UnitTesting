import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CityComponent} from './city.component';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CityComponent
      ],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CityComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should get 'Haarlem' for city variable from ngOnInit.`, () => {
    fixture.detectChanges();
    expect(component.city).toEqual('Haarlem');
  });

  it(`should change city variable to 'Amsterdam'`, () => {
    fixture.detectChanges();
    component.city = 'Amsterdam';
    expect(component.city).toEqual('Amsterdam');
  });

  it(`should render city name: 'Haarlem' on the page`, () => {
    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Haarlem');
  });

});
