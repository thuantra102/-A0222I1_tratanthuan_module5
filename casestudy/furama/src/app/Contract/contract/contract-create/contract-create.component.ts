import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contract} from "../../model/contract";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {ContractServiceService} from "../../service/contract-service.service";
import {Facility} from "../../../ListFacility/model/facility";
import {Customer} from "../../../CustomerList/model/customer";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit, OnChanges {
  form: FormGroup = new FormGroup({});
  @Input('contractInput')
  contract: Contract;
  facilityList: Facility[];
  customerList: Customer[];
  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private route : Router,
              private  contractService : ContractServiceService) {

  }

  ngOnInit(): void {
    this.contractService.getAllCustomers().subscribe(data => {
      this.customerList = data;
    })
    this.contractService.getAllFacilities().subscribe(data => {
      this.facilityList = data;
    })

  }





  submit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.contract.currentValue)
    this.contract = changes.contract.currentValue;
    this.buildForm();

  }

  buildForm() {
    this.form = this.fb.group({
      id: [this.contract == undefined ? '' : this.contract.id],
      name: [this.contract == undefined ? '' : this.contract.name],
      customer: [this.contract == undefined ? '' : this.contract.customer],
      facility :[this.contract == undefined ? '' : this.contract.facility],
      dateStart : [this.contract == undefined ? '' : this.contract.dateStart],
      dateFinish : [this.contract == undefined ? '' : this.contract.dateFinish],
      deposit : [this.contract == undefined ? '' : this.contract.deposit]
    })
  }

}
