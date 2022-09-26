import React, {useReducer} from 'react'


const  ininitialState = 0
const reducer = (state, action) => {
    switch(action) {
        case "increament" :
            return state + 1 
            case "decreament" : 
            return state - 1
            case "reset" :
             return  ininitialState
             default:
                return state
    }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, ininitialState)
  return (
    <div>
        <div> count -- {count}</div>
        <button onClick={() =>dispatch("increament")}>increament</button>
        <button onClick={() =>dispatch("decreament")}>decereament</button>
        <button onClick={() =>dispatch("reset")}>reset</button>
    </div>
  )
}

export default UseReducer