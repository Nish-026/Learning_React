import React from 'react'
import Person from './Person'
function PersonList(){
    const persons= [{
        id:1,
        name:"Nish",
        age:26

    },{
        id:2,
        name:"Aman",
        age:23
    },{
        id:3,
        name:"Vinay",
        age:28
    }]
    // let person_list=persons.map(person=><Person person={person} />)  // this gives error as child in a list should have a unique
                                                                    //  "key" prop. so we add key as below
                                                                    // in the below example we have used ID but we can use name also the thing is just it has to be unique

       let person_list=persons.map(person=><Person key={person.id} person={person} />)


    return (
        <div>
            {person_list}
        </div>
    )
}

export default PersonList