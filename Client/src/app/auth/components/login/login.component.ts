import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
onLogin() {
throw new Error('Method not implemented.');
}
 loginForm!: FormGroup;

 loading$: Observable<boolean> = new Observable(); 
  success$: Observable<boolean> = new Observable();
  error$: Observable<boolean> = new Observable();

  constructor(
    private fb: FormBuilder,
    private router:Router
  ){
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,this.passwordValidator]]
    })
  }

  private passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(control.value)) {
      return { 'invalidPassword': true };
    }
    return null;
  }
  get f(){
    return this.loginForm.controls;
  }
}
