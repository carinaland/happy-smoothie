import { Injectable } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {

  constructor(public af: AngularFireAuth, public router: Router) { }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new
      firebase.auth.GoogleAuthProvider())

  }

  logout() {
    console.log('logging out...');
    this.af.auth.signOut()
      .then((res) => this.router.navigate(['loginAdmin']));
  }

}

