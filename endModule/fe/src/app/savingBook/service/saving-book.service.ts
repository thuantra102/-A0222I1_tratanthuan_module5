import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SavingBook} from '../module/saving-book';

@Injectable({
  providedIn: 'root'
})
export class SavingBookService {
  readonly URL = 'http://localhost:8080/savingBook';
  readonly URL_FIND_BY_ID = 'http://localhost:8080/savingBook/find/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<SavingBook[]>(this.URL + '/list');
  }
  getById(id): Observable<any> {
    return  this.httpClient.get<SavingBook>(this.URL_FIND_BY_ID + id);
  }
  // @ts-ignore
  save(savingBook: SavingBook): Observable<SavingBook> {
    console.log(savingBook);
    if (savingBook.id) {
      return  this.httpClient.put(this.URL, savingBook);
    } else  {
      return  this.httpClient.put(this.URL, savingBook);
    }
  }
  delete(id) {
    return this.httpClient.delete(this.URL + '/delete/' + id);
  }
}
