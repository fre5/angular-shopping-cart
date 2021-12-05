import { Injectable } from '@angular/core';
import { Info } from '../models/Info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info: Info;

  constructor() { 
    this.info = new Info();
  }
}
