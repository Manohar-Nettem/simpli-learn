import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit, AfterViewInit {
  countryCode: string = '+91';
  myForm: FormGroup;
  isRegister: boolean = false;

  constructor(private profile: ProfileService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'loginInfo': new FormGroup({
        'email': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required)
      }),
    });
  }
  ngAfterViewInit() {

  }

  toggle() {
    this.isRegister = !this.isRegister;
  }

  register(form: NgForm) {
    console.log("register");
    console.log(form);
    var userInfo = {
      ...form.value,
    }
    this.profile.saveUser(userInfo).subscribe(res => {
      console.log("logIn response::");
      console.log(res);
      this.myForm.value.loginInfo.email = userInfo.email;
      this.myForm.value.loginInfo.password = userInfo.password;
      setTimeout(() => {
        this.logIn();
      }, 2000);

    });

  }




  logIn() {
    console.log("login");
    console.log(this.myForm);
    this.profile.loginUser(this.myForm?.value?.loginInfo?.email, this.myForm?.value?.loginInfo?.password).subscribe(res => {
      console.log("logIn response::");
      console.log(res);
      if (res?.token) {
        this.auth.user.next(new User(res.name, res.email, res.token));
        localStorage.setItem('userInfo', JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
