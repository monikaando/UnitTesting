import {Car} from "./car.model";

describe('Car', () => {
  let newCar: Car;
  beforeEach(() => {
    newCar = new Car('Maserati', 'Quattroporte', 2018, 4)
  });
  it(`should have description:'This is a Maserati Quattroporte from 2018 and it has 4 wheels'`, () => {
    expect(newCar.description()).toEqual('This is a Maserati Quattroporte from 2018 and it has 4 wheels')
  });
  it('should return the age of the car equal 2', () => {
    expect(newCar.getAge(2018)).toEqual(2);
  });
  afterEach(() => {
    newCar = null;
  })
});
//there is no need to test the getWheels() function, because number of wheels is already in description();
