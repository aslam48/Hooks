import React , {useEffect, useState} from 'react'

const IntervalClassCounter = () => {

    const [ count, SetCount] = useState(0)


    const tick = () => {
        SetCount(prev => prev + 1)
    }

    useEffect(()=> {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    },[count])

  return (
    <div> 
        {count}
    </div>
  )
}

export default IntervalClassCounter