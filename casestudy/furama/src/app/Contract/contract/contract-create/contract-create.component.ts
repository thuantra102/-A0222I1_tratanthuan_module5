import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Contract} from "../../model/contract";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {ContractServiceService} from "../../service/contract-service.service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  contract: Contract;
  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private route : Router,
              private  contractService : ContractServiceService) {

  }

  ngOnInit(): void {
    if(this.route.url.includes('contract/create')) {
      // this.buildForm();
      console.log("contract create")
    } else  {
      this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
        console.log("contract edit")
        // const id = paraMap.get('id');
        // this.contractService.getById(id).subscribe( data => {
        //   this.contract = data;
        // });
        // this.buildForm();
      })
    }


  }

  buildForm() {
    this.form = this.fb.group({
      id: this.contract.id,
      name: this.contract.name,
      customer: this.contract.customer,
      facility : this.contract.facility,
      dateStart : this.contract.dateStart,
      dateFinish : this.contract.dateFinish,
      deposit : this.contract.deposit
    })
  }

  submit() {

  }
}
