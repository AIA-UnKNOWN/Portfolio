import './Footer.css';

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
					<a href="#" target="_blank">
						<FaFacebookF className="facebook-icon" />	
					</a>
					<a href="#" target="_blank">
						<FaTwitter className="twitter-icon" />
					</a>
					<a href="mailto:ajboyian321@gmail.com" target="_blank">
						<FaEnvelope className="gmail-icon" />
					</a>
					<a href="#" target="_blank">
						<FaGithub className="github-icon" />
					</a>
					<a href="#" target="_blank">
						<FaLinkedin className="linkedin-icon" />
					</a>
					<a href="#" target="_blank">
						<FaInstagram className="instagram-icon" />
					</a>

				</div>

			</div>

		</div>
	);
}

export default Footer;