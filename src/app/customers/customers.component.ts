import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customerList:any;

  constructor(public customersService:CustomersService) { }

  ngOnInit(): void {
    this.customerList = this.customersService.getCustomers();
  }

}
