// LECTURE 16 conditonal greeting

// in this i want like if the user is logged i then it shoudl say Welcome Nishtha
//otheriwse if not logged then say Welcome, guest
import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        //1. using if-else 

        // if (this.state.isLoggedIn) {
        //     return (<div>Welcome, Nishtha</div>)

        // }else{
        //     return (<div>Welcome,Guest</div>)
        // }

        //2. Ternary operator

        return(
            this.state.isLoggedIn? <div>Welcome Nishtha</div>: <div>Welcome,guest</div>
        )

    }
}

export default UserGreeting