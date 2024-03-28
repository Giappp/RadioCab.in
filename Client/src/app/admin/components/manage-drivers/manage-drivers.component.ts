import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

export interface Driver {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  paymentType: string;
  actions: any; // Monthly or Quarterly
}

const DRIVER_DATA: Driver[] = [
  { name: 'John Doe', email: 'john@example.com', phone: '1234567890', address: '123 Main St', city: 'New York', paymentType: 'Monthly', actions: '' },
  { name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', address: '456 Elm St', city: 'Los Angeles', paymentType: 'Quarterly', actions: '' },
  { name: 'Alice Johnson', email: 'alice@example.com', phone: '5551234567', address: '789 Maple Ave', city: 'Chicago', paymentType: 'Monthly', actions: '' },
  { name: 'Bob Brown', email: 'bob@example.com', phone: '9876543210', address: '321 Oak St', city: 'Houston', paymentType: 'Quarterly', actions: '' },
  { name: 'Emily Davis', email: 'emily@example.com', phone: '2223334444', address: '567 Pine Rd', city: 'Miami', paymentType: 'Monthly', actions: '' },
  { name: 'Michael Wilson', email: 'michael@example.com', phone: '7778889999', address: '999 Cedar Ln', city: 'San Francisco', paymentType: 'Quarterly', actions: '' },
  // Add more driver data as needed
];

@Component({
  selector: 'app-manage-drivers',
  templateUrl: './manage-drivers.component.html',
  styleUrls: ['./manage-drivers.component.css']
})
export class ManageDriversComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'address', 'city', 'paymentType', 'actions'];
  dataSource = DRIVER_DATA;

  editDriver(element: any) { }

  deleteDriver(element: any) { }

  driverManager: { description: string }[] = [];
  pageSize: number = 6;
  pageSizeOptions: number[] = [1, 3, 5, 6];
  totalItems: number = DRIVER_DATA.length;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updateDataSource();
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.paginator.length = DRIVER_DATA.length; // Cập nhật lại tổng số phần tử
    this.updateDataSource();
  }

  updateDataSource() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.dataSource = DRIVER_DATA.slice(startIndex, endIndex);
  }
}
