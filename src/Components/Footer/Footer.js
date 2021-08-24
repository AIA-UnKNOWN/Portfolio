import './Footer.css';

import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
	return (
		<div className="footer">

			<div className="container">
				
				<p className="copyright">Ajboy Ian Abordo | © Copyright 2021</p>

				<div className="social-medias">
					
					<a href="#" target="_blank">
						<FaFacebookF className="facebook-icon" />	
					</a>
					<a href="#" target="_blank">
						<FaTwitter className="twitter-icon" />
					</a>

				</div>

			</div>

		</div>
	);
}

export default Footer;