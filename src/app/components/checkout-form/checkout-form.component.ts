import { Component, OnInit } from '@angular/core';
import { Info } from '../../models/Info';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  checkbox: boolean = true;
  info: Info;
  submitButton: boolean = false;
  notify: boolean = false;

  constructor(private infoService: InfoService, private router: Router) { 
    this.info = new Info();
  }

  ngOnInit(): void {
    this.checkbox = false;
  }

  checkboxCheck() {
    this.checkbox = !this.checkbox;
  }

  submitForm() {
    this.infoService.info = this.info;
    this.router.navigate(['success']);
  }

  validationFeedback(state: boolean|null) {
    if (state) {
      this.notify = true;
    } else {
      console.log('valid');
      this.submitForm();
    }
  }
}
