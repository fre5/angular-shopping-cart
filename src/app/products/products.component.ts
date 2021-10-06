import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        image: '',
        name: 'Laptop',
        price: '$ 1000',
      },
      {
        id: 2,
        image: '',
        name: 'Desktop',
        price: '$ 1200',
      },
      {
        id: 3,
        image: '',
        name: 'Tablet',
        price: '$ 300',
      },
      {
        id: 4,
        image: '',
        name: 'Phone',
        price: '$ 500',
      },
      {
        id: 5,
        image: '',
        name: 'Smart Watch',
        price: '$ 300',
      }
    ];
  }
}
