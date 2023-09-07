import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/Models/product';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-exo-formulaire',
  templateUrl: './exo-formulaire.component.html',
  styleUrls: ['./exo-formulaire.component.scss']
})
export class ExoFormulaireComponent {

  // Id à récupérer (-1 par default)
  idARecup : number = -1;

  // Produit à récuperer
  produitToUpdate! : Product;

  // Message d'erreur
  messageErreur! : string;

  // déclaration du fromGroup
  updateForm! : FormGroup;

  constructor(
    private _nomFormBuilder : FormBuilder,
    private _nomProductService : ProductServiceService
    ){
      this.produitToUpdate = {
        id : -1,
        nom : '',
        description : '',
        prix : 0
      }
  }

  ngOnInit(){
    // récupération des tout les input via les formControlName
    this.updateForm = this._nomFormBuilder.group({
      nom : [null, [Validators.required]],
      description : [null, [Validators.required]],
      prix : [null, [Validators.required]],
    })
  }

  recupererProduit() : void {
    const nombreProduits = this._nomProductService.getProduits().length;
    if (this.idARecup == -1 || this.idARecup >= nombreProduits) {
      this.messageErreur = "Id introuvable...";
    }
    else{
      // sinon je récupères mes informations
      this.produitToUpdate = this._nomProductService.getProduit(this.idARecup)
      this.messageErreur = ''
      console.log(this.produitToUpdate)
    }
  }

  soumettreFormulaire() : void {
    const form = this.updateForm.value
    this.produitToUpdate.nom = form['nom'];
    this.produitToUpdate.description = form['description'];
    this.produitToUpdate.prix = form.prix;
    this._nomProductService.updateProduit(this.produitToUpdate);
  }
}
