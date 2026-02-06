import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';


// 1. bootstrapApplication: Start the application
// 2. provideRouter: Register the router feature in the application
// 3. routeConfig: Defines the routing rules
// 4. <router-outlet>: where routed components are displayed 
// 5. routerLink: Used to navigate between routes without reloading the page

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
})
  .catch((err) => console.error(err));
