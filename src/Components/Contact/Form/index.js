import './style.css';
import { useRef } from 'react';
import useForm from './hook';

function Form() {
	const form = useRef();
	const { sendButtonText, sendEmail, formError } = useForm(form);

	return (
		<form ref={form} onSubmit={sendEmail} className="form">
			<div className="fields">
				<div className="input">
					<div className="field">
						<label>
							Name {formError.name && (<span className="error">*</span>)}
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
						/>
					</div>
					<div className="field">
						<label>
							Email {formError.email && (<span className="error">*</span>)}
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your email"
						/>
					</div>
				</div>
				<div className="textarea">
					<label>
						Message {formError.message && (<span className="error">*</span>)}
					</label>
					<textarea
						name="message"
						id="message"
						placeholder="Leave a message to reach me out!"
					></textarea>
				</div>
			</div>
			<button type="submit">
				{sendButtonText}
			</button>
		</form>
	);
}

export default Form;