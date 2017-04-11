import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

@inject(PetService)
export class Pet {
  public heading = 'Does my pet need an umbrella?';
  public subheading = 'Select a pet to find out.';
  public pets: any[];

  constructor(private api: PetService){ }

  created(){
      this.api.getAll().then((pets:any[]) => this.pets = pets);
  }
}
