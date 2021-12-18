import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// components
import { AddComponent } from './add/add.component';
import { FooterComponent } from './todo-footer/todo-footer.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { PrincipalComponent } from './principal.component';


@NgModule({
  declarations: [
    AddComponent,
    FooterComponent,
    ItemComponent,
    ListComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    PrincipalComponent
  ]
})
export class ListTodosModule { }
