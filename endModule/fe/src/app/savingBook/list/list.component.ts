import {Component, OnInit} from '@angular/core';
import {SavingBookService} from '../service/saving-book.service';
import {SavingBook} from '../module/saving-book';
import {formatI18nPlaceholderName} from '@angular/compiler/src/render3/view/i18n/util';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  savingBookList: SavingBook[];

  constructor(private savingBookService: SavingBookService) {
  }

  ngOnInit(): void {
    this.getALlList();
  }

  getALlList() {
    this.savingBookService.getAll().subscribe(value => {
      this.savingBookList = value;
    });
  }

}
