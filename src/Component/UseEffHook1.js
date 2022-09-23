import React, { useState,  useEffect } from 'react'

 const UseEffHook1 = () => {
    const [count, SetCount] = useState(0)

    useEffect(() => {
     document.title =`you clicked ${count} times`
    })

  return (
    <div>
      <input type='text' value
        <button onClick={() => SetCount(count + 1)}>count {count} times</button>
    </div>
  )
}


export default UseEffHook1
