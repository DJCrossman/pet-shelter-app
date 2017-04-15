import {PetListView} from '../../../src/pet/list';

let pets = [
  {name: 'a'},
  {name: 'A'},
  {name: 'b'}
];

describe('The pet list view', () => {
  it(`is not loading by default.`, () => {
    expect(new PetListView().isLoading).not.toBeTruthy();
  });
  it(`says 'Does my pet need an umbrella?'`, () => {
    expect(new PetListView().heading).toBe('Does my pet need an umbrella?');
  });
  it(`says 'Select a pet to find out.'`, () => {
    expect(new PetListView().subheading).toBe('Select a pet to find out.');
  });
  it(`searching 'A' returns two results.`, () => {
    let view = new PetListView();
    view.pets = pets;
    view.search = {value : 'A'};
    expect(view.filteredPets.length).toBe(2);
  });
  it(`searching 'a' returns two results.`, () => {
    let view = new PetListView();
    view.pets = pets;
    view.search = {value : 'a'};
    expect(view.filteredPets.length).toBe(2);
  });
  it(`searching 'b' returns one result.`, () => {
    let view = new PetListView();
    view.pets = pets;
    view.search = {value : 'b'};
    expect(view.filteredPets.length).toBe(1);
  });
});
