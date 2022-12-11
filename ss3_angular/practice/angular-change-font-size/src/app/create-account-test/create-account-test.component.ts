import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-create-account-test',
  templateUrl: './create-account-test.component.html',
  styleUrls: ['./create-account-test.component.css']
})
export class CreateAccountTestComponent implements OnInit {

  constructor() { }
  profileForm = new FormGroup(
    {
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]) },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]);

  ngOnInit(): void {
  }
}
