import {PetCreateView} from '../../../src/pet/create';

describe('The pet create view', () => {
  it('says add your pet.', () => {
    expect(new PetCreateView().heading).toBe('Add your pet');
  });
});
