import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userData = {
    userName: '',
    userPassword: '',
    secretCode: ''
  };
  saveUser() {
    localStorage.setItem('user', JSON.stringify(this.userData));
    alert('Saved!');
  }
}
