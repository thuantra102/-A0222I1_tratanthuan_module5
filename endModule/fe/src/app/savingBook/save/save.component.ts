import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SavingBook} from '../module/saving-book';
import {ActivatedRoute} from '@angular/router';
import {SavingBookService} from '../service/saving-book.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  savingBookForm: FormGroup;
  savingBook: SavingBook;

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private savingBookService: SavingBookService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = param.get('id');
      this.savingBookService.getById(id).subscribe(value => {
        console.log(value);
        // this.buildForm();
      });
    });
  }

  buildForm() {
    this.savingBookForm = this.formBuilder.group({
      id: [this.savingBook === undefined ? '' : this.savingBook.id]
    });
  }

}
