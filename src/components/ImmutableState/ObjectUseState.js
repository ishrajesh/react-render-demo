import React, {useState} from 'react'

const initialState = {
    fname: 'Bruce',
    lname: 'Wayne'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState);
    const onChange = () => { 
        // person.fname= 'Clark';
        // person.lname= 'Kent';
        // setPerson(person)
        const newPerson = {...person, fname:'Clark',lname:'Kent'}
        setPerson(newPerson)
     }    
     console.log("ObjectUseState Render")
    return (
    <div>
        <button onClick={onChange}> {person.fname} {person.lname}</button>
    </div>
  )
}
