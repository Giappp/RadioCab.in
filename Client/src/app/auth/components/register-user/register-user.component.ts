import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators, } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user';
import { response } from 'express';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})

export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^0\d{9}$/),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*-_+=])[A-Za-z\d!@#$%^&*-_+=]{8,}$/
        ),
      ]),
      confirmPass: new FormControl(null, [
        Validators.required,
        this.passwordMatchValidator(),
      ]),
    });
  }

  OnFormSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    this.auth.registerUserRequest(this.userForm.value).subscribe((response) => {
      if (
        response &&
        response.data &&
        response.data.userId &&
        response.data.token
      ) {
        this.userForm.reset();
        localStorage.setItem('jwt', response.data.token);
        this.router.navigate(['/home']);
      }
    });
  }

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.parent
        ? control.parent.get('password').value
        : null;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { passwordMismatch: true };
    };
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
