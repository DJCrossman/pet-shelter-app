import {PetDetailsView} from '../../../src/pet/details';

let pet = {
  name: 'Oliver',
  location: 'Regina, SK, Canada'
};

describe(`The pet detail view`, () => {
  it(`is not loading by default.`, () => {
    expect(new PetDetailsView().isLoading).not.toBeTruthy();
  });
  it(`says 'Yup' that the pet does require an umbrella when it's raining.`, () => {
    let view = new PetDetailsView();
    view.isRaining = true;
    expect(view.heading).toBe('Yes');
  });
  it(`says 'Nope' that the pet does not require an umbrella when it's not raining.`, () => {
    let view = new PetDetailsView();
    view.isRaining = false;
    expect(view.heading).toBe('Nope');
  });
  it(`says that the pet does require an umbrella when it's raining.`, () => {
    let view = new PetDetailsView();
    view.isRaining = true;
    view.pet = pet;
    expect(view.message).toBe(`It looks like ${view.pet.name} is going to need one in ${view.pet.location}.`);
  });
  it(`says that the pet does not require an umbrella when it's raining.`, () => {
    let view = new PetDetailsView();
    view.isRaining = false;
    view.pet = pet;
    expect(view.message).toBe(`It looks like ${view.pet.name} is not going to need one in ${view.pet.location}.`);
  });
});
