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
    console.log('list khoi tao');
    this.getAll();

  }

  getAll() {
    this.products = this.productService.getAll();
  }

  saveProduct(product: Product) {
    this.productEdit = product;
    // console.log(this.productEdit);
  }

  deleteProduct(product: Product) {
    console.log(typeof product.id);
    const check = confirm('Do you want to delete this product ' +  product.name);
    if (check) {
      this.productService.deleteProduct(product.id);
      this.ngOnInit();
      // this.router.navigate(['product']);
    }


  }
}
