import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from "./material/material-module";
import { Header } from "./components/header/header";
import { SideNavList } from "./components/side-nav-list/side-nav-list";
import { Task } from './components/task/task';
import { Tasks } from './components/tasks/tasks';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSlideToggleModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Header,
    SideNavList,

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-material-practice');
}
