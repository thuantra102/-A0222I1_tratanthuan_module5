import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Contract} from "../../model/contract";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {ContractServiceService} from "../../service/contract-service.service";
import {Facility} from "../../../ListFacility/model/facility";
import {Customer} from "../../../CustomerList/model/customer";
import {ContractListComponent} from "../contract-list/contract-list.component";

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
              private  contractService : ContractServiceService,
              private list: ContractListComponent) {

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
      this.contractService.save(this.form.value).subscribe( data => {
        this.list.ngOnInit()
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.contract.currentValue)
    this.contract = changes.contract.currentValue;
    this.buildForm();

  }

  buildForm() {
    this.form = this.fb.group({
      id: [this.contract == undefined ? '' : this.contract.id],
      name: [this.contract == undefined ? '' : this.contract.name,[Validators.required]],
      customerCode: [this.contract == undefined ? '' : this.contract.customerCode,[Validators.required]],
      facilityCode :[this.contract == undefined ? '' : this.contract.facilityCode,[Validators.required]],
      dateStart : [this.contract == undefined ? '' : this.contract.dateStart,[Validators.required]],
      dateFinish : [this.contract == undefined ? '' : this.contract.dateFinish,[Validators.required]],
      deposit : [this.contract == undefined ? '' : this.contract.deposit,[Validators.min(0)]]
    })
  }

}
