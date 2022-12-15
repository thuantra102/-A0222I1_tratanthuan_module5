import { Component, OnInit } from '@angular/core';
import {Word} from './model/word';
import {DictionaryService} from './service/dictionary.service';

@Component({
  selector: 'app-ss7-e1',
  templateUrl: './ss7-e1.component.html',
  styleUrls: ['./ss7-e1.component.css']
})
export class Ss7E1Component implements OnInit {
  // tslint:disable-next-line:variable-name
  dictionary_word: Word[];
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  this.getAll();
  }
  getAll() {
    this.dictionary_word = this.dictionaryService.getALl();
  }

}
