import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './module/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ss7-p3',
  templateUrl: './ss7-p3.component.html',
  styleUrls: ['./ss7-p3.component.css']
})
export class Ss7P3Component implements OnInit {
  products: Product[];
  productEdit: Product;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  getAll() {
    this.productService.getAllProduct().subscribe(data => {
        this.products = data;
    });
  }

  saveProduct(product: Product) {
    this.productEdit = product;
  }
  create() {
    this.productEdit = undefined;
  }

  deleteProduct(product: Product) {
    console.log(typeof product.id);
    const check = confirm('Do you want to delete this product ' +  product.name);
    if (check) {
      this.productService.deleteProduct(product.id).subscribe( data => {
        this.ngOnInit();
      });


    }


  }


}
