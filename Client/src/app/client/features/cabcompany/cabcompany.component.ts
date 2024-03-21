import { Component } from '@angular/core';

@Component({
  selector: 'app-cabcompany',
  templateUrl: './cabcompany.component.html',
  styleUrl: './cabcompany.component.css'
})
export class CabcompanyComponent {
  companies: { description: string }[] = [];
  filteredCompanies: { description: string }[] = [];


  constructor() {
    this.companies = [
      { description: 'Company A - Description' },
      { description: 'Company B - Description' },
      { description: 'Company C - Description' },
      { description: 'Company C - Description' },
      { description: 'Company C - Description' },
      { description: 'Company C - Description' },
      { description: 'Company C - Description' },
      { description: 'Company C - Description' },
    ];
    this.filteredCompanies = this.companies;
  }

  searchCompany(event: any) {
    const searchTerm: string = event.target.value;
    if (searchTerm) {
      this.filteredCompanies = this.companies.filter(driver =>
        driver.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredCompanies = this.companies;
    }
  }
}
