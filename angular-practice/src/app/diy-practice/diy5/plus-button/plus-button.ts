import { Component, output } from '@angular/core';

@Component({
  selector: 'app-plus-button',
  standalone: true,
  imports: [],
  templateUrl: './plus-button.html',
  styleUrl: './plus-button.css',
})
export class PlusButton {
  plusClicked = output<void>();

}
