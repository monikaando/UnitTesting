import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create an array after initialisation', () => {
    component.ngOnInit();
    expect(component.cars).toBeTruthy();
  });
  it('should the length of the array be equal 2', () => {
    expect(component.cars.length).toEqual(2);
  });
  it('should call the Output() when click on the car', () => {
    spyOn(component, 'selectCar');
    const carLink = fixture.nativeElement.querySelector('p');
    carLink.click();
    expect(component.selectCar).toHaveBeenCalled();
  });
});
