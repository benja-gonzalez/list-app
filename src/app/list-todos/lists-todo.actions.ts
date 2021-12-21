import { createAction, props } from '@ngrx/store';

export const add       = createAction('[TODO] add', props<{texto:string}>());              // Texto a crear.
export const toggle    = createAction('[TODO] toggle', props<{id:number}>());              // Toggle de completado.
export const delet     = createAction('[TODO] delete', props<{id:number}>());              // Id a cual borrar.
export const update    = createAction('[TODO] update', props<{texto:string, id:number}>());// Texto a updatear, id a cual updatear.
export const toggleAll = createAction('[TODO] toogleAll', props<{completado: boolean}>())  // Cambia el completado de todos los items del store.
