import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conso-activated-route',
  templateUrl: './conso-activated-route.component.html',
  styleUrls: ['./conso-activated-route.component.scss']
})
export class ConsoActivatedRouteComponent {

  idUser! : string
  constructor(
    // permet la récupération de paramètre depuis la route active
    private _nomActivatedRoute : ActivatedRoute
  ){}

  ngOnInit(){
    this.idUser = this._nomActivatedRoute.snapshot.params['id']
  }
}
