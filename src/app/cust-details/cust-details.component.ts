import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../myServices/customer.service';

@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.css']
})
export class CustDetailsComponent implements OnInit {

  searchText: string='';
  customers = [];
  empErrorMsg: any = '';
  SortbyParam: string = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe(
      success => this.customers = success,
      error => this.empErrorMsg = error
    )
  } 

}
