import { Injectable } from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  readonly URL_FACILITY = "http://localhost:3000/facilities";
  constructor(private httpClient: HttpClient) { }
  // facilityList: Facility[] = [{
  //   id: 1,
  //   name: 'Fesfd',
  //   cost: 123,
  //   description: 'new',
  //   poolArea: 2123,
  //   status: true,
  //   floor: 3
  // },
  //   {
  //     id: 2,
  //     name: 'sfdads',
  //     cost: 192,
  //     description: 'old',
  //     poolArea: 32,
  //     status: false,
  //     floor: 1
  //   },
  //   {
  //     id: 3,
  //     name: 'sdfasfd',
  //     cost: 1912,
  //     description: 'old',
  //     poolArea: 12,
  //     status: false,
  //     floor: 9
  //   }, {
  //     id: 4,
  //     name: 'sdfa',
  //     cost: 19,
  //     description: 'old',
  //     poolArea: 3,
  //     status: true,
  //     floor: 19
  //   },
  //   {
  //     id: 5,
  //     name: 'sdfa',
  //     cost: 1912,
  //     description: 'old',
  //     poolArea: 3,
  //     status: true,
  //     floor: 9
  //   }, {
  //     id: 6,
  //     name: 'KKKSDAFK',
  //     cost: 19,
  //     description: 'old',
  //     poolArea: 3,
  //     status: false,
  //     floor: 12
  //   }
  // ]
  getAll() : Observable<any> {
    return this.httpClient.get(this.URL_FACILITY);
  }
  save(facility: Facility) {
    console.log(facility.id)
    if (facility.id) {
      return this.httpClient.put(this.URL_FACILITY + "/" + facility.id, facility)
    } else {
      return this.httpClient.post(this.URL_FACILITY, facility);
    }

  }
  delete(id: number) {
    return this.httpClient.delete(this.URL_FACILITY + "/" + id);
  }


}
