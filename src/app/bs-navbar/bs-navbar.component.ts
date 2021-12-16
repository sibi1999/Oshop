import { AppUser } from './../models/app-user';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  //  declare user: firebase.User;

  appUser!:AppUser;

  constructor(public auth: AuthService,private router: Router) {
   auth.appUser.subscribe((appuser:AppUser)=>{this.appUser=appuser;console.log('au',appuser)},(error: any)=>console.log(error))
  };

  logout()
  {
    this.auth.logout();


  }


}
