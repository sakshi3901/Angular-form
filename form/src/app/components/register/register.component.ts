import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  confirmPass: string = 'none';
  constructor(private authService: AuthService) {}
  registerForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    confirm: new FormControl(''),
  });

  registerSubmit() {
    const data = this.registerForm.value;
    if (this.Password.value == this.Confirm.value) {
      this.authService.registerUser(data).subscribe(
        (res) => {
          alert('Registration Successfull');
        },
        (err) => {
          alert('Failed');
        }
      );
    } else {
      this.confirmPass = 'inline';
    }
  }

  get UserName(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get Confirm(): FormControl {
    return this.registerForm.get('confirm') as FormControl;
  }
}
