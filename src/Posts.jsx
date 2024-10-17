import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>Post length: {posts.length}</h3>
            {
                posts.map(post => <Post postData={post} key={post.id}></Post>)
            }
        </div>
    )
}