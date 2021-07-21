import { Component } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpli-learn';
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.autoLogin();
  }

}
