import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent implements OnInit {
  drivers: { description: string }[] = [];
  filteredDrivers: { description: string }[] = [];
  pageSize: number = 3;
  pageSizeOptions: number[] = [1, 3, 5, 10];

  @ViewChild(MatPaginator) paginator!: MatPaginator;


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
    this.filteredDrivers = this.drivers.slice(0, this.pageSize);
  }

  ngOnInit() {
    this.paginator.page.subscribe((event: PageEvent) => {
      this.onPageChange(event);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageIndex;
    const endIndex = startIndex + event.pageSize;
    this.filteredDrivers = this.drivers.slice(startIndex, endIndex);
  }

  searchDriver(event: any) {
    const searchTerm: string = event.target.value;
    if (searchTerm) {
      const filteredDrivers = this.drivers.filter(driver =>
        driver.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.filteredDrivers = filteredDrivers.slice(0, this.pageSize);
      this.paginator.length = filteredDrivers.length;
      this.paginator.firstPage();
    } else {
      this.filteredDrivers = this.drivers.slice(0, this.pageSize);
      this.paginator.length = this.drivers.length;
      this.paginator.firstPage();
    }
  }
}
