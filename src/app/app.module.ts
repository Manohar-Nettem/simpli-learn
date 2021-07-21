import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginRegisterComponent,
    HomeComponent,
    HeaderComponent,
    PaymentComponent,
    MyCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
