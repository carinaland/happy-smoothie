import { Component, OnInit, Input} from '@angular/core';
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
  email: string;
  password: string;
  public userID: any;
  constructor(private auth: AuthUserService, private userService:UserService, private cookieService: CookieService) { }

  ngOnInit() {
  }
  login() {
    this.auth.login(this.email, this.password);
    console.log(this.email);
    console.log(this.password);
  }

 /* getUserID(email){
    console.log("email" + this.email)
    var emailUser= {
      email: email.value
    }
  this.userService.getUserID(emailUser).subscribe(user => {
    userID= 
  });
  }
  loginUserID(){
    this.login();
    this.getUserID(this.email);
  }*/

  UserID(){
    if (this.cookieService.check('userID')) {
      this.userID = JSON.parse(this.cookieService.get('userID'));
    }

    this.userID.push({"id": this.user.iduser,});
    this.cookieService.set( 'userID', JSON.stringify(this.userID) );
    console.log("user logged in userID " + this.userID);
   
  }
}
