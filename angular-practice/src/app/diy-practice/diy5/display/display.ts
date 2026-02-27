import { Component, input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  count = input<number>(0);
}
