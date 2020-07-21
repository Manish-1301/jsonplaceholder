import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './posts.scss'

const Posts=({userId})=>{
    const [posts,setPosts]=useState([]);
    const fetchPosts=async (userId)=>{
        const response=await Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        setPosts(response.data);
    }
    useEffect(()=>{
        fetchPosts(userId)
    },[userId])
    if (posts===undefined){
        return (
            <h1>Loading..</h1>
        );
    }
    else{
        return(
            <div>
                <h2 className="posts__heading"> Posts</h2>
                <ul className="posts">
                {
                    posts.map(post=>(
                        <li key={`l${post.id}`} className="post">
                            <h4 className="post__title">Title: {post.title}</h4>
                            <p className="post__body">{post.body}</p>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default Posts;