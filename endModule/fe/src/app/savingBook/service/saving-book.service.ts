import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SavingBook} from '../module/saving-book';

@Injectable({
  providedIn: 'root'
})
export class SavingBookService {
  readonly URL_LIST = 'http://localhost:8080/savingBook/list';
  readonly URL_FIND_BY_ID = 'http://localhost:8080/savingBook/find/';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get<SavingBook[]>(this.URL_LIST);
  }
  getById(id): Observable<any> {
    return  this.httpClient.get<SavingBook>(this.URL_FIND_BY_ID + id);
  }
}
