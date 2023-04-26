
// this is the demo of state in class components

import React, { Component } from 'react'

class Message extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Welcome, Visitor</h1>
            </div>
        )

    }
}

export default Message


// we are using a button called subscribe, so when a user clicks on
// subscribe button, the user should get a message like Thanks for subscribing
