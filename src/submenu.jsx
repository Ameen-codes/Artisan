import React from "react";
import bg from '../src/media/bg.jpeg'
function Submenu(){
    const navstyle={
        
    }
    return(
        <nav id="submenu">
            <h1>Artisan</h1>

           <div className="search">
            
                {/* <img src={require("./media/bg.jpeg")} alt="search icon" /> */}
                
                <input type="search"  placeholder="search..."/>

            </div> 

            <div className="profile" id="flex">

                <img src={require("./media/notification.png")} alt="noti" />

                <img src={require("./media/dp.jpg")} alt="dp" id="dp"/>

                <span>John Doe <span>&#8964;</span> </span>
            </div>

        </nav>
    )
    
}

export default Submenu ;