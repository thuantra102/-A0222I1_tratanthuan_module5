import {Component, OnInit} from '@angular/core';
import {ContractServiceService} from "../../service/contract-service.service";
import {Contract} from "../../model/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[];
  contract: Contract;

  constructor(private contractService: ContractServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
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

  }
}
