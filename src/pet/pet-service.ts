import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import Endpoints from '../endpoints';

export class PetService {

  constructor(){ }

  create(pet){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      client.post(`${Endpoints.PetShelterAPI}/pets`, pet)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  get(id){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      client.get(`${Endpoints.PetShelterAPI}/pets/${id}`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  getAll(){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      client.get(`${Endpoints.PetShelterAPI}/pets`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  update(pet){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      client.put(`${Endpoints.PetShelterAPI}/pets/${pet.id}`, pet)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  destroy(id){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      client.delete(`${Endpoints.PetShelterAPI}/pets/${id}`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}
