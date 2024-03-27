import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cabcompany',
  templateUrl: './cabcompany.component.html',
  styleUrls: ['./cabcompany.component.css']
})
export class CabcompanyComponent implements OnInit {
  companies: { description: string }[] = [];
  filteredCompanies: { description: string }[] = [];
  pageSize: number = 3;
  pageSizeOptions: number[] = [1, 3, 5, 10];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.companies = [
      { description: 'Company A - Description' },
      { description: 'Company B - Description' },
      { description: 'Company C - Description' },
      { description: 'Company D - Description' },
      { description: 'Company A - Description' },
      { description: 'Company E - Description' },
      { description: 'Company F - Description' },
      { description: 'Company B - Description' },
      { description: 'Company G - Description' },
      { description: 'Company A - Description' },
      { description: 'Company H - Description' },
    ];
    this.filteredCompanies = this.companies.slice(0, this.pageSize);
  }

  ngOnInit() {
    this.paginator.page.subscribe((event: PageEvent) => {
      this.onPageChange(event);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.filteredCompanies = this.companies.slice(startIndex, endIndex);
  }

  searchCompany(event: any) {
    const searchTerm: string = event.target.value;
    if (searchTerm) {
      const filteredCompanies = this.companies.filter(company =>
        company.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.filteredCompanies = filteredCompanies.slice(0, this.pageSize);
      this.paginator.length = filteredCompanies.length;
      this.paginator.firstPage();
    } else {
      this.filteredCompanies = this.companies.slice(0, this.pageSize);
      this.paginator.length = this.companies.length;
      this.paginator.firstPage();
    }
  }
}
