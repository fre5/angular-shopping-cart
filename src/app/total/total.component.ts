import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  @Input() subtotal: string;
  @Input() tax: string;
  @Input() shipping: string;
  @Input() total: string;

  constructor(private cartService: CartService) { 
    this.subtotal = '';
    this.tax = '';
    this.shipping = '';
    this.total = '';
  }

  ngOnInit(): void {
    this.updateTotal();
  }

  checkout() {
    console.log(`Order submitted`);
  }

  updateTotal() {
    this.subtotal = this.cartService.getSubtotal().toString();
    this.tax = this.cartService.getTax().toString();
    this.shipping = this.cartService.getShipping().toString();
    this.total = this.cartService.getTotal().toString();
  }
}
