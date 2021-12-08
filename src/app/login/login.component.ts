import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  login()
  {

  const provider = new GoogleAuthProvider();
  this.afAuth.signInWithRedirect(provider);

  }

}
