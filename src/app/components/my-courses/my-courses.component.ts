import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  courses: Product[] = [];
  courses2: Product[] = [];
  products: Product[] = [];
  constructor(private profileService: ProfileService, private auth: AuthService, private productService: ProductsService) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      if (!user)
        return;
      this.productService.getProducts().subscribe((products: Product[]) => {
        console.log(products);
        this.products = products;
        this.profileService.getCourse(user.email).subscribe((data) => {
          console.log(data);


          data.forEach(element => {
            this.products.forEach(el => {
              if (element.courses.indexOf(el.id) != -1) {
                this.courses.push(el);
              }
            });
          });
          console.log(this.courses);


        });

      })



    });



  }

}
