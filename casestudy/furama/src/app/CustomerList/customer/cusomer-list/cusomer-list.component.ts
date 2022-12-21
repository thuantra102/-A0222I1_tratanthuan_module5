import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "../../service/customer-service.service";
import {Customer} from "../../model/customer";

@Component({
  selector: 'app-cusomer-list',
  templateUrl: './cusomer-list.component.html',
  styleUrls: ['./cusomer-list.component.css']
})
export class CusomerListComponent implements OnInit {
  customers: Customer[];
  constructor(private cusomerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.cusomerService.getAll().subscribe(data => {
      this.customers = data;
    })
  }

}
