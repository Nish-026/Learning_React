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
import EventBind from './components/eventBind';
import ParentComponent from './components/parentcomponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import Stylesheet from './components/stylesheet';
import Inline from './components/inline_styling';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/form';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className="error">Errorrrrrrrrrrr</h1>
        <h1 className={styles.success}>Successsssssssss</h1>
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
        <EventBind/>
        <ParentComponent/>
        <UserGreeting/>
        <NameList />
        <PersonList />
        <Stylesheet />
        <Inline />
        <Form />
      </div>
    )
  }
}
export default App;
