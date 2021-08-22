import './Header.css';

import React from 'react';

function Header() {
	return (
		<div className="header">
			<span className="top-gold-bar"></span>

			<div className="content">
				<div className="me">
					<p className="name">
						<span className="highlight-letter">A</span>jboy <span className="highlight-letter">I</span>an <span className="highlight-letter">A</span>bordo
					</p>
					<p className="developer">Full Stack Developer</p>
					<p className="description">
					With many real world experiences worked at startup as a remote developer
					</p>
					<a href="#my-projects" className="see-projects-button">See Projects</a>
				</div>

				<div className="image-container">
					<img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="My profile" />
				</div>
			</div>

		</div>
	);
}

export default Header;