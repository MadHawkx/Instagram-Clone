import React from 'react';
import './Model.css';


import {ContextProvider} from '../Global/Context';
import {AiFillCloseCircle} from 'react-icons/ai';

const Model = () => {
    const {model,closeModel,register,login}=React.useContext(ContextProvider);
    const ModelClose=()=>{
        closeModel();
    }
    const [state,setState]=React.useState({
        Register:true,
        Login:false
    })

    const [input, setInput]=React.useState({
        username:'',
        email:'',
        password:''
    })

    const openLogin=()=>{
        setState({
            ...state,
            Register:!state.Register,
            Login:!state.Login
       })
    }

    const handleInput=e=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
    }

    const registerUser=(e)=>{
        e.preventDefault();
        register(input);
        setInput({
            username:"",
            email:"",
            password:""
        })
    }

    const userLogin=(e)=>{
        e.preventDefault();
        login(input);
        setInput({
            username:"",
            email:"",
            password:""
        })
    }


    if(model){
        return (
            <div className="Model__main">
                <div className="Model__container">
                    <p className="Model__container--txt">Login/Register to Instagram</p>
                        <div>
                            <AiFillCloseCircle className= "Model__form--close" onClick={ModelClose}/>
                        </div>
                    {state.Register?
                    (<div className="Model__form">
                        <form onSubmit={registerUser}>
                            <div className="Model__form--group">
                            <img src="https://raw.githubusercontent.com/shakilkhan12/Y-InstagramClone/master/public/images/instagramLogo.png" alt=""></img>
                            </div>
                            <div className="Model__form--group">
                                <input type="text" name="username" className="Model__input" placeholder="Username..." onChange={handleInput} value={input.username} required/>
                            </div>
                            <div className="Model__form--group">
                                <input type="email" name="email" className="Model__input" placeholder="Email..." onChange={handleInput} value={input.email} required/>
                            </div>
                            <div className="Model__form--group">
                                <input type="password" name="password" className="Model__input" placeholder="Password..." onChange={handleInput} value={input.password} required/>
                            </div>  
                            <div className="Model__form--group">
                                <input type="submit" value="Register" className="btn btn-smart"/>
                            </div>
                            <div className="Model__form--group">
                                <span onClick={openLogin}>Already Have an account? Login!</span>
                            </div>
                        </form>
                    </div>)
                    :(<div className="Model__form">
                    <form onSubmit={userLogin}>
                        <div className="Model__form--group">
                        <img src="https://raw.githubusercontent.com/shakilkhan12/Y-InstagramClone/master/public/images/instagramLogo.png" alt=""></img>
                        </div>
                        <div className="Model__form--group">
                            <input type="email" name="email" className="Model__input" placeholder="Email..." onChange={handleInput} value={input.email} required/>
                        </div>
                        <div className="Model__form--group">
                            <input type="password" name="password" className="Model__input" placeholder="Password..." onChange={handleInput} value={input.password} required/>
                        </div>
                        <div className="Model__form--group">
                            <input type="submit" value="Login" className="btn btn-smart"/>
                        </div>
                        <div className="Model__form--group">
                            <span onClick={openLogin}>Create A new Account?</span>
                        </div>
                    </form>
                </div>)
    }
                    
                    
                    
                </div>
            </div>
        );
    }
    return("");
};



export default Model;
