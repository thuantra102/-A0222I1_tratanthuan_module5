import { Injectable } from '@angular/core';
import {Resolve} from "@angular/router";
import {CustomerServiceService} from "../../service/customer-service.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerResolverService implements Resolve<any>{

  constructor(private customerService: CustomerServiceService) { }

  resolve() {
    // return this.customerService.getById()
  }
}
