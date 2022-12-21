import { Injectable } from '@angular/core';
import {Customer} from "../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  readonly URL_CUSTOMER = 'http://localhost:3000/customers';
  constructor(private httpClient: HttpClient) { }
  customers: Customer[] = [{
    id:'KH-1233',
    name:'Tra Tan Thuan',
    phoneNumber: '0905908695',
    identifyNumber: '123131231',
    email:'thuantra@gmail.com',
    dateOfBirth: new Date('2022-03-25')
  },
    {
      id:'KH-1222',
      name:'Tra Tan Luan',
      phoneNumber: '0905908000',
      identifyNumber: '123131344',
      email:'luantra@gmail.com',
      dateOfBirth: new Date('2022-02-25')
    }]
  getAll() : Observable<any> {
    return this.httpClient.get(this.URL_CUSTOMER);
  }



}
