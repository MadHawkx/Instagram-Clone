import React from 'react'
import './Posts.css'
import {BsFillImageFill} from "react-icons/bs"
import {ContextProvider} from '../Global/Context';

const Posts = () => {
    const {create,user}=React.useContext(ContextProvider);
    const [caption,setCaption]=React.useState('');
    const[image,setImage]=React.useState('');
    const handleImageUpload=(e)=>{
        setImage(e.target.files[0]);
        //console.log(user);

        if(e.target.files[0]===undefined){
            const temp=document.getElementsByClassName("Post__upload--file--details")[0];
            temp.innerHTML="";
        }else{
        const temp=document.getElementsByClassName("Post__upload--file--details")[0];
        temp.innerHTML=e.target.files[0].name;
        }
    }
    const createPost=e=>{
        e.preventDefault();
        create({caption,image});
        setCaption('');
        setImage('');
        const temp=document.getElementsByClassName("Post__upload--file--details")[0];
        temp.innerHTML="";
    }
    if(user!=null){
    return (
        <div className="Posts">
            <form onSubmit={createPost}>
                <div className="Posts__form">
                    <input type="text" className="Posts__input--1" placeholder="Create a New Post" required
                      onChange={e=>setCaption(e.target.value)} value={caption}/>
                </div>
                <div className="Posts__upload">
                <div className="Posts__input--2">
                    <label htmlFor="Post__upload--file"><BsFillImageFill className="Posts__icon"/></label>
                    <input type="file" id="Post__upload--file" className="Post__upload--file" onChange={handleImageUpload} required/>
                </div>
                
                <div className="Posts__submit">
                    <input type="submit" value="Upload" className="btn-submit"/>
                </div>
                </div>
            </form>
            <p className="Post__upload--file--details"></p>
        </div>
    )
    }else{
        return('');
    }
}

export default Posts;
