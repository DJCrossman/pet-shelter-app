import {ForecastService} from '../forecast/forecast-service';
import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

@inject(PetService, ForecastService)
export class Pet {
  private pet: any;
  private isRaining: boolean;

  constructor(private petApi: PetService, private forecastApi: ForecastService){ }

  activate(params){
      this.petApi.get(params.id).then((pet:any) => {
        this.pet = pet;
        this.forecastApi.get(pet.lat, pet.long).then((forecast:any) => {
          this.isRaining = forecast.currently.icon === 'rain';
        });
      });
  }

  get heading() {
    return this.isRaining ? 'Yes' : 'Nope';
  }

  get message() {
    if(!this.pet) return '';
    return `It looks like ${this.pet.name} is ${this.isRaining ? '' : 'not '}going to need one in ${this.pet.location}.`;
  }
}
