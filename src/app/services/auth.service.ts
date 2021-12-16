import { AngularFireAuth } from '@angular/fire/compat/auth';
import { observable, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { User } from '../models/user.model';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
// import{auth} from 'firebase/app'



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: Observable<User | null | undefined>;
  constructor(private afAuth: AngularFireAuth ,
    private route: ActivatedRoute,
    private userService: UserService)
   {
    this.user$=afAuth.authState
  }

  login()
  {

  const returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
  localStorage.setItem('returnUrl',returnUrl);
  const provider = new GoogleAuthProvider();
  this. afAuth.signInWithRedirect(provider);

  }

  logout()
  {
    this.afAuth.signOut();

  }

  get appUser():Observable<AppUser>
  {
    return this.user$.pipe(switchMap((user)=>{

      if(user) return this.userService.get(user.uid)
    else{
      return of(undefined);
    }

    }

    ))
  }


}
