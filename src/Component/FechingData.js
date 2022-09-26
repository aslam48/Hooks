import React, {useState, useEffect} from 'react'
import axios from "axios"

function FechingData() {
    const [post, SetPost] = useState({})
    const [id, Setid] = useState(1)
    const [idFromBtnClick , SetidFromBtnClick] = useState(1)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            SetPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [idFromBtnClick])

  const  handleClick = ()=> {
    SetidFromBtnClick(id)
    }

  return (
    <div>
        <input type="text" value={id} onChange={e => Setid(e.target.value)}/>
        <button  type="button" onClick={handleClick}>fech post</button>
       <h2>{post.title}</h2>
       
        {/* {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        } */}
       
    </div>
  )
}

export default FechingData