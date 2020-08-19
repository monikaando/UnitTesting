import {CarService} from './car.service';

describe('CarService', () => {
  let carService: any;
  carService = new CarService();
  const newCar = carService.createCar('Maserati', 'Quattroporte', 2018, 4);

  it('should create and return a new car object', () => {
    expect(newCar).toEqual(jasmine.objectContaining({
      make: 'Maserati',
      model: 'Quattroporte',
      year: 2018,
      numWheels: 4
    }));
  });

  it(`should get a car object and return: 'A Maserati Quattroporte from 2018 is a fine car!'`, () => {
    expect(carService.getCar(newCar)).toEqual('A Maserati Quattroporte from 2018 is a fine car!');
  });

});
