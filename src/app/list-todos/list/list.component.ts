import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListTodos } from 'src/app/app.reducers';
import { Todo } from '../models/lists-todos.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoArray: Todo[] = [];
  constructor(
    private _store:Store<any>
  ) { }

  ngOnInit(): void {
    this._store.select('todos').subscribe(
      state => {
        this.todoArray = state;
        console.log({state: this.todoArray});
      }
    );
  }


}
