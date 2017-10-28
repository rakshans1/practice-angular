import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken().then(token => {
            this.token = token;
          });
        }
      )
      .catch(err => console.log(err));
  }

  getToken() {
     firebase.auth().currentUser.getToken().then(token => {
      this.token = token;
    });
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
