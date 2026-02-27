import { Component, signal } from '@angular/core';
import { PlusButton } from './plus-button/plus-button';
import { MinusButton } from './minus-button/minus-button';
import { Display } from './display/display';

@Component({
  selector: 'app-diy5',
  imports: [PlusButton, MinusButton, Display],
  templateUrl: './diy5.html',
  styleUrl: './diy5.css',
})
export class Diy5 {
  totalCount = signal(0);
  increment() {
    this.totalCount.update(n => n + 1);
  }
  decrement() {
    this.totalCount.update(n => n - 1);
  }
  reset() {
    this.totalCount.set(0);
  }
}

