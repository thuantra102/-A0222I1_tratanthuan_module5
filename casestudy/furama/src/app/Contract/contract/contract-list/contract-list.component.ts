import {Component, OnInit} from '@angular/core';
import {ContractServiceService} from "../../service/contract-service.service";
import {Contract} from "../../model/contract";
import {Customer} from "../../../CustomerList/model/customer";
import {Facility} from "../../../ListFacility/model/facility";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[];
  contract: Contract;
  customerList: Customer[];
  facilityList: Facility[];
  constructor(private contractService: ContractServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.contractService.getAllCustomers().subscribe(data => {
      this.customerList = data;
    })
    this.contractService.getAllFacilities().subscribe(data => {
      this.facilityList = data;
    })
  }

  getAll() {
    this.contractService.getAll().subscribe(data => {
      this.contracts = data;
    });
  }

  addNew() {
    this.contract = undefined;
  }

  getInfo(f: Contract) {
    this.contract = f;
  }

  delete() {
    this.contractService.delete(this.contract.id).subscribe(data => {
      this.ngOnInit()
    })

  }
  toCustomer(id: Number) {
    for (let i = 0; i <  this.customerList.length; i++) {
      if(this.customerList[i].id == id) {
        return this.customerList[i].name;
      }

    }
  }
  toFacility(id: Number) {
    for (let i = 0; i <  this.facilityList.length; i++) {
      if(this.facilityList[i].id == id) {
        return this.facilityList[i].name;
      }

    }
  }

}
