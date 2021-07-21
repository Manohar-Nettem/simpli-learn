import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from './../../models/product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getProducts() {

    return this.http.get<Product[]>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json");
  }
}
