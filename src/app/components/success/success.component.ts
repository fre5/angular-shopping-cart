import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  name: string = '';

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.name = this.infoService.info.billingName;
    console.log(this.name);
  }

}
