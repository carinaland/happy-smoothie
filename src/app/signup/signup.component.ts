import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotificationService } from '../providers/notification.service';
import { AuthUserService } from '../providers/auth-user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  pwd: string;
  name: string;
  description: string;

  constructor(private auth: AuthUserService) { }

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd, this.name);
    console.log(this.email);
    console.log(this.pwd);
    // this.authService.registerUser(this.registerData)
  }
}



