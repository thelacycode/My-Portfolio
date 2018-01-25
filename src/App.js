import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';
// import url('https://fonts.googleapis.com/css?family=Open+Sans');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <Intro />
          <About />
          <Projects />
          <Contact />
        </div>
        
      </div>
    );
  }
}

export default App;
