

// How to pass methods a props in react components
//1. in parent component you write the method
//2. in child component pass the method as prop in parent component
//3. access the method using props object and i case you have to pass parameters then use arrow functions syntax





import React, {Component} from 'react';
import ChildComponent from './childComponent';
class ParentComponent extends Component{
    
    constructor(props){
        super(props)

        this.state={
            parentName:'Parent'
        }
        this.greetParent= this.greetParent.bind(this)
    }

    greetParent(child){
        // alert('hello'+ this.state.parentName)

        alert(`Hello ${this.state.parentName} from ${child}`)
    }

    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent