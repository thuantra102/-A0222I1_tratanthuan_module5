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
  // id: FormControl;
  // name: FormControl;
  // phoneNumber: FormControl;
  // identifyNumber: FormControl;
  // email: FormControl;
  // dateOfBirth: FormControl;
  check: boolean = true;
  // customer: Customer = {name: '', phoneNumber: '', identifyNumber: '', email: '', dateOfBirth: new Date()};

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerServiceService,
              private router: Router,
              private  formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(data => {
      const idCustomer = data.get("id");
      if (idCustomer != null) {
        this.check = false;
        this.customerService.getById(idCustomer).subscribe(data => {
          // this.customer = data;
          this.customerForm = new FormGroup({
            id: new FormControl(data.id),
            customerId: new FormControl(data.customerCode, [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
            name: new FormControl(data.name,[Validators.required]),
            phoneNumber: new FormControl(data.phoneNumber),
            identifyNumber: new FormControl(data.identifyNumber),
            email: new FormControl(data.email),
            dateOfBirth: new FormControl(data.dateOfBirth)
          })
        })
      } else  {
        this.customerForm = new FormGroup({
          id: new FormControl("",),
          customerId: new FormControl("",[Validators.pattern('^KH-[0-9]{4}$')]),
          name: new FormControl("",[Validators.required]),
          phoneNumber: new FormControl("", [Validators.required,Validators.pattern('^09[0,1][0-9]{7}$')]),
          identifyNumber: new FormControl("", [Validators.required,Validators.pattern('^[0-9]{10}$')]),
          email: new FormControl("",[Validators.required,Validators.email]),
          dateOfBirth: new FormControl()
        })
      }

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

    // this.customerForm = this.formBuilder({
    //
    // })

  }
}
