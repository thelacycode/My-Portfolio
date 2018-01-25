import React from 'react';
import '../style/intro.css';
import Title from './Title'
import headShot from '../style/images/Ty_PCB.jpg';


class Intro extends React.Component {
  render(){

    return(
      <div className="myIntro">
        <div className="tag-line">
          <p className="intro-header">I'm a &thinsp;
            <span className="highlight">
              <i>Developer</i>
              <span className="my-title designer" >Designer </span>
              <span className="my-title developer">Developer </span>
              <span className="my-title entrepreneur">Entrepreneur</span>
            </span>

             &thinsp; making awesome web sites and web applications.</p>

      </div>
      <div>

        <img src={headShot} className="headShot" alt="headShot"/>
      </div>
        <div className="intro-info">
          <h3>Ty.Lacy@TheLacyCode.com</h3>
        </div>
    </div>


    )
  }
}

export default Intro;
