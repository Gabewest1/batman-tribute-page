import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">Timeline</div>
        <div className="hero-img" >
          <video src="/batman-hero-video.mp4" autoPlay />
        </div>
        <footer className="footer">
          To learn more about <a href="#">Batman</a>
        </footer>
      </div>
    );
  }
}

export default App;
