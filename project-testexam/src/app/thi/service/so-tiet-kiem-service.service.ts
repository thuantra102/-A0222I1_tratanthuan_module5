import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Object} from "../../component/model/object";
import {SoTietKiem} from "../model/so-tiet-kiem";

@Injectable({
  providedIn: 'root'
})
export class SoTietKiemServiceService {
  tietKiemURL  = 'http://localhost:3000/soTietKiem';
  khachHangURL = 'http://localhost:3000/khachHang'


  constructor(private httpClient : HttpClient) { }
  getAllWithSearch(maSoTietKiem,tenKh) : Observable<any> {
    return this.httpClient.get(`${this.tietKiemURL}?id_like=${maSoTietKiem}&tenKh_like=${tenKh}`)
  }

  getAllKhachHang(): Observable<any> {
    return  this.httpClient.get(this.khachHangURL)
  }
  save(soTietKiem: SoTietKiem){
    if(soTietKiem.id) {
      console.log('edit')
      return this.httpClient.put(this.tietKiemURL + "/" + soTietKiem.id, soTietKiem)
    } else {
      return this.httpClient.post(this.tietKiemURL, soTietKiem);
    }
  }
  delete(id : Number) {
    return this.httpClient.delete(this.tietKiemURL + "/" + id);
  }

}
