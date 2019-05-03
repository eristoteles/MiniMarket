import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '../../models/user';

@Injectable()
export class LoginProvider {

  user: Observable<firebase.User>;
  navCtrl: NavController;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signIn(user: User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
  }

  signUp(user: User){
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  signOut(){
    return this.afAuth.auth.signOut();
  }

}
