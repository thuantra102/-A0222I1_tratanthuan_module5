import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SavingBook} from '../module/saving-book';
import {Customer} from '../module/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly URL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get<Customer[]>(this.URL + '/list');
  }
}
