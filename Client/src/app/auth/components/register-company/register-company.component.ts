import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent implements OnInit {

  companyForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.companyForm = new FormGroup({
      companyName: new FormControl(null, Validators.required),
      representative: new FormControl(null, Validators.required),
      designation: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, Validators.required),
      telephone: new FormControl(null, [Validators.required, Validators.pattern(/^0\d{9}$/)]),
      phone: new FormControl(null, Validators.pattern(/^0\d{9}$/)),
      fax: new FormControl(null, Validators.pattern(/^\+?\d{1,3}(\s?\(\d{1,4}\))?\s?\d{1,10}$/)),
      paymentType: new FormControl('monthly'),
      checkbox: new FormControl(false, Validators.requiredTrue),

      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*-_+=])[A-Za-z\d!@#$%^&*-_+=]{8,}$/)]),
      confirmPass: new FormControl(null, [Validators.required, this.passwordMatchValidator()]),
    });
  }

  OnFormSubmit() {
    console.log(this.companyForm);
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
