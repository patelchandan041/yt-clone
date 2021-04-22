import React , { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom';

function Header() {
    const [ inputSearch , setInputSearch ] = useState("")
    return (
        <div className='header'>

            <div className='header__left'>
            <MenuIcon />
            <Link to="/">
            <img 
            className='header__logo'
            src="https://pngimg.com/uploads/youtube/youtube_PNG13.png" alt="yt logo" />
            </Link>
            </div>
            
            <div className="header__input" >
             <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
             <Link to={`/search/${inputSearch}`}>
             <SearchIcon className='header__inputButton' />
             </Link>
            </div>
            
            <div className='header__icons'> 
            <VideoCallIcon className='header__icon' />
            <AppsIcon className='header__icon' />
            <NotificationsIcon className='header__icon' />
            <Avatar className='header__icon' alt="chandan patel"
            src='https://scontent.fbom12-1.fna.fbcdn.net/v/t1.0-9/46516918_2219106518366379_8586524753039196160_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=VIEnPG8PN8gAX92x0he&_nc_ht=scontent.fbom12-1.fna&oh=949947d3068811dd0f4729ce31461df9&oe=607BC5E2' />
            </div>
           
            </div>
    )
}

export default Header;
