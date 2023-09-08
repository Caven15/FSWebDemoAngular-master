import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  // d2claration de mon behaviorSubject
  public CurrentUser! : BehaviorSubject<string>

  constructor() {
    // instanciation du behaviorSubject avec une valeur vide
    this.CurrentUser = new BehaviorSubject<string>('')
  }

  fakeLogin(emailValue : string) : void{
    sessionStorage.setItem('email', emailValue);
    this.CurrentUser.next(emailValue)
  }

  logout() : void {
    sessionStorage.clear();
    this.CurrentUser.next('')
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