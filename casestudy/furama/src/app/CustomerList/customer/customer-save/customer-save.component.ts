import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {CustomerServiceService} from "../../service/customer-service.service";
import {ifError} from "assert";

@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {
  customerForm: FormGroup;

  check: boolean = true;
  customer: Customer;
  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerServiceService,
              private router: Router,
              private  formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
    if(this.router.url.includes("customer/create")) {
      return;
    }
    this.activatedRoute.paramMap.subscribe(param => {
    const id = param.get("id");
    this.customerService.getById(id).subscribe(value => {
      this.customer = value;
      this.buildForm();
    })
    })
  }

  submit() {
    console.log(this.customerForm)
    console.log(this.customerForm.value)
    this.customerService.save(this.customerForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/customer/list')
    })
  }
  buildForm() {
    this.customerForm = this.formBuilder.group({
      id: [this.customer == undefined ? "" : this.customer.id],
      customerCode: [this.customer == undefined ? "" : this.customer.customerCode,[Validators.pattern('^KH-[0-9]{4}$')]],
      name: [this.customer == undefined ? "" : this.customer.name,[Validators.required]],
      phoneNumber: [this.customer == undefined ? "" : this.customer.phoneNumber, [Validators.required,Validators.pattern('^09[0,1][0-9]{7}$')]],
      identifyNumber: [this.customer == undefined ? "" : this.customer.identifyNumber, [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      email: [this.customer == undefined ? "" : this.customer.email,[Validators.required,Validators.email]],
      dateOfBirth: [this.customer == undefined ? "" : this.customer.dateOfBirth,[Validators.required]]
    })

  }
}
