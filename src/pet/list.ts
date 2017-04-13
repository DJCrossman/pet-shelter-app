import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

@inject(PetService)
export class Pet {
  public heading = 'Does my pet need an umbrella?';
  public subheading = 'Select a pet to find out.';
  public pets: any[];
  private isLoading: boolean = false;

  constructor(private api: PetService){ }

  created(){
    this.isLoading = true;
    this.api.getAll().then((pets:any[]) => {
      this.isLoading = false;
      this.pets = pets;
    });
  }

  remove(id) {
    this.api.destroy(id).then(() => {
      this.pets = this.pets.filter(p => p.id !== id);
    });
  }
}
