import './style.css';

const Project = ({ project }) => {
  return (
    <div className="project" key={project.name}>
      <div className="image-container">
        <img src={project.image} alt={project.name} />
        <div className="on-hover">
          <a
            className={!project.isReady && 'disabled'}
            href={project.url}
            target={project.isReady && '_blank'}
          >
            {project.type === 'website' ? 'View' : 'Download'}
          </a>
        </div>
      </div>
      <p className="name">
        {project.name}
      </p>
      <p className="description">
        {project.description}
      </p>
      <div className="stacks">
      {project.stacks.map(stack => (
        <span className="stack" key={stack}>
          {stack}
        </span>
      ))}
      </div>
    </div>
  );
}

export default Project;