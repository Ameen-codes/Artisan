import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown} from '@fortawesome/free-solid-svg-icons';
function Submenu(){
    return(
        <nav id="submenu">
            <h1>Artisan</h1>

            <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input type="search" placeholder="Search..." />
    </div> 

            <div className="profile" id="flex">

                <img src={require("./media/notification.png")} alt="noti" />

                <img src={require("./media/dp.jpg")} alt="dp" id="dp"/>

                <span id="flex">John Doe <span><FontAwesomeIcon icon={faAngleDown}/></span> </span>
            </div>

        </nav>
    )
    
}

export default Submenu ;