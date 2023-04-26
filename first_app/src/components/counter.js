import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increaseCounter(){

        this.setState(prevState=> ({
            // count: this.state.count+1
            //now that we are using prevState
             count: prevState.count+1
        }))
        // console.log(this.state.count) // this is synchronous so it will get printed first to execute this code along with
                                      // setState we can use a callback like below
    }
    decreaseCounter(){
        this.setState({
            count: this.state.count-1
        },()=>{
            console.log(this.state.count)
        })
    }
    render() {

        return (
            <div>
                <button onClick={()=>this.increaseCounter()}>+</button>
                Count - {this.state.count}
                <button onClick={()=>this.decreaseCounter()}>-</button>

            </div>
        )

    }
}

export default Counter

//set state is a asynchronous function so if we want a code to be executed along with setState function then we can
// give a callback()


// prevState is a name that you have given to the argument passed to setState callback function. What it holds is the 
//value of state before the setState was triggered by React; Since setState does batching, 
//its sometimes important to know what the previous state was when you want to update the 
//new state based on the previous state value.

// So if multiple setState calls are updating the same state, batching setState calls may
// lead to incorrect state being set. Consider an example:

// state = {
//    count: 0
// }
// updateCount = () => {
//     this.setState({ count: this.state.count + 1});
//     this.setState({ count: this.state.count + 1});
//     this.setState({ count: this.state.count + 1});
//     this.setState({ count: this.state.count + 1});
// }
// In the above code you might expect the value of count to be 4 but it would actually be 1
// since the last call to setState will override any previous value during batching. 
//A way to solve this to use functional setState:

// updateCount = () => {
//     this.setState(prevstate => ({ count: prevstate.count + 1}));
//     this.setState(prevstate => ({ count: prevstate.count + 1}));
//     this.setState(prevstate => ({ count: prevstate.count + 1}));
//     this.setState(prevstate => ({ count: prevstate.count + 1}));
// }