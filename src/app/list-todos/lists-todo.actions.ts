import { createAction, props } from '@ngrx/store';

export const add    = createAction('[TODO] add', props<{texto:string}>());// Texto a crear
export const delet  = createAction('[TODO] delete',props<{id :number}>());// Id a cual borrar
export const update = createAction('[TODO] update',props<{texto:string,id:number}>());// Texto a updatear, id a cual updatear