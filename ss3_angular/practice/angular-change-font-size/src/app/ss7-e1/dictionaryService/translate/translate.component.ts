import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Word} from '../../model/word';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  mean: Word;
  constructor(private  dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const word = param.get('word');
      this.mean = this.dictionaryService.getByWord(word);
    });
  }

}
