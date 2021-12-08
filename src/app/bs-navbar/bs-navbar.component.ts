import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import * as firebase from 'firebase/auth'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  //  declare user: firebase.User;

   user$!:Observable<firebase.User | null>;
  constructor(private afAuth: AngularFireAuth) {


  this.user$=afAuth.authState ;
    // console.log("user details",this.user);
  };

  logout()
  {

    this.afAuth.signOut();
  }
}
