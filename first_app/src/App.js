import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome'
import Greet from './components/Greet'
import Hello from './components/hello'
import Message from './components/message';
import Counter from './components/counter'
import Destructuring from './components/destructuring';
import Class_Des from './components/destructuring.2';
import FunctionClick from './components/function_click';
import ClassClick from './components/class.click';
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
        <Counter/>
        <Destructuring name="Aman" Heroname="Brilliant"/>
        <Class_Des name="Neeru" />
        <FunctionClick/>
        <ClassClick/>
      </div>
    )
  }
}
export default App;
