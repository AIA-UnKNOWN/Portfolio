import './style.css';

import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaEnvelope, FaLinkedin, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
	return (
		<div className="footer">

			<div className="container">
				
				<p className="copyright">Ajboy Ian Abordo | © Copyright 2021</p>

				<div className="social-medias">
					
					<a href="tel:+639982889462">
						<FaPhoneAlt className="phone-icon" />
					</a>
					<a href="https://web.facebook.com/AjboyIanAbordo" target="_blank">
						<FaFacebookF className="facebook-icon" />	
					</a>
					<a href="https://twitter.com/AjboyIan" target="_blank">
						<FaTwitter className="twitter-icon" />
					</a>
					<a href="mailto:ajboyian321@gmail.com" target="_blank">
						<FaEnvelope className="gmail-icon" />
					</a>
					<a href="https://github.com/AIA-UnKNOWN" target="_blank">
						<FaGithub className="github-icon" />
					</a>
					<a href="https://www.linkedin.com/in/ajboy-ian-abordo-5b9b551ba" target="_blank">
						<FaLinkedin className="linkedin-icon" />
					</a>
					<a href="https://www.instagram.com/ajboyian321/" target="_blank">
						<FaInstagram className="instagram-icon" />
					</a>

				</div>

			</div>

		</div>
	);
}

export default Footer;