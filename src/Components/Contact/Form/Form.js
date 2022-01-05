import './Form.css';
import React from 'react';

import { validateEmail } from './email-validation';

function Form() {

	function sendEmail(e) {
		validateEmail(e);
	}

	return (
		<form onSubmit={sendEmail} className="form">

			<div className="fields">

				<div className="input">

					<div className="field">
						<label>Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
						/>
					</div>
					<div className="field">
						<label>Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your email"
						/>
					</div>

				</div>

				<div className="textarea">
					<label>Message</label>
					<textarea
						name="message"
						id="message"
						placeholder="Leave a message to reach me out!"
					></textarea>
				</div>

			</div>

			<button type="submit">Send</button>

		</form>
	);
}

export default Form;