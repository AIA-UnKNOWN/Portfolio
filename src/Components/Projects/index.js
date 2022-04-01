import './style.css';
import React, { useState, useEffect } from 'react';

import { myProjects } from './my-projects';

function Projects() {

	useEffect(() => {
		const percent = 80;
		const screenYBreakpointForAnim = (window.innerHeight / 100 * percent);
		const projects = document.querySelectorAll('.project');

		window.addEventListener('scroll', function() {

			projects.forEach(project => {
				const projectDistanceFromTop = project.getBoundingClientRect().top;

				if (projectDistanceFromTop <= screenYBreakpointForAnim) {
					animate(project, 'popup');
				}
			});

		});

		function animate(element, animationClass) {
			element.classList.add(animationClass);
		}
	});

	return (
		<div className="container">
			<div id="my-projects" className="my-projects">

				<p className="title">Projects</p>

				<div className="projects">
					{myProjects.map(project => (
						<div className="project" key={project.name}>

							<div className="image-container">
								<img src={project.image} alt={project.name} />
								<div className="on-hover">
									<a href={project.url} target="_blank">Visit Site</a>
								</div>
							</div>
							
							<p className="name">{project.name}</p>

							<p className="description">{project.description}</p>

							<div className="stacks">
							{project.stacks.map(stack => (
								<span className="stack" key={stack}>{stack}</span>
							))}
							</div>

						</div>
					))}
				</div>

			</div>
		</div>
	);
}

export default Projects;