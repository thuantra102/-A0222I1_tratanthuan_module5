import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './module/product';

@Component({
  selector: 'app-ss7-p3',
  templateUrl: './ss7-p3.component.html',
  styleUrls: ['./ss7-p3.component.css']
})
export class Ss7P3Component implements OnInit {
  products: Product[];
  productEdit: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }

  saveProduct(product: Product) {
    this.productEdit = product;
    // console.log(this.productEdit);
  }
}
