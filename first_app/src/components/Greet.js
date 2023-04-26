

// This is how functional component is made and we use props in this form
import React from 'react'

function Greet(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Greet