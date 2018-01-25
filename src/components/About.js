import React from 'react';
import '../style/about.css';

class About extends React.Component {
  render(){
    return(
      <div className="about-me">
        <h2>ABOUT ME</h2>
        <p className="myInfo">Lorem ipsum dolor sit amet, consectetur adipiscing
           elit. Nulla eget accumsan est. Fusce rhoncus laoreet rutrum. Donec id
            massa vitae dolor hendrerit tristique at at tortor. Nullam felis metus,
             ornare eu nulla vitae, venenatis iaculis diam. Quisque malesuada facilisis
              metus, ut lobortis ex. Cras erat quam, porta at tortor non, viverra
               luctus turpis. Quisque vel ante in est elementum semper ac vel massa.
                </p>
      </div>

    )
  }
}

export default About;
