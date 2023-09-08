import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  baseUrlPokemon : string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(
    private _nomHttpClient : HttpClient
  ) { }

  getById(idPokemon : number) : Observable<any>{
    return this._nomHttpClient.get<any>(`${this.baseUrlPokemon}${idPokemon}`)
  }
}
