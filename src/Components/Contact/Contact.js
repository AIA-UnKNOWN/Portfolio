import './Contact.css';
import React from 'react';

import Form from './Form/Form';

function Contact() {

	return (
		<div className="container">
			<div className="contact">

				<p className="title">Contact Me</p>

				<Form />

			</div>
		</div>
	);
}

export default Contact;