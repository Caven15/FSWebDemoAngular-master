import { Component } from '@angular/core';
import { FakeAuthService } from '../shared/services/fake-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isConnected : boolean = false;
  email : string | null = this._nomFakeAuth.getEmailConnected();

  constructor(
    private _nomFakeAuth : FakeAuthService,
    private _nomRouter : Router
  ){
    this._nomFakeAuth.CurrentUser.subscribe({

      next : (data) => {
        console.log(`voici mon data au subscribe ${data}`)
        if (data !== '') {
          this.isConnected = true
        }
        else{
          this.isConnected = false
        }
      },
      error : (error) => {
        console.log(`L'erreur suivante à été relevé : \n${error}`)
      },
      complete : () => {
        console.log("Je suis arrivé au complete !")
      }
    })
  }


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
