import {Component, OnInit} from '@angular/core';
import {AccountInfo} from './account';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ss6-e1',
  templateUrl: './ss6-e1.component.html',
  styleUrls: ['./ss6-e1.component.css']
})
export class Ss6E1Component implements OnInit {
  accountInfoForm: FormGroup;
  selected = -1;
  constructor() {
    this.accountInfoForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      country: new FormControl('', [Validators.min(0)]),
      age: new FormControl('', [Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.minLength(11)])
    });
  }

  ngOnInit(): void {
  }

  submitAccount() {
  console.log(this.accountInfoForm);
  }
}
