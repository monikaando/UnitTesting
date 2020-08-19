import {Person} from "./person.model";

describe('Person', () => {
  let newPerson: Person;
  beforeEach( () => {
    newPerson = new Person('Monika');
  });
  it(`should call 'Hi Monika'`, () => {
    expect(newPerson.sayHello()).toContain('Monika')
  });
  afterEach(() => {
    newPerson = null;
  })
})
