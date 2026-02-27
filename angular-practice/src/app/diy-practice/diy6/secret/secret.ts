import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-secret',
  imports: [FormsModule],
  templateUrl: './secret.html',
  styleUrl: './secret.css',
})
export class Secret {
  inputCode: string = '';
  msg: string = '';

  checkSecret() {
    const saved = localStorage.getItem('user');
    this.msg = "You don't have permissions to see the secret.";
    if (saved) {
      const data = JSON.parse(saved);
      if (this.inputCode === data.secretCode) {
        this.msg = `The secret is that your password is: ${data.userPassword}. Keep it in secret!`;
      }
    }
  }
}
