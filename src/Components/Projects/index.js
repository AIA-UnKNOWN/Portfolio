import './style.css';
import useProjects from './hook';
import Project from './Project';

import { myProjects } from './my-projects';

function Projects() {
	useProjects();

	return (
		<div className="container">
			<div id="my-projects" className="my-projects">
				<p className="title">Projects</p>
				<div className="projects">
					{myProjects.map(project => (
						<Project
							project={project}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;