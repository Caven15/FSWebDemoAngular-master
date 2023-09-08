import { Component } from '@angular/core';
import { FakeAuthService } from '../shared/services/fake-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private _nomFakeAuth : FakeAuthService,
    private _nomRouter : Router
  ){}

  isConnected : boolean = this._nomFakeAuth.isConnected();
  email : string | null = this._nomFakeAuth.getEmailConnected();

  ngOnInit(){
    console.log("Chargement de la nav-bar");
  }

  getConnexion() : void {
    this._nomRouter.navigate(['demo-fake-login'])
  }

  logout() : void{
    this._nomFakeAuth.logout()
    this.getConnexion();
  }
}
