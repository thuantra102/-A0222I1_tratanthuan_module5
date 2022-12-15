import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  dictionary: Word[] = [{
    word: 'dissertation',
    mean: 'Đề cương'
  }, {
    word: 'thesis',
    mean: 'luận án'
  }, {
    word: 'accommodation',
    mean: 'nhà cho thuê'
  }, {
    word: 'shortage',
    mean: 'Sự thiếu hụt'
  }];

  getALl() {
    return this.dictionary;
  }

  getByWord(word: string) {
    return this.dictionary.find(item => item.word === word);
  }
}
