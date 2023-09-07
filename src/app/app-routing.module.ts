import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { ArticleListeDirectiveComponent } from './exercices/article-liste-directive/article-liste-directive.component';
import { ParentComponentComponent } from './demo/demoInputOutput/parent-component/parent-component.component';
import { ParentComponent } from './demo/demoInputOutput/v-2/parent/parent.component';
import { ExoBouttonClickParentComponent } from './exercices/exo-boutton-click-parent/exo-boutton-click-parent.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { ProductListComponent } from './exercices/product-list/product-list.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { ExoFormulaireComponent } from './exercices/exo-formulaire/exo-formulaire.component';
import { RoutingComponent } from './demo/routing/routing.component';
import { ConsoActivatedRouteComponent } from './demo/conso-activated-route/conso-activated-route.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Démonstration
  { path: 'home', component: HomeComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo-directive', component: DemoDirectiveComponent },
  { path: 'demo-input-output', component: ParentComponentComponent },
  { path: 'demo-input-output-V-2', component: ParentComponent },
  { path : 'demo-formulaire', component : FormulaireComponent},
  { path : 'demo-service', component : DemoServiceComponent},
  // j'ajoute un paramètre (id) pour envoyé une information sur la route active
  { path : 'routing', component : RoutingComponent},
  { path : 'conso-activated-route/:id', component : ConsoActivatedRouteComponent},



  // Exercice
  { path: 'exercice1', component: Exercice1Component },
  { path: 'exercice2', component: Exercice2Component },
  { path: 'article-liste-directive', component: ArticleListeDirectiveComponent },
  { path: 'exo-boutton-click', component: ExoBouttonClickParentComponent },
  { path: 'product-list', component: ProductListComponent},
  { path: 'exo-formulaire', component : ExoFormulaireComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
