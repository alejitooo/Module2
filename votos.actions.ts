ts
import { createAction, props } from '@ngrx/store';

export const votarAFavor = createAction('[Votos] Votar a favor', props<{ id: number }>());
export const votarEnContra = createAction('[Votos] Votar en contra', props<{ id: number }>());
export const borrar = createAction('[Votos] Borrar', props<{ id: number }>());
