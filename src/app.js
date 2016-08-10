export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' },
      { route: 'products',      name: 'products',        moduleId: './components/product/index',        nav: true, title: 'Products' },
      { route: 'buyers',      name: 'buyers',        moduleId: './components/buyer/index',        nav: true, title: 'Buyers' },
    ]);

    this.router = router;
  }
}