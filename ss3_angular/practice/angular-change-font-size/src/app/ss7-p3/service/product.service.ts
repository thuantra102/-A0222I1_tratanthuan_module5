import { Injectable } from '@angular/core';
import {Product} from '../module/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly URL_PRODUCT = 'http://localhost:3000/products';
  readonly URL_CATEGORY = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) { }
  // products: Product[] = [{
  //   id: 1,
  //   name: 'IPhone 12',
  //   price: 2400000,
  //   description: 'New'
  // }, {
  //   id: 2,
  //   name: 'IPhone 11',
  //   price: 1560000,
  //   description: 'Like new'
  // }, {
  //   id: 3,
  //   name: 'IPhone X',
  //   price: 968000,
  //   description: '97%'
  // }, {
  //   id: 4,
  //   name: 'IPhone 8',
  //   price: 7540000,
  //   description: '98%'
  // }, {
  //   id: 5,
  //   name: 'IPhone 11 Pro',
  //   price: 1895000,
  //   description: 'Like new'
  // }];

  getAllProduct(): Observable<any> {
    return this.httpClient.get(this.URL_PRODUCT);
  }
  getAllCategory(): Observable<any> {
    return this.httpClient.get(this.URL_CATEGORY);
  }

  saveProduct(product) {
    if (product.id) {
      return this.httpClient.put(this.URL_PRODUCT + '/' + product.id, product);
    } else  {
      return  this.httpClient.post(this.URL_PRODUCT, product);
    }
  }
  // edit(productEdit) {
  //   const index = this.products.findIndex((obj => obj.id === productEdit.id));
  //   this.products[index] = productEdit;
  // }

  deleteProduct(id: number) {
    console.log('delete id= '  + id);
    return this.httpClient.delete(this.URL_PRODUCT + '/' +  id);
  }
  getCategoryById(id: number) {
    return this.httpClient.get(this.URL_CATEGORY + '/' + id);
  }
}
