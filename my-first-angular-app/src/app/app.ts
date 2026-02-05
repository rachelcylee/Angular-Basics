import { Component } from '@angular/core';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [Home],
  template: ` 
    <main>
    <header class="brand-name">
    <img class="brand-logo" src="/public/logo.svg" alt="logo" aria-hidden="true" style="width: 50px; height: 50px; margin-right: 10px; "/>
      </header>
      <section class= "content">
        <app-home/>
      </section> 
    </main>`,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
