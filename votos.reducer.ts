ts
import { createReducer, on } from '@ngrx/store';
import { votarAFavor, votarEnContra, borrar } from './votos.actions';

export interface Elemento {
  id: number;
  nombre: string;
  votos: number;
}

const estadoInicial: Elemento[] = [
  { id: 1, nombre: 'Elemento A', votos: 0 },
  { id: 2, nombre: 'Elemento B', votos: 0 }
];

export const votosReducer = createReducer(
  estadoInicial,
  on(votarAFavor, (state, { id }) => state.map(e => e.id === id ? { ...e, votos: e.votos + 1 } : e)),
  on(votarEnContra, (state, { id }) => state.map(e => e.id === id ? { ...e, votos: e.votos - 1 } : e)),
  on(borrar, (state, { id }) => state.filter(e => e.id !== id))
);
