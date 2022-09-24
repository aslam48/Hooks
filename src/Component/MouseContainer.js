import React, {useState} from 'react'
import RunOnce from './RunOnce'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toogle display</button>
        {display && <RunOnce/>}
    </div>
  )
}

export default MouseContainer