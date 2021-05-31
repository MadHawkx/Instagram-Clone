import React from 'react'
import './Navbar.css'
import {FaSistrix,FaTelegramPlane, FaRegCompass,FaRegHeart} from 'react-icons/fa';
import {MdHome} from 'react-icons/md';
import {ContextProvider} from '../Global/Context';
const shiftSearchLeft=(e)=>{
    console.log("");
}


const Navbar = () => {
    const {openModel,user,loader,logout}=React.useContext(ContextProvider);
    //console.log(model);
    const loginForm=()=>{
        openModel();
    } 

    const dropDown=()=>{
        // const list=document.getElement
        const getDrop=document.getElementsByClassName('dropDown')[0]
        // if(e.target.parentNode.children[1].classList[0]==="dropDownList"){
        //     e.target.parentNode.children[1].className="dropdown";
        // }
        // else{
        //     e.target.parentNode.children[1].className="dropDownList";
        // }
        //if(getDrop.)
       if(getDrop.getElementsByClassName('select')[0]){
            const drop=getDrop.getElementsByClassName('select')[0];
            if(drop.classList[1]==="dropDownList"){
                drop.classList.remove("dropDownList");
                drop.classList.add("dropdown");
            }
            else{
                 drop.classList.add("dropDownList");
                 drop.classList.remove("dropdown");
            }
       }
    }

    const isLoggedIn=()=>{
        return !loader?(!loader&&user?
        <p className="Navbar__last--login"><span onClick={dropDown} className="Navbar__user--avatar">
                {user.displayName[0]}
                </span> </p>:
        (<p className="Navbar__last--login" onClick={loginForm}>Register/Login</p>)):
        ("...")
    }

    const logoutForm=()=>{
        const getDrop=document.getElementsByClassName('dropDown')[0]
        const drop=getDrop.getElementsByClassName('select')[0];
            if(drop.classList[1]!=="dropDownList"){
                drop.classList.add("dropDownList");
                drop.classList.remove("dropdown");
            }
       logout();
    }
    return (
        <>
        <div className="Navbar__main">
            <div className="Navbar__first">
                <div className="Navbar__first__logo">
                    <img src="https://raw.githubusercontent.com/shakilkhan12/Y-InstagramClone/master/public/images/instagramLogo.png" alt=""/>
                </div>
            </div>
            <div className="Navbar__middle">
                <div className="Navbar__middle-search">
                    <input className="Navbar__search" type="text" placeholder="Search" onChange={shiftSearchLeft} />
                    <FaSistrix className="Navbar__search--icon" />
                </div>
            </div>
            <div className="Navbar__last">
                <li>
                    <MdHome className="Navbar__last--icons"/>
                </li>
                <li>
                    <FaTelegramPlane className="Navbar__last--icons"/>
                </li>
                <li>
                    <FaRegCompass className="Navbar__last--icons"/>
                </li>
                <li>
                    <FaRegHeart className="Navbar__last--icons"/>
                </li>
                <li>
                    {isLoggedIn()}
                </li>
            </div>
        </div>
         <div className="dropDown">
        <div className="select dropDownList">
            <div className="dropdown-content">
            <span onClick={logoutForm}>Logout</span>
            </div>
        </div>
        </div>
        </>
    )
}


export default Navbar;
