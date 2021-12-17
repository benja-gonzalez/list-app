import { Action, createReducer, on } from "@ngrx/store";
import { add, delet, update } from './lists-todo.actions';
import { Todo } from "./models/lists-todos.models";

const initialState: Todo[] = [ new Todo('Primer commit')];

//-----------------------------------------------------------------------------------------------------------
// CREATE REDUCER ES DE LA LIBRERIA NGRX PARA NO AHCER UN SWITCH/CASE.
//-----------------------------------------------------------------------------------------------------------
const _listsTodoReducer = createReducer(
    initialState,
    on(add, (state,{texto}) => [ new Todo(texto), ...initialState] ),// regresar siempre un arreglo nuevo, y evitar de mutar el nuevo estado.
    on(delet, (state,{id}) => [...state.filter(v => v.id !== id)] ),
    on(update, (state,{texto,id}) => {
        let index = -1;
        const task = state.find(v => v.id === id);
        if(task) {
            index = state.indexOf(task);
        }
        if(index !== -1){
            let result = state[index];
            result.texto = texto;
            return [result,...state.filter(v => v.id === id)];
        }
        return state;
    } )
);

export const listTodosReducer = (state:Todo[] = initialState, action:Action): Todo[] => {
    return _listsTodoReducer(state,action);
}