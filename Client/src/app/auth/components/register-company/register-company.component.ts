import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RoleRegister } from '../../interfaces/roleregister';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(private http: HttpClient,private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.companyForm = new FormGroup({
      displayName: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      checkbox: new FormControl(false, Validators.requiredTrue),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*-_+=])[A-Za-z\d!@#$%^&*-_+=]{8,}$/)]),
      confirmPass: new FormControl(null, [Validators.required, this.passwordMatchValidator()]),
    });
  }

  OnFormSubmit() {
    if(this.companyForm.invalid){
      return;
    }
    const data:RoleRegister = {
      DisplayName: this.companyForm.value.displayName,
      email: this.companyForm.value.email,
      password: this.companyForm.value.password,
      confirmPassword: this.companyForm.value.confirmPass,
      role: 'Company'
    }
    this.authService.registerRoleRequest(data).subscribe((response) => {
      console.log(response);
      if (
        response && 
        response.data &&
        response.data.userId &&
        response.data.token
      ) {
        Swal.fire({
          title: "Register",
          text: "Register Successfully!",
          icon: "success"
        }).then(() => {
          this.router.createUrlTree(['get-started/company']);
        })
        .finally(() => this.companyForm.reset());
      }else{
        Swal.fire({
          title: "Register",
          text: "Register Failed!",
          icon: "error"
        })
      }
    })
  };

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.parent ? control.parent.get('password').value : null;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
