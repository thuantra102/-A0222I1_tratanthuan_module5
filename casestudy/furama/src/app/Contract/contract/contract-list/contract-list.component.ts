import {Component, OnInit} from '@angular/core';
import {ContractServiceService} from "../../service/contract-service.service";
import {Contract} from "../../model/contract";
import {Customer} from "../../../CustomerList/model/customer";
import {Facility} from "../../../ListFacility/model/facility";
import {subscribeOn} from "rxjs/operators";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  formSearch: FormGroup;
  contracts: Contract[];
  contract: Contract;
  customerList: Customer[] =[];
  facilityList: Facility[] =[];
  config: any;
  constructor(private contractService: ContractServiceService) {
  }

  ngOnInit(): void {
    this.getAll('','','');
    this.contractService.getAllCustomers().subscribe(data => {
      this.customerList = data;
    })
    this.contractService.getAllFacilities().subscribe(data => {
      this.facilityList = data;
    })
    this.formSearch = new FormGroup({
      name: new FormControl(''),
      customerCode: new FormControl(''),
      facilityCode: new FormControl('')
    })
  }

  getAll(name, customerId, facilityId) {
    this.contractService.search(name,customerId,facilityId).subscribe(data1 => {
      this.contracts = data1;
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.contracts.length
      };
    })


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

  pageChanged(event: number) {
    this.config.currentPage = event;
  }

  search() {
    console.log('search')
    this.getAll(this.formSearch.value.name,this.formSearch.value.customerCode,this.formSearch.value.facilityCode);
   //  this.contractService.search().subscribe(data => {
   // this.contracts = data;
   //    this.config = {
   //      itemsPerPage: 2,
   //      currentPage: 1,
   //      totalItems: this.contracts.length
   //    };
   //  })

  }

  reset() {
    console.log('reset')
    this.formSearch.reset()
    this.ngOnInit()
  }
}
