import { Component } from '@angular/core';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  drivers: { description: string }[] = [];
  filteredDrivers: { description: string }[] = [];

  constructor() {
    this.drivers = [
      { description: 'Driver A - Description' },
      { description: 'Driver B - Description' },
      { description: 'Driver C - Description' },
      { description: 'Driver A - Description' },
      { description: 'Driver A - Description' },
      { description: 'Driver A - Description' },
      { description: 'Driver C - Description' },
      { description: 'Driver C - Description' },
      { description: 'Driver B - Description' },
    ];
    this.filteredDrivers = this.drivers;
  }

  searchDriver(event: any) {
    const searchTerm: string = event.target.value;
    if (searchTerm) {
      this.filteredDrivers = this.drivers.filter(driver =>
        driver.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredDrivers = this.drivers;
    }
  }
}
