import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockauthService {

  private static isLoggedIn = false;
  constructor() { }

  getLoginStatus(){
    return MockauthService.isLoggedIn;
  }

  setLoginStatus(status : boolean){
    return MockauthService.isLoggedIn = status
  }
}
