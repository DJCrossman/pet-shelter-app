import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

@inject(PetService)
export class Pet {s
  private pet: any;

  constructor(private api: PetService){ }

  activate(params){
      this.api.get(params.id).then((pet:any) => this.pet = pet);
  }

  get heading() {
    return 'Yup';
  }

  get message() {
    if(!this.pet) return '';
    return `It looks like ${this.pet.name} is going to need one in ${this.pet.location}.`;
  }
}
