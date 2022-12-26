import { Injectable } from '@angular/core';
import {Contract} from "../model/contract";
import {Customer} from "../../CustomerList/model/customer";
import {Facility} from "../../ListFacility/model/facility";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class ContractServiceService {
 readonly URL = "http://localhost:3000/contracts";
 readonly URl_FACILITIES = "http://localhost:3000/facilities";
 readonly URL_CUSTOMERS = "http://localhost:3000/customers";
 constructor(private httpClient: HttpClient) { }
  getAll() : Observable<any> {return this.httpClient.get(this.URL)  }
  getById(id : String) : Observable<any> {return this.httpClient.get(this.URL  + "/" + id)}
  getAllFacilities() : Observable<any> {
   return this.httpClient.get(this.URl_FACILITIES)
  }
  getAllCustomers() : Observable<any> {
   return this.httpClient.get(this.URL_CUSTOMERS)
  }
}
