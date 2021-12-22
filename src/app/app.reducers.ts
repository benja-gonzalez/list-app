import { ActionReducerMap } from "@ngrx/store";
import { FiltroTODOS } from "./filtros/filtro.actions";
import { filtroReducer } from "./filtros/filtro.reducers";
import { listTodosReducer } from "./list-todos/lists-todos.reducers";
import { Todo } from "./list-todos/models/lists-todos.models";


export type ListTodos = { todos: Todo[], filtro:FiltroTODOS };

export const appReducers: ActionReducerMap<ListTodos> = 
{
    todos : listTodosReducer,
    filtro: filtroReducer
}