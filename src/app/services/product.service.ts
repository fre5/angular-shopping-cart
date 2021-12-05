import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedId: number;
  selectedProduct: Product;

  constructor(private http: HttpClient) {
    this.selectedId = 0;
    this.selectedProduct = new Product();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json");
  }
}
