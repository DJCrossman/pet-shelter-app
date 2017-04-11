import {Router, RouterConfiguration} from 'aurelia-router';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

export class App {
  title: any;
  appName: any;
  appVersion: any;
  router: Router;

  constructor() {
    let client = new HttpClient();
    client.get('../package.json').then(http => {
      var data = JSON.parse(http.response);
      if(data) {
        this.appVersion = data.version;
        this.appName = data.name;
      }
    });
  }

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = this.title;
    config.map([
      { route: ['', 'pets'],     moduleId: 'pet/list',    title: 'Pet Weather'},
      { route: 'pets/new',       moduleId: 'pet/create',      title: 'Pet Creation'},
      { route: 'pets/:id',       moduleId: 'pet/details',   title: 'Pet Details'}
    ]);
    this.router = router;
  }

}
