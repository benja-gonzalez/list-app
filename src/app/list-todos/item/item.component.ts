import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListTodos } from 'src/app/app.reducers';
import { Todo } from '../models/lists-todos.models';
import * as actions from '../lists-todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

	// Item a mostrar
	@Input('item') item!                : Todo;
	@ViewChild('input') textInputEditar!: ElementRef;

	checkCompletado!: FormControl;
	textoEditar!    : FormControl;
	editando        : boolean = false;

	constructor(private _store: Store<ListTodos>) { 
		this.checkCompletado = new FormControl(this.item?.completado);
		this.textoEditar = new FormControl(this.item?.texto, Validators.required);
	}

	ngOnInit(): void { 
		this.checkCompletado.valueChanges.subscribe(
			changes => {
				this.toggle();
			}
		)
	}
	
	// Borra un item del store
	delete = (): void => { this._store.dispatch(actions.delet({ id: this.item?.id })); }
	// Toggle de completado true o false
	toggle = (): void => { this._store.dispatch(actions.toggle({ id: this.item?.id })); }
	// Cambia a modo de edicion
	update = (): void => {
		this.editando = true;
		setTimeout(() => {
			this.textInputEditar.nativeElement.select();
		}, 1);
	}
	// Terminar la edicion
	onCancelEdit = (): void => {
		this.item.texto = this.textoEditar.value;
		this.editando = false;
		this._updateTexto();
	}
	// Despacha la accion de updatte al store
	private _updateTexto = (): void => { this._store.dispatch(actions.update({texto: this.item.texto, id:this.item.id})); }
	
}
