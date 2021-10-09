import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  selectedQty: string;
  selectedProduct: Product;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.product = new Product();
    this.selectedQty = '1';
    this.selectedProduct = new Product();
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    this.productService.getProducts().subscribe(res => {
      this.selectedProduct = res.filter(item => item['id'] === id)[0];
      this.productService.selectedProduct = this.selectedProduct;
      const cartObj: Cart = { 
        id: this.selectedProduct.id,
        url: this.selectedProduct.url,
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        description: this.selectedProduct.description,
        quantity: parseInt(this.selectedQty)
      };
      this.cartService.addToCart(cartObj);
      alert('Item is added');
    });
  }

  setQuantity(quantity: string): void {
    this.selectedQty = quantity;
  }

  goToPage(id: number): void {
    this.productService.selectedId = id;
  }

}
