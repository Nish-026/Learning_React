// LIST RENDERING 


import React from 'react'

function NameList(){
    const names= ["a","b","c","d","e","f","g","h"]
    let name_list=names.map((name,index)=>
        <h1 key={index}>{name}</h1>
    )
    return (
        <div>
            {name_list}
        </div>
    )
}

export default NameList

// when we can use index as key ?
// 1. The items in your list do not have a unique id
// 2. Thse list is static and will not change
// 3. The list will never be reordered or filtered
