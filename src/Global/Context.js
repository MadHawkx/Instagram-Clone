import React, {createContext} from 'react'
import {auth, db ,storage} from '../config';
import firebase from "firebase";
export const ContextProvider=createContext();

const Context = (props) => {
    const [model,setModel]=React.useState(false);
    const [user,setUser]=React.useState(null);
    const [loader,setLoader]=React.useState(true);
    const[posts,setPosts]=React.useState([]);
    const openModel=()=>{
        setModel(true);
    }
    const closeModel=()=>{
        setModel(false);
    }
    // async since FB works asynchronously
    const register=async(user)=>{
        const {username, email, password}=user;
        try{
        const temp=await auth.createUserWithEmailAndPassword(email,password)
        temp.user.updateProfile({displayName:username})
        setModel(false);
        }catch(e){
            alert(e);
        }
    }
    const login=async(user)=>{
        const {email, password}=user;
        try{
        const temp=await auth.signInWithEmailAndPassword(email,password);
        //console.log(temp);
        setModel(false);
    }catch(e){
        alert(e);
    }
    }

    const logout=()=>{
        auth.signOut().then(() => {
            alert("Logged out");
            setUser(null);
          }).catch((e) => {
            alert(e);
          });
    }

    const addComment=data=>{
        const {id,comment}=data;
        db.collection("posts").doc(id).collection("comments").add({
            comment,
            username:user.displayName,
            currentTime:firebase.firestore.FieldValue.serverTimestamp()
        });

    } 

    React.useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setUser(user);
            setLoader(false);
        })
        //Fetch posts from firebase--Onsnapshot below helps in preventing refreshing browser Real time db access
        db.collection("posts").orderBy("currentTime","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(temp=>(
                {
                    id:temp.id,
                    caption:temp.data().caption,
                    image:temp.data().image,
                    username:temp.data().username,
                }
            )))
        })
    })

    const create=data=>{
        const{caption,image}=data; 
        const upload=storage.ref(`images/${image.name}`).put(image);
        
        upload.on("state_changed",(snapshot)=>{
        // We can manage the progress of upload process here, here snapshot gives us info about image upload
        let progress=(snapshot.bytesTransferred / snapshot.totalBytes )*100;
        console.log(progress);
        },(e)=>{
            console.log(e);
        },()=>{
            //In case of success
            storage.ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                        db.collection("posts").add({
                            caption,
                            image:url,
                            username:user.displayName,
                            currentTime:firebase.firestore.FieldValue.serverTimestamp(),
                        })
                    })
           
        })
    }
    
    return (
        <ContextProvider.Provider value={{model,openModel,closeModel,register,login,user,loader,logout,create,posts,addComment}} >
            {props.children}
        </ContextProvider.Provider> 
    )
}

export default Context
//Here props.children are the child components like Navbar component etc
//See app.js we have wrapped our components with <Context> and those are its children in {props.children}