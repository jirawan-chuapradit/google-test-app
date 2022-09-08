import React from 'react'
import "./Home.css"
import googleLogo from '../images/logo_google.png'

function Home() {
    return (
        <div className="container">
            <img src={googleLogo} alt="Google" className="logo"></img>
            <input className="search" id="input" type="search" autocomplete="off" spellcheck="false"  placeholder="Search Google or type a URL"></input>
        </div>
       
    )
}

export default Home
