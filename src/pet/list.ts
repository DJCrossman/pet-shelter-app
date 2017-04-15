import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

declare var alertify;

@inject(PetService)
export class PetListView {
  heading = 'Does my pet need an umbrella?';
  subheading = 'Select a pet to find out.';
  isLoading: boolean = false;
  displayBy:string = 'card';
  pets: any[];
  search;

  constructor(private api: PetService){ }

  created(){
    this.getAllPets();
  }

  getAllPets() {
    this.isLoading = true;
    this.api.getAll().then((pets:any[]) => {
      this.isLoading = false;
      this.pets = pets;
    }).catch(err => {
      alertify.error(err);
    });
  }

  remove(id) {
    this.api.destroy(id).then(() => {
      this.pets = this.pets.filter(p => p.id !== id);
    }).catch(err => {
      alertify.error(err);
    });
  }

  get filteredPets() {
    return this.search.value ?
      this.pets.filter(p => p.name.toLowerCase().includes(this.search.value.toLowerCase())) :
      this.pets;
  }
}
