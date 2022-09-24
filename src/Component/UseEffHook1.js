import React, { useState,  useEffect } from 'react'

 const UseEffHook1 = () => {
    const [count, SetCount] = useState(0)
    const  [name , SetName] = useState(" ")

    useEffect(() => {
      console.log("useEffect- updating document")
     document.title =`you clicked ${count} times`
    }, [count])

  return (
    <div>
      <input type='text' value={name} onChange={e => SetName(e.target.value)}/> 
        <button onClick={() => SetCount(count + 1)}>count {count} times</button>
    </div>
  )
}


export default UseEffHook1
