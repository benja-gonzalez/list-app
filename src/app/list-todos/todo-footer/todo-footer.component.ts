import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../lists-todo.actions';
import { FiltroTODOS, setFiltro } from 'src/app/filtros/filtro.actions';
import { ListTodos } from '../../app.reducers';

@Component({
	selector: 'app-footer',
	templateUrl: './todo-footer.component.html',
	styleUrls: ['./todo-footer.component.scss']
})
export class FooterComponent implements OnInit {

	actual          : FiltroTODOS = 'todos';
	filtrosAceptados: FiltroTODOS[] = ['todos', 'pendientes', 'completados'];
	pendientes      : number = 0;

	constructor(
		private _store: Store<ListTodos>
	) { }

	ngOnInit(): void {
		/* this._store.select('filtro').subscribe( state => this.actual = state ); */

		this._store.subscribe( ({todos,filtro}) => 
			{
				this.pendientes = todos.filter(v => !v.completado).length;
				this.actual = filtro;
			});
	}
	/**
	 * Hace un dispatch de la accion setFiltro.
	 * @param value Tipod e filtro a aplicar.
	 * @returns void.
	 */
	filtrarItems = (value: FiltroTODOS): void => this._store.dispatch(setFiltro({filtro: value}) );

	/**
	 * Hace un dispatch de la ccion deleteCompletados.
	 * @returns void
	 */
	limpiarCompletados = (): void => this._store.dispatch(actions.cleanComplete());
}
