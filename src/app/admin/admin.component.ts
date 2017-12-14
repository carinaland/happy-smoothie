import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

// developer: Rubab

export class AdminComponent implements OnInit {
  public isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, public router: Router, public afAuth: AngularFireAuth) {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user != null) {
        console.log("Logged in");
        this.router.navigate(['admin']);
      }
      else {      
       console.log("Logged out");
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['loginAdmin']);
  }
}
