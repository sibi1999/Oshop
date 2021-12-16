import { AuthService } from './../services/auth.service';
import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    public auth: AuthService
  ) { }

 login()
 {

  this.auth.login()

 }

}
