import React from 'react';
// import './home.css' ;
function Home(){
    return(
        <div id="homePage-wrapper" >
            <div id="NavBar">
                <div id="nav-right">
                    <img src="assets/pixil-frame-0.png" id="logo" alt="logo"/>
                </div> 
                <div id="nav-left">
                    <a>Discover</a>
                    <a>Help</a>
                    <button class='butt'>Sign In</button>
                </div>
            </div>
            
            <div id='yo'>
                <img src='assets/rand1.png' id='rand' alt='ranms'/><center><div id="line"><h1>Get Rewarded to SAVE!</h1>
                        <button class='butt'>Join Us</button>            
            </div></center>
                <img src='assets/rand2.png' id='rand' alt='ranms'/>
            </div>
            
        </div>
    )
}

export default Home;