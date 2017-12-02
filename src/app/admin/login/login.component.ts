import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'app';
  public isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService,
    private router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user == null) {     
       console.log("Logged out");
       this.user_displayName = '';
       this.user_email ='';     
      }

    });
  }

 
    ngOnInit() {
    }
  
    login() {
      this.authService.loginWithGoogle().then((data) => {
        this.router.navigate(['admin']);
      })
  
  
  }

}