import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  packages: { type: string, paymentType: string, name: string, price: number, features: string[], buttonText: string, }[] = [];
  currentPackageType: string = 'Monthly'; // Default to Monthly

  constructor() {
    this.packages = [
      {
        type: 'Free',
        paymentType: 'mo',
        name: 'Free',
        price: 0,
        features: [
          '1 discount coupon for the first ride(10%)',
          '2 discount coupon',
          'Email support',
          'Help center access'
        ],
        buttonText: 'Sign up for free'
      },
      {
        type: 'Basic',
        paymentType: 'monthly',
        name: 'Basic',
        price: 15,
        features: [
          '1 discount coupon for the first ride(10%)',
          '2 discount coupon and 1 extra per month',
          'Priority email support',
          'Help center access'
        ],
        buttonText: 'Sign up'
      },
      {
        type: 'Premium',
        paymentType: 'mo',
        name: 'Premium',
        price: 45,
        features: [
          '1 discount coupon for the first ride(20%)',
          '4 discount coupon and 2 extra per month',
          'Phone and email support',
          'Help center access'
        ],
        buttonText: 'Sign up'
      }
    ];
  }

  showMonthly() {
    this.currentPackageType = 'Monthly';
    this.packages = [
      {
        type: 'Free',
        paymentType: 'mo',
        name: 'Free',
        price: 0,
        features: [
          '1 discount coupon for the first ride(10%)',
          '2 discount coupon',
          'Email support',
          'Help center access'
        ],
        buttonText: 'Sign up for free'
      },
      {
        type: 'Basic',
        paymentType: 'mo',
        name: 'Basic',
        price: 15,
        features: [
          '1 discount coupon for the first ride(10%)',
          '2 discount coupon and 1 extra per month',
          'Priority email support',
          'Help center access'
        ],
        buttonText: 'Sign up'
      },
      {
        type: 'Premium',
        paymentType: 'mo',
        name: 'Premium',
        price: 45,
        features: [
          '1 discount coupon for the first ride(20%)',
          '4 discount coupon and 2 extra per month',
          'Phone and email support',
          'Help center access'
        ],
        buttonText: 'Sign up'
      }
    ];
  }

  showQuarterly() {
    this.currentPackageType = 'Quarterly';
    this.packages = [
      {
        type: 'Free',
        paymentType: 'quar',
        name: 'Free',
        price: 0,
        features: [
          '1 discount coupon for the first ride(10%)',
          '2 discount coupon',
          'Email support',
          'Help center access'
        ],
        buttonText: 'Sign up for free'
      },
      {
        type: 'Basic',
        paymentType: 'quar',
        name: 'Basic',
        price: 40,
        features: [
          '1 discount coupon for the first ride(10%)',
          '2 discount coupon and 1 extra per month',
          'Priority email support',
          'Help center access'
        ],
        buttonText: 'Sign up'
      },
      {
        type: 'Premium',
        paymentType: 'quar',
        name: 'Premium',
        price: 120,
        features: [
          '1 discount coupon for the first ride(20%)',
          '4 discount coupon and 2 extra per month',
          'Phone and email support',
          'Help center access'
        ],
        buttonText: 'Sign up'
      },
    ];

  }

}
