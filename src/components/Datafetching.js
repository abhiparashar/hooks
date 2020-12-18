import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
            setPost(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [idFromButtonClick])
    
    const handleClick = ()=>{
        return setIdFromButtonClick(id)
    }
    return (
        <div>
        {/* {console.log(posts)} */}
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Fetch Data</button>
        <div>{post.title}</div>
            {/* <ul>
                {post.map(post=>{
                   return <li key={post.id}>{post.title}</li>
                })}
            </ul> */}
        </div>
    )
}

export default Datafetching
