import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "../../service/customer-service.service";
import {Customer} from "../../model/customer";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
  selector: 'app-cusomer-list',
  templateUrl: './cusomer-list.component.html',
  styleUrls: ['./cusomer-list.component.css']
})
export class CusomerListComponent implements OnInit {
  customers: Customer[];
  customer: Customer;
  constructor(private cusomerService: CustomerServiceService) { }


  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.cusomerService.getAll().subscribe(data => {
      this.customers = data;
      // console.log(data)
    })
  }

  getInfo(f: Customer) {
    this.customer = f;
    // console.log(this.customer)
  }

  delete() {
    // console.log(this.customer)
    // console.log('COME IN HERE');
    this.cusomerService.deleteCustomer(this.customer.id).subscribe(data => {
      console.log(data)
      this.ngOnInit()
    });

  }
}
