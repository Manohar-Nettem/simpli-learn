import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: String = '';
  isAuthenticated: boolean = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    console.log("on init:: header");
    this.auth.user.subscribe((user) => {
      this.isAuthenticated = user != null ? true : false
      console.log("is authenticated::", this.isAuthenticated);

    });
  }
  search() {
    if (this.searchText != '') {
      this.router.navigate(['/search'], { queryParams: { 'searchText': this.searchText } });
    }
  }

  logOut() {
    this.auth.logOut();
  }

}
