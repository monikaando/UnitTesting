import {SpyComponent} from './spy.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {City} from '../../model/city/city.model';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SpyComponent
      ],
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SpyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.cities = [
          new City(1, 'Venlo', 'LB'),
          new City(2, 'Groningen', 'GR'),
        ];
      });
  }));
  it('should have array length equal 2', () => {
    expect(component.cities.length).toEqual(2);
  });
  it('should add the city and have array length 3', () => {
    component.addCity('Gouda');
    expect(component.cities.length).toEqual(3);
  });
  it('should delete the city and have array length 2', () => {
    component.deleteCity({id: 3, name: 'Gouda', province: 'Unknown'});
    expect(component.cities.length).toEqual(2);
  });
  it('should call deleteCity when click Delete button', () => {
    spyOn(component, 'deleteCity');
    const deleteButton = fixture.nativeElement.querySelector('.btnDelete');
    console.log('deleteButton', deleteButton);
    deleteButton.click();
    expect(component.deleteCity).toHaveBeenCalled();
  });
});
