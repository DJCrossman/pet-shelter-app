import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import Endpoints from '../endpoints';

const SECRET_KEY = 'a6801e5f483f73ded1f064aa1b7df331';

export class ForecastService {

  constructor(){ }
  get(lat, long){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      client.get(`${Endpoints.ForecastAPI}/${SECRET_KEY}/${lat},${long}`)
      .then(resp => {
        resolve(JSON.parse(resp.response));
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}
