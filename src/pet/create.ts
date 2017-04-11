import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

@inject(PetService)
export class Pet {
  public heading = 'Add your pet';

  constructor(private api: PetService){ }
}
