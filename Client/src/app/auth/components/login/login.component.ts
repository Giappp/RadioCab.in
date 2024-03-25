import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Observable, of, timeInterval } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { } from '@angular/animations'
import { DOCUMENT } from '@angular/common';
import Swal from 'sweetalert2';
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
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]]
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
            Swal.fire({
              title: "Login",
              text: "Login Successfully!",
              icon: "success"
            }).then(
              () => {
                if(respone.data.userRole[0] === 'User'){
                  this.router.navigate(['user/home'])
                }else if(respone.data.userRole[0] === 'Company'){
                  this.router.navigate(['company/dashboard'])
                }
                else if(respone.data.userRole[0] === 'Driver'){
                  this.router.navigate(['/driver'])
                }
              }
            ).finally(() => this.loginForm.reset());
          } else {
            this.errorMessage = 'Invalid email or password';
            Swal.fire({
              title: "Login",
              text: this.errorMessage,
              icon: "error",
            })
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
