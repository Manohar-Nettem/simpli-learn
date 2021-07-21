import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { AuthService } from '../Auth/auth.service';
import { User } from 'src/app/models/user.model';
import { Product } from 'src/app/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url: string = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  saveUser(userInfo: { name: string, email: string, password: string, countryCode: string, mobile: number }) {
    console.log(userInfo);

    if (!userInfo) {
      return;
    }
    return this.http.post<User>(this.url + 'api/profile/user', { userInfo: userInfo });
  }

  loginUser(email: string, password: string) {
    console.log("loginuser ", this.url);
    console.log(email, password)

    if (!email || !password) {
      return;
    }
    return this.http.post<User>(this.url + 'api/profile/login', { email, password });
  }

  saveCourse(course: { email: string, courses: string[] }) {
    console.log(course);

    if (!course) {
      return;
    }
    return this.http.post<Product>(this.url + 'api/profile/course', { course: course });
  }
  getCourse(email: String) {

    return this.http.post<Product[]>(this.url + 'api/profile/get/course', { email });
  }
}
