
import React, {Component} from 'react'
import LifeCycleB from './LifeCycleB'
class LifeCycleA extends Component{
    constructor(props){
        super(props)

        this.state={
            name: "Nishtha"
        }
        console.log('LifeCycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    render(){
        console.log('LifeCycleA render')
        return(
            <div>
                LifeCycleA
                <LifeCycleB />
            </div>
        )
    }
}
export default LifeCycleA

// when Child component is included like in this case it is LifeCycleB, The rendering is passed onto the child component 
// so all the mounting phase of child component is acheived after that parent mounting stage is achieved.
// LifeCycleA constructor
// LifeCycleA getDerivedStateFromProps
// LifeCycleA render
// LifeCycleB constructor
// LifeCycleB getDerivedStateFromProps
// LifeCycleB render
// LifeCycleB componentDidMount
// LifeCycleA componentDidMount
