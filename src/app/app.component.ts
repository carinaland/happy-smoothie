import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase';
import { AuthUserService } from 'app/providers/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'app';
public isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthUserService,private router: Router, public afAuth: AngularFireAuth, private cookieService: CookieService) {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user != null) {
        this.isLoggedIn = true;
        this.user_displayName = user.displayName;
        this.user_email = user.email;
        console.log("Logged in");
      }
      else {      
       console.log("Logged out");
     //  this.user_displayName = '';
      // this.user_email ='';
      // this.router.navigate(['loginAdmin']);
      }
    });
  }

  logout() {
    this.cookieService.delete('userID');
    this.authService.logout();
    this.user_displayName = '';
    this.user_email ='';
  }
}






