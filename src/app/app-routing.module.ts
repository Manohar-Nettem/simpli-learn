import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { AuthGuard } from './gaurds/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, },
  { path: "login-register", component: LoginRegisterComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "my-courses", component: MyCoursesComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
