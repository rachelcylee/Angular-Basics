import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DiyPractice } from './diy-practice/diy-practice';

@Component({
  selector: 'app-root',
  imports: [DiyPractice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
}
