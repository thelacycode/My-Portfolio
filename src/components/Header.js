import React from 'react';
import '../style/header.css';

class Header extends React.Component {
  // constructor() {
  //   super();
  //   this.menuSlide.bind(this);
  // }

    // menuSlide() {
    //    document.getElementsByClassName('menuSelect').style={marginRight: 0},
    //
    //     };


    render(){

      return(

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="header-left"></div>
      <h1 className="App-title">T<span className='color2'>y </span>
        <span className="color2">L</span>acy </h1>
      <div className="header-right">

        <div className="menu">

          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <div className="off-screen">
          <ul className="menu-select">

            <a href=""><li className="menu-link home">Home</li></a>

            <a href=""><li className="menu-link about">About</li></a>

            <a href=""><li className="menu-link projects">Projects</li></a>

            <a href=""><li className="menu-link contact">Contact</li></a>
          </ul>
        </div>
        </div>
      </div>
    </header>

    )
  }
}
export default Header;
