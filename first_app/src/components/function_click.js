import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log("button clicked")
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick

//we are using clickHandler here not clickHandler() coz it is not a function call
