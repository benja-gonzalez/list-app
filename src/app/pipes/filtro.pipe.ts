import { Pipe, PipeTransform } from '@angular/core';
import { FiltroTODOS } from '../filtros/filtro.actions';
import { Todo } from '../list-todos/models/lists-todos.models';

@Pipe({
	name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

	transform(value: Todo[], ...args: FiltroTODOS[]): Todo[] {
		switch (args[0]) {
			case 'pendientes':
				return value.filter( v => !v.completado);
			case 'completados':
				return value.filter( v => v.completado);
			default:
				return value;
		}
	}

}
