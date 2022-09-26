
    //   this code is as object useReducer method tutorial

import React, {useReducer} from 'react'


const  ininitialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type) {
        case "increament" :
            return {...state, firstCounter: state.firstCounter + action.value}
            case "decreament" : 
            return {...state, firstCounter: state.firstCounter - action.value}
            case "increament2" :
                return {...state, secondCounter: state.secondCounter + action.value}
                case "decreamen2" : 
                return {...state, secondCounter: state.secondCounter - action.value}
            case "reset" :
             return  ininitialState
             default:
                return state
    }
}

const UseReducer2 = () => {
  const [count, dispatch] = useReducer(reducer, ininitialState)
  return (
    <div>
        <div> count -- {count.firstCounter}</div>
        <div> secondCounter -- {count.secondCounter}</div>
        <button onClick={() =>dispatch({type:"increament", value: 1})}>increament</button>
        <button onClick={() =>dispatch({type:"decreament", value: 1 })}>decereament</button>
        <button onClick={() =>dispatch({type:"increament", value: 5})}>increament5</button>
        <button onClick={() =>dispatch({type:"decreament", value: 5})}>decereament5</button>
        <div>
        <button onClick={() =>dispatch({type:"increament2", value: 1})}>increament counter 2</button>
        <button onClick={() =>dispatch({type:"decreamen2", value: 1 })}>decereament counter2</button>
        </div>
        <button onClick={() =>dispatch({type: "reset"})}>reset</button>
    </div>
  )
}

export default UseReducer2