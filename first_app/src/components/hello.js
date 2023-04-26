import React from "react"

const Hello= ()=>{
    //This is JSX
    // return(
    //     <div>
    //         <h1>This is JSX demo</h1>
    //     </div>
    // )
    //Now returning the component without using jsx

    return React.createElement("div",{id:'hello',className:"hello_div"},React.createElement("h1",null,'This is demo without jsx'))

    // so createElement takes three properties 
    // 1. is the tag name you wnat to create
    // 2. Second is the optional properties that you want like id and className
    // 3. Third is the content
}

export default Hello