import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

	placeholderTodoInputAdd: string = 'Qué necesitas hacer?';

	constructor() { }

	ngOnInit(): void {
	}

}
