import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/Auth/auth.service';
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) { }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler) {

    return this.auth.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        let modifiedReq;
        if (req.url != "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json") {
          modifiedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${user.token}`
            }
          });
        } else {
          modifiedReq = req.clone();
        }

        console.log("interceptor:: ");
        console.log(req.url);


        return next.handle(modifiedReq).pipe(catchError(
          (err, caught) => {
            if (err.status === 401 || err.status === 403) {
              this.auth.logOut();
              this.router.navigate(['/']);
            }
            throw err;
          }
        ));
      }
      )
    );

  }

}
