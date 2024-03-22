import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  address: string = '123 Đường ABC, Thành phố XYZ';
  email: string = 'info@example.com';
  phone: string = '+84912345678';
}
