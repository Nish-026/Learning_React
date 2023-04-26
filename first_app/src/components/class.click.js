
import React, { Component } from 'react'

class ClassClick extends Component {
    class_Click(){
        console.log("clicked by class button")
    }
    render() {

        return (
            <div>
                <button onClick={this.class_Click}>Class Click</button>
            </div>

        )

    }
}

export default ClassClick