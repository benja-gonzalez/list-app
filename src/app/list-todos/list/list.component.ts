import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FiltroTODOS } from 'src/app/filtros/filtro.actions';
import { Todo } from '../models/lists-todos.models';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	todoArray: Todo[] = [];
	actual   : FiltroTODOS = 'todos';
	constructor(private _store: Store<any>)
	{ }

	ngOnInit(): void {
		// suscripcion al store
		this._store.subscribe(
			({todos,filtro}) => {
				this.todoArray = todos;
				this.actual    = filtro;
			}
		);
	}


}
