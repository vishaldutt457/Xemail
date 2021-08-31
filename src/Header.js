import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./features/useSlice";
import {auth} from './firebase';



function Header() {
    const { user } = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(()=> {
            dispatch(logout());
        })

    };

    return (
        <div className="header">
            <div className="header_left">
            <h1>X-Email Verify</h1>
            <p>Enhance your Reach</p>
            </div>
            <div className="header_middle">
            <input type="text" placeholder="Search for..."/>
            <SearchIcon /> 
            </div>

            <div className="header_right">
            <NotificationsIcon />
            <MailOutlineIcon />
            </div>

            <div className="header_profile">
            <h3>{user?.displayName}</h3>
            <Avatar
          src={user?.photoUrl}
          onClick={signOut}/>
            </div>
          
        </div>
    )
}

export default Header
