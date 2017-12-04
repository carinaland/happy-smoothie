import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

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

  constructor(public authService: AuthUserService,private router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user != null) {
        this.isLoggedIn = true;
        this.user_displayName = user.displayName;
        this.user_email = user.email;
        console.log("Logged in");
      //  this.router.navigate(['home']);
      }
      else {      
       console.log("Logged out");
       this.user_displayName = '';
       this.user_email ='';
      // this.router.navigate(['loginAdmin']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
    this.user_displayName = '';
    this.user_email ='';
  }

 /* private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );
  } */
}






