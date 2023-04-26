import React,{Component} from 'react';
import './App.css';
import Welcome from './components/welcome'
import Greet from './components/Greet'
class App extends Component{
  render(){
    return (
      <div className='App'>
        <Greet />
        <Welcome />
      </div>
    )
  }
}
export default App;
