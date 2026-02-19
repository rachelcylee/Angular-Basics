import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Diy4Practice } from './diy4-practice/diy4-practice';

@Component({
  selector: 'app-diy-practice',
  imports: [ReactiveFormsModule, Diy4Practice],
  templateUrl: './diy-practice.html',
  styleUrl: './diy-practice.css',
})
export class DiyPractice {
  diy1Form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  diy2Form = new FormGroup({
    fullName: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
  });

  submitDiy1() {
    const firstName = this.diy1Form.value.firstName;
    const lastName = this.diy1Form.value.lastName;
    const email = this.diy1Form.value.email;
    alert(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}`);

  }

  fullName = '';
  city = '';
  country = '';
  submitDiy2() {
    this.city = this.diy2Form.value.city ?? '';
    this.fullName = this.diy2Form.value.fullName ?? '';
    this.country = this.diy2Form.value.country ?? '';
  }

  num: number = 0;
  plusNum() {
    this.num = this.num + 1;
  }
  minusNum() {
    this.num = this.num - 1;
  }
  resetNum() {
    this.num = 0;
  }
}
