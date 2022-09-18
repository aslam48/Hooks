import React, { useState } from 'react'

const HookCounter3 = () => {
    const [name, setName] = useState({firstName: "", lastName:""})
  return (
    <div>
        <from>
            <input type="text" value={name.firstName} onChange={e => setName({...name,  firstName: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({...name,  lastName: e.target.value})}/>
            <h2>your name first name - {name.firstName}</h2>
            <h2>your name last name - {name.lastName}</h2>
          
        </from>
    </div>
  )
}

export default HookCounter3