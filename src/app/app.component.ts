import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(
    public auth: AuthService,router:Router,
    private user: UserService
  ) {

  this.auth.user$.subscribe(
      (user:User|null|undefined)=>{
        if(user)
        {
          this.user.save(user);

          const returnUrl=localStorage.getItem('returnUrl');
          if(returnUrl){
            localStorage.removeItem("returnUrl");
            router.navigate([returnUrl]);
          }

        }
      }

  )
  }

}
