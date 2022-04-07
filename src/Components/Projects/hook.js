import { useEffect } from 'react';

const useProjects = () => {

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

	});

  const animate = (element, animationClass) => {
    element.classList.add(animationClass);
  }

}

export default useProjects;