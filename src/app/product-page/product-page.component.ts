import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product;
  selectedQty: string;

  constructor(private productService: ProductService, private cartService: CartService) { 
    this.product = new Product();
    this.selectedQty = '1';
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.product = res.filter(item => item.id === this.productService.selectedId)[0];
    });
  }

  addToCart(id: number): void {    
    const cartObj: Cart = { 
      id: this.product.id,
      url: this.product.url,
      name: this.product.name, 
      price: this.product.price, 
      description: this.product.description,
      quantity: parseInt(this.selectedQty)
    };
    this.cartService.addToCart(cartObj);
    alert('Item is added');
  }

  setQuantity(quantity: string): void {
    this.selectedQty = quantity;
  }
}
