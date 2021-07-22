import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    console.log("get products");

    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;

    })
  }

  payment(product: Product) {
    this.router.navigate(['/payment'], { queryParams: { title: product.title, price: product.price, image: product.thumbnailURL } });
  }

}
