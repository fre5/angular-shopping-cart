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
    this.product = this.productService.getSelectedProduct(productService.selectedId);
    this.selectedQty = '1';
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    const productToAdd: Product = this.productService.getSelectedProduct(id);
    const cartObj: Cart = { 
      id: productToAdd.id, 
      url: productToAdd.url, 
      name: productToAdd.name, 
      price: productToAdd.price, 
      description: productToAdd.description,
      quantity: parseInt(this.selectedQty)
    };
    this.cartService.addToCart(cartObj);
    alert('Item is added');
  }

  setQuantity(id: number, event: Event): void {
    const quantity: string = (event.target as HTMLInputElement).value as string;
    console.log(`Set item with id: ${id} with quantity ${quantity}`);
    this.selectedQty = quantity;
  }
}
