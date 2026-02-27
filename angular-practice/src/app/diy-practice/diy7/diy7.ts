import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diy7',
  imports: [FormsModule],
  templateUrl: './diy7.html',
  styleUrl: './diy7.css',
})
export class Diy7 {
  userInfo = {
    fName: '',
    lName: '',
    country: '',
    note: ''
  };

  isInvalid() {
    const { fName, lName, country, note } = this.userInfo
    return (
      fName.length < 2
      || lName.length < 2
      || country.length < 5
      || note.length < 10
    );
  }

  formSubmit() {
    console.warn(`
      First Name: ${this.userInfo.fName}
      Last Name: ${this.userInfo.lName}
      Coutry: ${this.userInfo.country}
      Note: ${this.userInfo.note}
      `);
  }

  formReset() {
    this.userInfo = {
      fName: '',
      lName: '',
      country: '',
      note: ''
    };
  }
}
