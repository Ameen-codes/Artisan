import React from "react";

function Header(){
    
    return(
        <nav id="top_nav">
            
            <h1>Artisan</h1>
            
            <ul>
                <li><a href="">Resources</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Market</a></li>
                <li><a href="">Learn More</a></li>
            </ul>

            <span id="cw"> 

                <img src={require("./media/flash.png")} alt="img" /> 

                <a href="">Connect Wallet</a> 

            </span>

        </nav>
    )
}

export default Header ;