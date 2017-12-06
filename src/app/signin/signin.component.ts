import { Component, OnInit, Input } from '@angular/core';
import { AuthUserService } from '../providers/auth-user.service';
import { NotificationService } from '../providers/notification.service';
import { UserService } from 'app/user.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @Input() user;
  name: string;
  email: string;
  password: string;
  UserIDs: any;
  public userID: any;
  constructor(private auth: AuthUserService, private userService: UserService, private cookieService: CookieService) { }

  ngOnInit() {
  }
  login() {
    this.auth.login(this.email, this.password);
    console.log(this.email);
    console.log(this.password);
  }


 

  getUserID() {
    console.log(this.email);
    this.userService.getUserID(this.email).subscribe(returnedUserID => {
      this.userID = returnedUserID[0];
      this.cookieService.set('userID', JSON.stringify(this.userID));
    });
  }
 
 loginUserID() {
    this.login();
    this.getUserID();
    
  }

 
}
