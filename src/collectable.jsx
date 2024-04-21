import React from "react";
const Collectable = (props) => {
    return(

        <div className="collectable">

            <div className="owner_deets">

                <img src={props.C_img} alt="img" id="owner_dp" />

                <div className="c_deets">

                    <span className="type">{props.C_type}</span>
                    <span className="username">@{props.C_username}</span>
                    
                </div>

            </div>

            <span className="worth">{props.C_worth} ETH</span>

        </div>
    )
};

export default Collectable;