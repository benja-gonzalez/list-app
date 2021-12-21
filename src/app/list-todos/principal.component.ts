import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListTodos } from '../app.reducers';
import * as actions from './lists-todo.actions';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  completado: boolean = false;
  constructor(
    private _store: Store<ListTodos>
  ) { 
  }

  ngOnInit(): void {
  }

  toggleAll = (): void => { this._store.dispatch(actions.toggleAll({completado: this.completado})) }

}
