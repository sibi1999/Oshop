import { Observable } from 'rxjs';
import { AppUser } from './../models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase)
  { }

  save(user:User)
  {
    this.db.object('/users/'+user.uid).update(
      {
        name:user.displayName,
        email:user.email
      }
    )
  }

  get(uid:string|undefined|null):Observable<any>
  {
     return this.db.object('/users/'+uid).valueChanges();
  }
}
