import { Component, output } from '@angular/core';

@Component({
  selector: 'app-minus-button',
  standalone: true,
  imports: [],
  templateUrl: './minus-button.html',
  styleUrl: './minus-button.css',
})
export class MinusButton {
  minusClicked = output<void>();
}
