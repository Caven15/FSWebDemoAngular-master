import { Component } from '@angular/core';
import { Pokemon } from 'src/app/shared/Models/pokemon';
import { PokeApiService } from 'src/app/shared/services/poke-api.service';

@Component({
  selector: 'app-conso-api',
  templateUrl: './conso-api.component.html',
  styleUrls: ['./conso-api.component.scss']
})
export class ConsoApiComponent {

  found : boolean = false
  currentPokemon! : Pokemon
  constructor(private _nomPokeApi : PokeApiService){}

  ngOnInit(){
    this._nomPokeApi.getById(101).subscribe({
      next : (data) => {

        this.currentPokemon = {
          height : data.height,
          name : data.name,
          weight : data.weight
        }

        console.log(this.currentPokemon)
      },
      error : (error) => {
        console.log(error)
      },
      complete :() => {
        console.log("Subscribe finis !")
        this.found = !this.found
      }
    })
  }
}
