
// This is how destructuring achieved for function component

import React from 'react'

function Destructuring({name,Heroname}) {
    return (
        <div>
            <h1>Hello, {name} a.k.a {Heroname}</h1>
        </div>
    )
}

export default Destructuring