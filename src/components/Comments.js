import React from 'react'
import {ContextProvider} from '../Global/Context';
import {db} from "../config";
const Comments = (props) => {
    const {loader,user,addComment}=React.useContext(ContextProvider);
    const [state,setState]=React.useState('');
    const [comments,setComments]=React.useState([]);
    const postComment=e=>{
        e.preventDefault();
        addComment({id:props.id,comment:state})
        setState("");
    }
    React.useEffect(()=>{
        db.collection("posts").doc(props.id).collection("comments").orderBy("currentTime","desc").onSnapshot(snp=>{
            setComments(snp.docs.map((doc)=>{
                return (doc.data());
            }))
        })

    })

    return (
        <div className="Comments">
            {comments.map(comment=>(
                <div className="Comments__main" key={comment.id}>
                    <div className="Comments__main--name" >
                        {comment.username}
                    </div>

                    <p className="Comments__main--comment">
                        {comment.comment}
                    </p>
                </div>
            ))}
                <div className="Comments__section">
                    {!loader && user ?
                    <form onSubmit={postComment}>
                    <input type="text" className="Comments__input" placeholder="Add a comment..."
                    onChange={(e)=>setState(e.target.value)}  value={state} />
                    </form>
                :''
            }
                </div>
            </div>

    )
}

export default Comments
