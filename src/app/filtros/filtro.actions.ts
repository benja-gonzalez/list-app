import { createAction, props } from "@ngrx/store";

export type FiltroTODOS = 'todos' | 'pendientes' | 'completados';

export const setFiltro         = createAction( '[Filtro] Set Filtro', props<{filtro: FiltroTODOS}>());
export const deleteCompletados = createAction( '[Filtro] Eliminar completados');