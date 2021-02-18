import React from 'react'
import './Stories.css';
const Stories = () => {
    const [state]=React.useState([
        {id:1,image:'/images/wp2057612.png', name:'Lorem Ipsum'},
        {id:2,image:'/images/wallpapersden.com_kame-house-dragon-ball-z_3032x1706.jpg', name:'Lorem Ipsum'},
        {id:3,image:'/images/wp3873982-kids-see-ghosts-wallpapers.jpg', name:'Lorem Ipsum'},
        {id:4,image:'/images/wp1859934.jpg', name:'Lorem Ipsum'},
        {id:5,image:'/images/wallhaven-8oxmr2_1920x1080.png', name:'Lorem Ipsum'},
        {id:6,image:'/images/wallhaven-nk7e66_1920x1080.png', name:'Lorem Ipsum'},
        {id:7,image:'/images/wp6430810-your-name-anime-hd-wallpapers.jpg', name:'Lorem Ipsum'},
        {id:8,image:'/images/wallhaven-9m5r9k_1920x1080.png', name:'Lorem Ipsum'}
    ])


    return (
        <div className="Stories">
            {state.map(user=>(
            <div className="Stories__info" key={user.id}>
                <div className="Stories__img">
                    <span>
                        <img src={user.image} alt="hello"></img>
                    </span>
                </div>
                <div className="Stories__name">{user.name}</div>
            </div>         
            ))}
        </div>
    )
}

export default Stories
