import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome'
import Greet from './components/Greet'
import Hello from './components/hello'
import Message from './components/message';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name="Nish" />
        <Greet name="Nishtha">
          <p>This is children element</p>
          <button>Yayyyyyy!!</button>
        </Greet>
        <Welcome name="Nish" />
        <Hello />
        <Message/>
      </div>
    )
  }
}
export default App;
