import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-exercise01',
  imports: [ReactiveFormsModule, NgStyle],
  templateUrl: './exercise01.html',
  styleUrl: './exercise01.css',
})
export class Exercise01 {
  colorInput = new FormControl('');
  currentBgColor = '#ffffff';

  constructor() {
    this.colorInput.valueChanges
      .pipe( //Composes multiple operators to process the observable data stream.
        debounceTime(300),
        distinctUntilChanged(), // Only emit if the current value is different from the last
        takeUntilDestroyed() // Automatically unsubscribes
      )
      .subscribe((newColor) => {  // Triggers the execution of the observable stream.
        if (newColor) {
          this.currentBgColor = newColor;
        }
        /* subscribe() callback
          next: (data) => { },
          error: (err) => { },
          complete: () => { }
        */
      });
  }
}
