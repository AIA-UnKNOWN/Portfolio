import './style.css';

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
					<p className="developer">Software Developer</p>
					<p className="description">
					With many real world experiences worked at startup as a remote developer
					</p>
					<div className="header-buttons">
						<a href="#my-projects" className="see-projects-button">See Projects</a>
						<a href="./AjboyIanAbordo-resume.pdf" className="download-button" download>Download Resume</a>
					</div>
				</div>

				<div className="image-container">
					<img src="https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5vbnltb3VzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="My profile" />
				</div>
			</div>

		</div>
	);
}

export default Header;
