import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { Companycreate } from '../../interfaces/companycreate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.css'
})
export class GetStartedComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private http: HttpClient,private authService:AuthService,private router: Router) { 
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
      fax: new FormControl(null, Validators.pattern(/^0\d{9}$/)),
      checkbox: new FormControl(false, Validators.requiredTrue),
    });
  }

  OnFormSubmit() {
    if(this.companyForm.invalid){
      return;
    }
    const data:Companycreate = {
      companyName: this.companyForm.value.companyName,
      representative: this.companyForm.value.representative,
      designation: this.companyForm.value.designation,
      address: this.companyForm.value.address,
      telephone: this.companyForm.value.telephone,
      phone: this.companyForm.value.phone,
      fax: this.companyForm.value.fax
    }
    console.log(data);
    this.router.navigate(['company/started-plans'])
  };

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.parent ? control.parent.get('password').value : null;
      const confirmPassword = control.value;
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    }
  }
  public get f(){
    return this.companyForm.controls;
  }
}
