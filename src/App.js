import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProjectWrap from './Components/ProjectWrap.js'
import ImageWithText from './Components/ImageWithText.js'
import ucsc from './Images/ucsc.jpg'
import Objective from './Components/Objective'
import Nav from './Components/Nav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-body">
          <ImageWithText
            image={ucsc}
          />
          <Objective />
          <ProjectWrap />
        </div>
      </div>
    );
  }
}

export default App;
