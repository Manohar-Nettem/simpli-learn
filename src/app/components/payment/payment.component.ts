import { Component, OnInit, Query } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title: String;
  price: String;
  image: String;
  showOtp: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.price = params['price'];
      this.image = params['image'];
    });
  }

  verifyOtp(f1: NgForm) {
    console.log(f1.value.otp);
    this.router.navigate(['/my-courses'])
  }
  completePayment(f: NgForm) {
    console.log(f.value.ccnum);
    this.showOtp = true;

  }

}
