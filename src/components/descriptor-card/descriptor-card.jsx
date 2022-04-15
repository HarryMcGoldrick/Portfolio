import './descriptor-card.css';

export const DescriptorCard = (props) => {
    const {project} = props;
    const {title, description, bullets, techIcons, githubUrl} = project;
    return (
        <>
            <h1 className="project-title">{title} 
            { (githubUrl != null) && (<span style={{float: 'right'}}>
                <a href={githubUrl}>
                    <img
                src='GitHubLogo.png'
                >
                </img>
                </a>
            </span>)}
            </h1>
            
            <p className="project-description">{description}</p>
            <ul className='project-description'>
                {bullets.map(element => {
                    return(
                        <li>{element}</li>
                    )
                })}
            </ul>
            <h2 className="project-subtitle">Built with:</h2>
            <div className="icon-row">
                {techIcons.map(element => {
                    return(
                    <img
                        className="tech-icon"
                        src={element}
                    ></img>
                    )
                })}
            </div>
        </>
    );
}