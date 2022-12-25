import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from '../../module/product';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../module/category';
import {Ss7P3Component} from '../../ss7-p3.component';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnChanges {
  @Input()
  product: Product;
  categoryList: Category;
  productForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private  service: ProductService,
              public router: Router,
              private list: Ss7P3Component) {
  }

  ngOnInit(): void {
    this.service.getAllCategory().subscribe(data => {
       this.categoryList = data;
    });
  }

  submit() {
    console.log(this.productForm.value.category);
    this.service.saveProduct(this.productForm.value).subscribe(data => {
      this.list.ngOnInit();
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }
  buildForm() {
    this.productForm = this.fb.group({
      id: [this.product === undefined ? '' : this.product.id],
      name: [this.product === undefined ? '' : this.product.name],
      price: [this.product === undefined ? '' : this.product.price],
      description:  [this.product === undefined ? '' : this.product.description],
      category: [this.product === undefined ? '' : this.product.category.id]
    });
  }
}
