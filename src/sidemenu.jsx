import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLight, faShoppingBag ,faPaintBrush, faGear, faChartSimple, faPhone, faMoneyBill} from '@fortawesome/free-solid-svg-icons';


function Sidemenu(){
    return(
        <nav className="sidemenu">

            <ul id="topside">
                <li><a href=""><img src={require("./media/dashboard.png")} alt="" id="icon" />Dashboard</a></li>
                <li><a href=""><FontAwesomeIcon id="icon" icon={ faShoppingBag} />Market</a></li>
                <li><a href=""><FontAwesomeIcon id="icon" icon={faPaintBrush}/>My NFTs</a></li>
                <li><a href=""><FontAwesomeIcon id="icon" icon={faMoneyBill}/> Transactions</a></li>
            </ul>
            

            <ul id="bottomside">
                <li> <a href=""><FontAwesomeIcon id="icon" icon={faChartSimple} />Analytics</a></li>
                <li><a href=""><FontAwesomeIcon id="icon" icon={faGear} /> Settings</a></li>
                <li><a href=""><FontAwesomeIcon id="icon" icon={faPhone} />Support</a></li>
            </ul>
            
        </nav>
    );
};

export default Sidemenu ;