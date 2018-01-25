import React from 'react';
import '../style/contact.css';

class Contact extends React.Component {
  constructor() {
    super();
    this.launch = this.launch.bind(this);
  }

  launch(socialApp) {
    if (socialApp === "twitter") {
      // socialApp.preventDefault();
      window.location = 'https://twitter.com/TheLacyCode';
    };
    if (socialApp === "github") {
      // socialApp.preventDefault();
      window.location = 'https://github.com/thelacycode';
    };
    if (socialApp === "youbube") {
      // socialApp.preventDefault();
      window.location = 'https://www.youtube.com/channel/UCbex0MoKF2UgE1WvQbCUTCA';
    };
  }


  render(){
    return(
      <div className="contact-info">
        <h2>WHERE TO FIND ME</h2>
        <div className="my-contacts">
        <button className="social twitter" onClick = {() => this.launch('twitter')}>
          TWITTER</button>
        <button className="social github" onClick = {() => this.launch('github')}>
          GITHUB</button>
        <button className="social youtube" onClick = {() => this.launch('youtube')}>
          YOUTUBE</button>
      </div>

      </div>

    )
  }
}

export default Contact;
