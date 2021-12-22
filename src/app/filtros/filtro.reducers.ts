import { Action, createReducer, on } from '@ngrx/store';
import { FiltroTODOS, setFiltro } from './filtro.actions';

const initialState: FiltroTODOS = 'todos';

const _filtroReducer = createReducer<any>(
    initialState,
    on(setFiltro,(state,{filtro}) => filtro)
);


export function filtroReducer(state:any,action:Action){
    return _filtroReducer(state,action)
}