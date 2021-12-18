import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ListTodos } from '../../app.reducers';
import * as actions from '../lists-todo.actions';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

	placeholderTodoInputAdd: string = 'Qué necesitas hacer?';
	texto				   : FormControl;

	constructor(
		private _store: Store<ListTodos>
	) { 
		this.texto = new FormControl({value:'',disabled:false}, Validators.required);
	}

	ngOnInit(): void {
	}
	
	onAdd = (): void => {
		//const txt = this.texto.value;
		if (this.texto.valid) {
			this._store.dispatch(actions.add({texto: this.texto.value}));
			this.texto.reset();
		}
	}

}
