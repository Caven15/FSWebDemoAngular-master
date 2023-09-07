import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent {

  IdUser! : number;

  constructor(
    // permet d'initialiser une redirection ver un autre composant
    private _nomRouter : Router,

  ){

  }

  redirectToHome() : void{
    this._nomRouter.navigate(['home'])
  }

  redirectToProfilUser() : void{
    if (this.IdUser) {
      this._nomRouter.navigate(['conso-activated-route/'+this.IdUser])
    }
  }

}
