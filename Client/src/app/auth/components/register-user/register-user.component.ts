import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user';
import { response } from 'express';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserRegister } from '../../interfaces/user-register';

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
  ) {}

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
      role: new FormControl('User')
    });
  }

  OnFormSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    const requestData:UserRegister = {
        userName: this.userForm.value.username,
        email: this.userForm.value.email,
        address: this.userForm.value.address,
        city: this.userForm.value.city,
        phone: this.userForm.value.phone,
        password: this.userForm.value.password,
        confirmPassword: this.userForm.value.confirmPass, // Use confirmPassword instead of confirmPass
        role: 'User'
    };
    this.auth.registerUserRequest(requestData).subscribe((response) => {
      if (
        response &&
        response.data &&
        response.data.userId &&
        response.data.token
      ) {
        this.userForm.reset();
        Swal.fire({
          title: "Register",
          text: "Register Successfully!",
          icon: "success"
        }).then(() => {
          this.router.navigate(['auth/login']);
        })
      }else{
        Swal.fire({
          title: "Register",
          text: "Register Failed!",
          icon: "error"
        })
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
}
