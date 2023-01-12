import React, { useState } from 'react'

const UseState = ()=> {
    const [count, setcount] = useState(0)
    return (
    <>
        <div>{count}</div>
        <p>Hello can we display this</p>
        <button onClick={setcount(prev => prev+1)}>Increment</button>
        <button onClick={setcount(prev => prev-1)}>Decrement</button>
        <button onClick={setcount(0)}>Reset</button>
    </>
  )
}

export default UseState

