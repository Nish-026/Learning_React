
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello"
        }
    }
    // clickHandler(){      this is written for 1st and 2nd approach
    //     this.setState({
    //         message:"Goodbye"
    //     })
    // }
    clickHandler=()=>{      //this is written for 3rd approach
        this.setState({
            message:"Goodbye"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler}>Event Bind Click</button> // this doesn't work */}
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Click</button> // one way to rectify the above */}
                {/* <button onClick={()=>this.clickHandler()}>Event Bind Click</button> */}
                <button onClick={this.clickHandler}>Event Bind Click</button>
            </div>
        )
    }
}

export default EventBind