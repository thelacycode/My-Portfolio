import React from 'react';
import '../style/footer.css';


class Footer extends React.Component {
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
  }

  render() {

    return(
      <footer className="App-footer">
      <p className="footer-title">Twitter Git The Lacy Code Email</p>
        <button className="twitter" onClick = {() => this.launch('twitter')}>
          <i class="fa fa-twitter fa-2x" aria-hidden="true">
        </i> TWITTER</button>
      <button className="github" onClick = {() => this.launch('github')}>
          <i class="fa fa-github fa-2x" aria-hidden="true">
        </i> GITHUB</button>
      </footer>
    );
  }
}

export default Footer;
