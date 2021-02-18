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

    const isLoggedIn=()=>{
        return !loader?(!loader&&user?
        <p className="Navbar__last--login">{user.displayName}/<span onClick={logoutForm}>logout</span></p>:
        (<p className="Navbar__last--login" onClick={loginForm}>Register/Login</p>)):
        ("...")
    }

    const logoutForm=()=>{
       logout();
    }
    return (
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
    )
}


export default Navbar;