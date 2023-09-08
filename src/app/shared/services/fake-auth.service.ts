import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  constructor() { }

  fakeLogin(emailValue : string) : void{
    sessionStorage.setItem('email', emailValue);
  }

  logout() : void {
    sessionStorage.clear();
  }

  isConnected() : boolean{
    const email = sessionStorage.getItem('email')
    if (!email) {
      return false;
    }
    return true;
  }

  getEmailConnected() : string | null {
    return sessionStorage.getItem('email')
  }
}