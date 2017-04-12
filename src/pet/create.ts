import {Redirect, Router} from 'aurelia-router';
import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

declare var $;

@inject(PetService, Router)
export class Pet {
  public heading = 'Add your pet';
  public pet: any;
  public cancel;
  public save;

  constructor(private api: PetService, private router: Router){
    this.pet = {};
  }

  addMyPet() {
    if(this.pet.name && this.pet.typeName && this.pet.breedName &&
      this.pet.location && this.pet.lat && this.pet.long) {
      this.toggleButtons('loading');
      this.api.create(this.pet).then(() => {
        this.toggleButtons('reset');
        this.router.navigate('');
      }).catch((err) => {
        this.toggleButtons('reset');
        throw err;
      });
    } else {
      console.log('Your pet is not valid!');
    }
  }

  toggleButtons(options) {
    $(this.cancel).toggle();
    $(this.save).button(options);
  }
}
