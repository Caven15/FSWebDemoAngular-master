import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  
  //Observable qui émet un nombre toutes les secondes
  data : Observable<number[]> = interval(1000).pipe(
    // incrémentation de la valeur toutes les 1000 S
    map((value) => [value])

    )

}
