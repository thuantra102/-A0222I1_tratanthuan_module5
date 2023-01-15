import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SavingBook} from '../module/saving-book';
import {ActivatedRoute, Router} from '@angular/router';
import {SavingBookService} from '../service/saving-book.service';
import {CustomerService} from '../service/customer.service';
import {Customer} from '../module/customer';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  savingBookForm: FormGroup;
  savingBook: SavingBook;
  check = false;
  customerList: Customer[];

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private savingBookService: SavingBookService,
              private router: Router,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.buildForm();
    if (this.router.url.includes('savingBook/create')) {
      this.check = true;
      this.getListCustomer();
      return;
    }
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id');
      console.log(id);
      this.savingBookService.getById(id).subscribe(value => {
        this.savingBook = value;
        this.buildForm();
      });
    });
  }
  getListCustomer() {
    this.customerService.getAll().subscribe( data => {
      this.customerList = data;
      console.log(this.customerList);
    });
  }

  buildForm() {
    this.savingBookForm = this.formBuilder.group({
      id: [this.savingBook === undefined ? '' : this.savingBook.id],
      openingDay: [this.savingBook === undefined ? '' : this.savingBook.openingDay],
      startDay: [this.savingBook === undefined ? '' : this.savingBook.startDay],
      period: [this.savingBook === undefined ? '' : this.savingBook.period],
      deposit: [this.savingBook === undefined ? '' : this.savingBook.deposit],
      reference: [this.savingBook === undefined ? '' : this.savingBook.reference],
      interestRate: [this.savingBook === undefined ? '' : this.savingBook.interestRate],
      customerId: [this.savingBook === undefined ? '' : this.savingBook.customer.id]

    });
  }

  submit() {
    this.savingBookService.save(this.savingBookForm.value).subscribe(data => {
    this.router.navigateByUrl('/');
    });
  }
}
