

// This is how destructuring achieved for class component

import React, { Component } from 'react'

class Class_Des extends Component {
    render() {
        const {name}= this.props
        return (
            <div>
                <h1>Hi, this is class component</h1>
                <p>Welcome,{name}</p>
            </div>
        )

    }
}

export default Class_Des