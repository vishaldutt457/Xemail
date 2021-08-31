import React from 'react';
import './Feed.css';
import { auth, GoogleAuth } from './firebase';


function Feed() {

    const signIn = () => {
       auth.signInWithPopup(GoogleAuth)
    }
    return (
        <div className="feed">
            <h1>Single email verification</h1>
        
        <div className="feed_center">
            <h3>Enter your email id below and check the results!</h3>
        <div className="feed_input">
        <input type="text" placeholder="Enter Email..."/>
        
        <button onClick={signIn}>Verify</button>
            </div>    
        
        </div>
        </div>
    )
}

export default Feed
