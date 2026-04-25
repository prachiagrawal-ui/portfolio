import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
	selector: 'app-contact',
	imports: [FormsModule],
	standalone: true,
	templateUrl: './contact.html',
	styleUrl: './contact.scss',
})
export class Contact {

	isSent = false;

	sendMessage(form: any) {
		if (!form.valid) return;

		emailjs.send(
			'service_d0xh962',
			'template_v67fzhb',
			{
				name: form.value.name,
				email: form.value.email,
				message: form.value.message
			},
			'R1Hh71_TLA21TQ3Bp'
		)
			.then(() => {
				this.isSent = true;
				form.reset();

				setTimeout(() => this.isSent = false, 3000);
			})
			.catch(() => {
				alert('Failed to send message');
			});
	}
}
