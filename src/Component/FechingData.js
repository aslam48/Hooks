import React, {useState, useEffect} from 'react'
import axios from "axios"

function FechingData() {
    const [posts, SetPost] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            SetPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
    </div>
  )
}

export default FechingData