ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { votarAFavor, votarEnContra, borrar } from './store/votos.actions';

@Component({
  selector: 'app-listado-votos',
  templateUrl: './listado-votos.component.html'
})
export class ListadoVotosComponent {
  elementos$ = this.store.select(state => state.votos);

  constructor(private store: Store<{ votos: any[] }>) {}

  votar(id: number, tipo: 'up' | 'down') {
    this.store.dispatch(tipo === 'up' ? votarAFavor({ id }) : votarEnContra({ id }));
  }

  eliminar(id: number) {
    this.store.dispatch(borrar({ id }));
  }
}
