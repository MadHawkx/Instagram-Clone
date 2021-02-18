import React from 'react'
import {ContextProvider} from '../Global/Context';
import './PostsDisplay.css'
import Comments from './Comments'
const PostsDisplay = () => {
    const {posts}=React.useContext(ContextProvider);
    return (
        <>
        {posts.map((post)=>(
            <div className="PostsDisplay" id={post.id}>
                <div className="PostsDisplay__Header">
                    <div className="PostsDisplay__Header--avatar">
                    {post.username[0]}
                    </div>
                    <div className="PostsDisplay__Header--username">
                    {post.username}
                    </div>
                </div>
                <div className="PostsDisplay__image">
                    <img src={post.image} alt={post.image}/>
                </div>
                <Comments id={post.id}/>
            </div>
        ))}
        </>
    );
}

export default PostsDisplay
