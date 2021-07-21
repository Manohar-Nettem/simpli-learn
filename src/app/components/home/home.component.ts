import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean = false;
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    console.log("on init:: header");
    this.auth.user.subscribe((user) => {
      this.isAuthenticated = user != null ? true : false
      console.log("is authenticated::", this.isAuthenticated);

    });
  }


}
