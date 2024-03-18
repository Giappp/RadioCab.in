import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^0\d{9}$/)]),
      telephone: new FormControl(null, Validators.pattern(/^0\d{9}$/)),
      paymentType: new FormControl('monthly'),
      checkbox: new FormControl(false, Validators.requiredTrue),

      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*-_+=])[A-Za-z\d!@#$%^&*-_+=]{8,}$/)]),
      confirmPass: new FormControl(null, [Validators.required, this.passwordMatchValidator()]),
    });
  }

  OnFormSubmit() {
    console.log(this.userForm);
  };

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.parent ? control.parent.get('password').value : null;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    }
  }
}
