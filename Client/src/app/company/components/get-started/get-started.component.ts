import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private http: HttpClient,private authService:AuthService) { 
    this.companyForm = null;
  }

  ngOnInit() {
    this.companyForm = new FormGroup({
      companyName: new FormControl(null, Validators.required),
      representative: new FormControl(null, Validators.required),
      designation: new FormControl(null,Validators.required),
      address: new FormControl(null, Validators.required),
      telephone: new FormControl(null, [Validators.required, Validators.pattern(/^0\d{9}$/)]),
      phone: new FormControl(null, Validators.pattern(/^0\d{9}$/)),
      fax: new FormControl(null, Validators.pattern(/^\+?\d{1,3}(\s?\(\d{1,4}\))?\s?\d{1,10}$/)),
      paymentType: new FormControl('monthly'),
      checkbox: new FormControl(false, Validators.requiredTrue),
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
}
