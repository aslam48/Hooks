import React, {useState} from 'react'

const HookCounter = () => {
    const [count, SetCount] = useState(0)

  const  clickHand = () => {
        SetCount(count + 1)
    }
  return (
    <div>
        <button onClick={clickHand}>count {count}</button>
    </div>
  )
}

export default HookCounter