import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../module/product';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {
  @Input()
  product: Product = {id: 1, name: 'thuan', price: 11231, description: 'new'};
  productForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private  service: ProductService, public router: Router) {
    console.log('constructor');
    this.productForm = fb.group({
      id: 0,
      name: '',
      price: 0,
      description: ''
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.product.name);

  }

  submit() {
    console.log('submit');
    console.log(this.product);
    console.log(this.productForm.value);
    this.service.edit(this.productForm.value);
    this.router.navigate(['product/list']);
  }
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.product.currentValue != null) {
      console.log('ngOnChanges');
      console.log(changes.product.currentValue.name);

      this.productForm = this.fb.group({
        id: changes.product.currentValue.id,
        name: changes.product.currentValue.name,
        price: changes.product.currentValue.price,
        description: changes.product.currentValue.description
      });
    }


    // for (const property in changes) {
    //   if (property === 'product') {
    //     console.log('Previous', changes[property].previousValue);
    //     console.log('Current', changes[property].currentValue);
    //     console.log('FirstChange', changes[property].firstChange);
    //     console.log('THis count', this.productForm);
    //   }
    // }
  }
}
