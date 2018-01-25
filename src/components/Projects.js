import React from 'react';
import '../style/projects.css';
import project1 from '../style/images/test.jpg';
import project2 from '../style/images/test.jpg';
import project3 from '../style/images/test.jpg';

class Projects extends React.Component {
  render(){
    return(
      <div className="my-projects">
      <h2>PROJECTS</h2>
      <div className='project-wrap'>
          <div className="screenshots">
            <img src={project1} alt="project1"/>
            <h4>Description</h4>
          </div>
          <div className="screenshots">
            <img src={project2} alt="project2"/>
            <h4>Description</h4>
          </div>
          <div className="screenshots">
            <img src={project3} alt="project3"/>
            <h4>Description</h4>
        </div>
      </div>
      </div>
    )
  }
}

export default Projects;
