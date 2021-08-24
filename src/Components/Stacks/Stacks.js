import './Stacks.css';
import React, { useState, useEffect } from 'react';

import { dummyStacks } from './dummy-stacks';

function Stacks() {
	const [ stacks, setStacks ] = useState(dummyStacks);

	useEffect(() => {
		const percent = 80;
		const screenYBreakpointForAnim = ( window.innerHeight / 100 * percent );
		const root = document.documentElement;
		const timeline = document.querySelector( '.timeline' );
		const evenStacks = document.querySelectorAll( '.stack:nth-child(even)' );
		const oddStacks = document.querySelectorAll( '.stack:nth-child(odd)' );

		window.addEventListener( 'scroll', function() {
			const timelineDistanceFromTop = timeline.getBoundingClientRect().top;
			
			if (timelineDistanceFromTop <= screenYBreakpointForAnim) {
				const timelineHeight = screenYBreakpointForAnim - timelineDistanceFromTop;

				if (timelineHeight <= 840) {
					setTimelineHeight( timelineHeight );
				}
			}

			evenStacks.forEach(stack => {
				const stackDistanceFromTop = stack.getBoundingClientRect().top;

				if (stackDistanceFromTop <= screenYBreakpointForAnim) {
					animate( stack, 'popup-from-left' );
				}
			});

			oddStacks.forEach(stack => {
				const stackDistanceFromTop = stack.getBoundingClientRect().top;

				if (stackDistanceFromTop <= screenYBreakpointForAnim) {
					animate( stack, 'popup-from-right' );
				}
			})
		});

		function animate( element, animationClass ) {
			element.classList.add( animationClass );
		}

		function setTimelineHeight( timelineHeight ) {
			root.style.setProperty('--timeline-height', timelineHeight);
		}
	});

	return (
		<div className="container">
			<div className="tech-stacks">

				<p className="title">Tech Stacks</p>

				<div className="stacks">
					<div className="timeline"></div>

					{stacks.map(stack => (
					<div className="stack" key={stack.name}>
						<div className="dot"></div>

						<p className="stack-title">{stack.name}</p>

						<div className="languages">
						{stack.stacks.map(lang =>
							<span className="lang" key={lang}>{lang}</span>
						)}
						</div>
					</div>
					)
					)}
				</div>

			</div>
		</div>
	);
}

export default Stacks;