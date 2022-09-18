import React, {useState} from 'react'

const HookCounter2 = () => {
    const initialCount = 0
    const [count, setCount] =useState(initialCount);

   const increament5 = () =>{
    for(let i = 0; i< 5; i++){
        setCount(count + 5)
    }
   }

  return (
    <div>
        count: {count}
        <button onClick={()=> setCount(initialCount)}>reset</button>
        <button  onClick={()=> setCount(count + 1)}>increament</button>
        <button  onClick={()=> setCount(count <= 0 ? 0: count -1)}>decreament</button>
        <button onClick={increament5}>increament5</button>
       
    </div>
  )
}

export default HookCounter2