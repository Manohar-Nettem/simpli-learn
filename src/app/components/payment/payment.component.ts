import { Component, OnInit, Query } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AuthService } from 'src/app/services/Auth/auth.service';

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
  isAuthenticated: boolean = false;
  otpInvalid: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private profileService: ProfileService, private auth: AuthService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
      this.price = params['price'];
      this.image = params['image'];
    });
    console.log("on init:: header");

  }

  verifyOtp(f1: NgForm) {
    console.log(f1.value.otp);
    this.otpInvalid = f1.value.otp == 123456 ? false : true;
    if (this.otpInvalid)
      return;
    this.auth.user.subscribe((user) => {
      this.isAuthenticated = user != null ? true : false
      this.profileService.saveCourse({ email: user.email, courses: ['1'] }).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/my-courses'])
      });
    });

  }
  completePayment(f: NgForm) {
    console.log(f.value.ccnum);
    this.showOtp = true;

  }

}
