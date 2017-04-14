import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  title: any;
  router: Router;

  constructor() { }

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
