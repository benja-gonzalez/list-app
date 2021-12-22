import { Action, createReducer, on } from "@ngrx/store";
import { add, delet, update, toggle, toggleAll,cleanComplete } from './lists-todo.actions';
import { Todo } from "./models/lists-todos.models";

const initialState: Todo[] = [
    new Todo('Primer commit')
];

//-----------------------------------------------------------------------------------------------------------
// CREATE REDUCER ES DE LA LIBRERIA NGRX PARA NO AHCER UN SWITCH/CASE.
//-----------------------------------------------------------------------------------------------------------
const _listsTodoReducer = createReducer(// regresar siempre un arreglo nuevo, y evitar de mutar el nuevo estado.
    initialState,
    on(add, (state, { texto }) => [new Todo(texto), ...state]),// agrego un item nuevo al store
    on(toggle, (state, { id }) => {// toggle de la propiedad completado
        return state.map(
            el => {
                if (el.id === id) { return { ...el, completado: !el.completado } } else { return el; }
            }
        );
    }),
    on(delet, (state,{id}) => [...state.filter(v => v.id !== id)] ),// borro el elemento del store
    on(update, (state, {texto,id}) => {// edito solo el texto del store 
        return state.map(
            el => {
                if (el.id === id) { return { ...el, texto } } else { return el; }
            }
        );
    }),
    on(toggleAll, (state,{completado}) => {// cambio el compeltado dado el valor por parametro
        return state.map(
            el => { return { ...el, completado } }
        );
    }),
    on(cleanComplete, (state) => state.filter( v => !v.completado ) )// limpio todos los completados
);

export const listTodosReducer = (state:Todo[] = initialState, action:Action): any => 
{
    return _listsTodoReducer(state,action);
}