import {Component, OnInit} from '@angular/core';
import {ProductService} from './service/product.service';
import {Product} from './module/product';
import {Router} from '@angular/router';
import {Category} from './module/category';

@Component({
  selector: 'app-ss7-p3',
  templateUrl: './ss7-p3.component.html',
  styleUrls: ['./ss7-p3.component.css']
})
export class Ss7P3Component implements OnInit {
  products: Product[];
  productEdit: Product;
  category: Category[];

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.productService.getAllCategory().subscribe(data => {
      this.category = data;
      }
    );

  }

  getAll() {
    this.productService.getAllProduct().subscribe(data => {
        this.products = data;
        console.log(this.products);
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

  changeToName(id: number) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.category.length; i++) {
      if (this.category[i].id === id) {
        console.log(this.category[i].name);
        return this.category[i].name;
      } else {
        console.log('ccc');
      }
    }
    // console.log("mot cot");
    // console.log(id);
    //
    // const name = this.category.find(item => item.id = id);
    // console.log(name);
  }


}
