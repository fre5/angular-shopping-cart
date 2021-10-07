import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkbox: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkbox = false;
  }

  checkboxCheck() {
    this.checkbox = !this.checkbox;
  }

}
