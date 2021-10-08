import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  subtotal: string = '';
  tax: string = '';
  shipping: string = '';
  total: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.subtotal = this.cartService.getSubtotal().toString();
    this.tax = this.cartService.getTax().toString();
    this.shipping = this.cartService.getShipping().toString();
    this.total = this.cartService.getTotal().toString();
  }

  checkout() {
    console.log(`Order submitted`);
  }

  
}
