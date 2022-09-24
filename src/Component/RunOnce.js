import React, { useState,  useEffect } from 'react'

 const RunOnce = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logmousePosition = e => {
    console.log("mouse event")
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(()=> {
    console.log("useEffect called")
    window.addEventListener("mousemove", logmousePosition)
  })
  return (
    <div>
      hooks X - {x} - Y {y}
    </div>
  )
}


export default RunOnce
