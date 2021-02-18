import React from 'react'
import {ContextProvider} from '../Global/Context';


const Sidebar = () => {
    const {loader,user}=React.useContext(ContextProvider);
    const username=!loader&&user?user.displayName:'';
    return (
        <div className="Sidebar">
            {!loader && user &&username!=null ? 
            <div className="Sidebar__user">
            <div className="Sidebar__user--avatar">
                {username[0]}
            </div>
            <div className="Sidebar__user--name">
                {username}
            </div>
        </div>    
        :''
        }
        <div className="Sidebar__list">
            <h3>Suggestions for you</h3>
            <div className="Sidebar__list--user">
            </div>
        </div>            
        </div>
    )
}

export default Sidebar
