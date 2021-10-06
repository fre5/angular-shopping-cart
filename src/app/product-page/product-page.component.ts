import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor() { 
    this.product = {
      id: 0,
      image: '',
      name: 'Laptop',
      price: '$ 999',
    }
  }

  ngOnInit(): void {
  }

}
