

//This is how class component is made adn we use props in this form
import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hi, this is class component</h1>
                <p>Welcome,{this.props.name}</p>
            </div>
        )

    }
}

export default Welcome