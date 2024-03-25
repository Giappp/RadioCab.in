import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      feedbackType: new FormControl('complaint'),
      name: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.pattern(/^0\d{9}$/)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      city: new FormControl(null, Validators.required),
      feedbackInfo: new FormControl(null, Validators.required),
    });
  }

  OnFormSubmit() {
    console.log(this.feedbackForm);
  };
}
