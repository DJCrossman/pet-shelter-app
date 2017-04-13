import {ForecastService} from '../forecast/forecast-service';
import {PetService} from './pet-service';
import {inject} from 'aurelia-framework';

@inject(PetService, ForecastService)
export class Pet {
  private pet: any;
  private isRaining: boolean;
  private isLoading: boolean = false;

  constructor(private petApi: PetService, private forecastApi: ForecastService){ }

  activate(params){
    this.isLoading = true;
      this.petApi.get(params.id).then((pet:any) => {
        this.pet = pet;
        this.forecastApi.get(pet.lat, pet.long).then((forecast:any) => {
          this.isLoading = false;
          this.isRaining = forecast.currently.icon === 'rain';
        }).catch(err => {
          this.isLoading = false;
        });
      }).catch(err => {
        this.isLoading = false;
      });
  }

  get heading() {
    if(typeof this.isRaining === 'undefined') return '';
    return this.isRaining ? 'Yes' : 'Nope';
  }

  get message() {
    if(!this.pet) return '';
    return `It looks like ${this.pet.name} is ${this.isRaining ? '' : 'not '}going to need one in ${this.pet.location}.`;
  }
}
