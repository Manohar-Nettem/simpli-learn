import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Subject, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './../..//models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId) { }

  logOut() {
    localStorage.setItem('userInfo', null);
    this.user.next(null);
    this.router.navigate(['']);
  }

  autoLogin() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('userInfo') != null) {
        let user = JSON.parse(localStorage.getItem('userInfo') ?? "{}");
        if (user && user.token) {
          let autoUser = new User(user.name, user.email, user.token);
          this.user.next(autoUser);
        }
      }
    }
  }

}
