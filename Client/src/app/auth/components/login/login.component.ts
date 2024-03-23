import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { } from '@angular/animations';

import { Observable, of } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loginForm!: FormGroup;
  errorMessage: string = '';

  loading$: Observable<boolean> = new Observable();
  success$: Observable<boolean> = new Observable();
  error$: Observable<boolean> = new Observable();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]]
    })
  }

  private passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(control.value)) {
      return { 'invalidPassword': true };
    }
    return null;
  }

  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      //const {email,password} = this.loginForm.value;
      this.authService.loginUserRequest(this.loginForm.value).subscribe(
        (respone: any) => {
          if (respone && respone.data && respone.data.userName && respone.data.token) {
            this.toast.success("Login Successfully", "Login", {
              timeOut: 5000,
            });
            this.loginForm.reset();
            localStorage.setItem('jwt', respone.data.token);
            localStorage.setItem('currentUser', JSON.stringify(respone.data))
            this.authService.setAuthenticate(true);
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'Invalid username or password';
          }
        },
        error => {
          console.error(error);
          this.errorMessage = 'Failed to login. Please try again later.';
        }
      );
    }
  }
}
