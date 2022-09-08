import React from 'react'
import "./Home.css"
import googleLogo from '../images/logo_google.png'

function Home() {
    const search = (event)=>{
        console.log(event.target.value)
    }
    return (
        <div className="container">
            <img src={googleLogo} alt="Google" className="logo"></img>
            <input className="search" id="input" type="search"  placeholder="Search Google or type a URL" onChange={search}></input>
        </div>
       
    )
}

export default Home
