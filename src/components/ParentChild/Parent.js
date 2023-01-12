import React, { useState } from 'react'
import Child from './Child'

const Parent = ()=> {
    const [count, setcount] = useState(0)
    console.log('Render Parent')
    return (
    <div>
        <div>{count}</div>
        <p>Hello can we display this</p>
        <button onClick={()=>setcount(prev => prev+1)}>Increment</button>
        <button onClick={()=>setcount(prev => prev-1)}>Decrement</button>
        <button onClick={()=>setcount(0)}>Reset</button>
        <Child/>
    </div>
  )
}

export default Parent

