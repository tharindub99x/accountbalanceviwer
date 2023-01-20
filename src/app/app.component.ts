import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEventType } from './models/LoginEventType';
import { MockauthService } from './services/mockauth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  loginStatus = true;
  constructor(private authService:MockauthService , private _router: Router){

  }



  logIn(event:LoginEventType){
    if(event.username == "admin@gmail.com" && event.password =="abcd@1234"){
      this.loginStatus = true;
      this._router.navigate(['/admin'])

    }
  }

}
