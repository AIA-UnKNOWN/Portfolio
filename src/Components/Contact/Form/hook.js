import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useForm = form => {
  const [sendButtonText, setSendButtonText] = useState('Send');
  const [formError, setFormError] = useState({});
  
  const sendEmail = e => {
		if (!validate(e)) return;
    setSendButtonText('Sending...');
    emailjs.sendForm('service_k35o325', 'contact_form', form.current, '3rJxe9HG0lePds2II')
      .then(result => {
        console.log(result.text);
        setSendButtonText('Sent!');
      }, error => {
        console.log(error.text);
        setSendButtonText('Send Failed!');
      });
	}

  const validate = e => {
    e.preventDefault();
    const { name, email, message } = e.target;
    const error = {};
    if (name.value === '') error.name = 'Name is required';
    if (email.value === '') error.email = 'Email is required';
    if (message.value === '') error.message = 'Message is required';
    setFormError(error);
    return Object.keys(error).length === 0;
  }

  return { sendButtonText, sendEmail, validate, formError };
}

export default useForm;