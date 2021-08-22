import './Projects.css';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Projects() {
	const [ projects, setProjects ] = useState([
		{
			name: 'Project 1',
			stacks: [ 'HTML', 'CSS', 'Javascript', 'ReactJS', 'MySQL' ],
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN26hOftzocJIhBD4xrhROdm8fcchqALyBwQ&usqp=CAU',
			url: '#'
		},
		{
			name: 'Project 2',
			stacks: [ 'HTML', 'CSS', 'Javascript', 'ReactJS', 'MySQL' ],
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN26hOftzocJIhBD4xrhROdm8fcchqALyBwQ&usqp=CAU',
			url: '#'
		},
		{
			name: 'Project 3',
			stacks: [ 'HTML', 'CSS', 'Javascript', 'ReactJS', 'MySQL' ],
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN26hOftzocJIhBD4xrhROdm8fcchqALyBwQ&usqp=CAU',
			url: '#'
		}
	]);

	useEffect(() => {
		const percent = 80;
		const screenYBreakpointForAnim = ( window.innerHeight / 100 * percent );
		const projects = document.querySelectorAll('.project');

		window.addEventListener( 'scroll', function() {

			projects.forEach(project => {
				const projectDistanceFromTop = project.getBoundingClientRect().top;

				if (projectDistanceFromTop <= screenYBreakpointForAnim) {
					animate( project, 'popup' );
				}
			});

		});

		function animate( element, animationClass ) {
			element.classList.add( animationClass );
		}
	});

	return (
		<div className="container">
			<div id="my-projects" className="my-projects">

				<p className="title">Projects</p>

				<div className="projects">
				{projects.map(project => (
					<div className="project" key={project.name}>

						<div className="image-container">
							<img src={project.image} alt={project.name} />
							<div className="on-hover">
								<a href={project.url} target="_blank">Visit Site</a>
							</div>
						</div>
						
						<p className="name">{project.name}</p>

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