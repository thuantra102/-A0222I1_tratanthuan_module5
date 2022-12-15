import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

import {ConfirmedValidator} from './confirmed-validator';

@Component({
  selector: 'app-create-account-test',
  templateUrl: './create-account-test.component.html',
  styleUrls: ['./create-account-test.component.css']
})
export class CreateAccountTestComponent implements OnInit {
  // @ts-ignore
  form: FormGroup = new FormGroup({});
  // confirmForm: FormGroup;
  constructor(private fb: FormBuilder ) {
    this.form = fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', Validators.required],
      confirmForm: new FormGroup({
        password: new FormControl('', [Validators.required]) ,
        confirm_password: new FormControl('', [Validators.required])
      }, c => this.comparePassword(c))
    });
  }

  ngOnInit(): void {
  }

  submitAccount() {
    console.log('this is form group');
    console.log(this.form);
  }

 comparePassword( c: AbstractControl) {
    const v = c.value;
    console.log('this is c');
    console.log(c);
    return (v.password === v.confirm_password) ?
      null : {
      passwordnotmatch: true
    };
  }

}
