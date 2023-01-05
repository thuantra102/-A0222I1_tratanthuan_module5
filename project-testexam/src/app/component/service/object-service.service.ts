import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Object} from "../model/object";


@Injectable({
  providedIn: 'root'
})
export class ObjectServiceService {
  urlObject =  "http://localhost:3000/objects";

  urlType =  "http://localhost:3000/types"
  constructor(private httpClient: HttpClient) { }

  getAllWithSearch(name,typeId) : Observable<any> {
    return  this.httpClient.get(`${this.urlObject}?_sort=name&_order=desc&name_like=${name}&typeCode_like=${typeId}`)
  }
  save(object: Object){
    if(object.id) {
      console.log('edit')
      return this.httpClient.put(this.urlObject + "/" + object.id, object)
    } else {
      return this.httpClient.post(this.urlObject, object);
    }
  }
  getType() : Observable<any> {
    return this.httpClient.get(this.urlType);
  }
  delete(id : Number) {
    return this.httpClient.delete(this.urlObject + "/" + id);
  }
}
