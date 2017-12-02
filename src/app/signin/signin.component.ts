import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../providers/auth-user.service';
import { NotificationService } from '../providers/notification.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  constructor(private auth: AuthUserService) { }

  ngOnInit() {
  }
  login() {
    this.auth.login(this.email, this.password);
    console.log(this.email);
    console.log(this.password);
  }
}
