
// this is the demo of state in class components

import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state={
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>

            </div>
        )

    }
}

export default Message


// we are using a button called subscribe, so when a user clicks on
// subscribe button, the user should get a message like Thanks for subscribing
// we cannot use props in this coz props are immutable, we have to use state in this



//set State
//setState() enqueues changes to the component state and tells React that this component and its children 
//need to be re-rendered with the updated state. This is the primary method you use to update the user 
//interface in response to event handlers and server responses.