import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private _products : Product[] = [];

  constructor() { }

  // C => Create
  ajoutProduit(newProduit : Product){
    this._products.push(newProduit)
  }

  // R => Reads
  getProduits() : Product[]{
    return this._products;
  }

  // U => Update
  updateProduit(updatedProduit : Product){
    const index = this._products.findIndex((product) => product.id === updatedProduit.id)
    if (index >= 0) {
      this._products[index] = updatedProduit;
    }
  }

  // D => Delete
  deleteProduit(id : number){
    const index = this._products.findIndex((product) => product.id === id)
    if (index >= 0) {
      this._products.splice(index, 1)
    }
  }
}
