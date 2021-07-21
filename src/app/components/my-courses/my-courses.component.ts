import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor(private profileService: ProfileService, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      if (!user)
        return;
      this.profileService.getCourse(user.email).subscribe((data) => {
        console.log(data);
      });
    });



  }

}
