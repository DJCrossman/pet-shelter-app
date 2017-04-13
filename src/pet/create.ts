import {Redirect, Router} from 'aurelia-router';
import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

declare var $;
declare var google;
declare var alertify;

@inject(PetService, Router)
export class Pet {
  heading = 'Add your pet';
  pet: any;
  cancel;
  save;
  location;
  typeName;
  autocomplete;
  types: any[];

  constructor(private api: PetService, private router: Router){ }

  attached(){
    this.pet = {};
    this.autocomplete = new google.maps.places.Autocomplete(this.location);
    this.api.getTypes().then((types:any[]) => {
      this.types = types;
      $(this.typeName).select2({
        data: types.map(t => { return {id: t.name, text: t.name}; }),
        placeholder: 'Select a type of pet...'
      });
    });
  }

  addMyPet() {
    if($(this.typeName).val()) {
      this.pet.typeName = $(this.typeName).val();
    }
    if(!!this.pet.location) {
      this.pet.lat = this.autocomplete.getPlace().geometry.location.lat();
      this.pet.long = this.autocomplete.getPlace().geometry.location.lng();
    }
    if(!!this.pet.name && !!this.pet.typeName && !!this.pet.breedName &&
      !!this.pet.location && !!this.pet.lat && !!this.pet.long) {
      this.toggleButtons('loading');
      this.api.create(this.pet).then(() => {
        this.toggleButtons('reset');
        this.router.navigate('');
      }).catch((err) => {
        this.toggleButtons('reset');
        throw err;
      });
    } else {
      alertify.warning('Your pet is not valid!');
    }
  }

  toggleButtons(options) {
    $(this.cancel).toggle();
    $(this.save).button(options);
  }
}
