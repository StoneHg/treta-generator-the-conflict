import React, { Component } from 'react';
import bearduck from './images/bearduck.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>THE TRETA HAS BEGUN!</h1>
        <img src={bearduck} alt="pato do tamanho de um urso"/>
      </div>
    );
  }
}

export default App;
