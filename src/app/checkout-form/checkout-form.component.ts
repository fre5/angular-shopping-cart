import { Component, OnInit } from '@angular/core';
import { Info } from '../models/Info';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkbox: boolean = true;
  info: Info;
  submitButton: boolean = false;

  constructor() { 
    this.info = new Info();
  }

  ngOnInit(): void {
    this.checkbox = false;
  }

  checkboxCheck() {
    this.checkbox = !this.checkbox;
  }

  checkout() {
    console.log(`Order submitted`);
  }

  submitForm() {
    console.log('Form is submitted');
  }

}
