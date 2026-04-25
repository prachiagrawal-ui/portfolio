import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-dynamic-form',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './dynamic-form.html',
	styleUrl: './dynamic-form.scss',
})
export class DynamicForm {

	private fb = inject(FormBuilder); // ✅ correct way
	form = this.fb.group({
		fields: this.fb.array([])
	});

	constructor() {
		this.addField();
	}

	get fields() {
		return this.form.get('fields') as FormArray;
	}

	addField() {
		this.fields.push(
			this.fb.control('', Validators.required)
		);
	}

	removeField(index: number) {
		this.fields.removeAt(index);
	}

	submit() {
		if (this.form.invalid) return;

		console.log(this.form.value);

		alert('Form submitted successfully!'); // simple UX

		this.form.reset();
	}
}