import React from "react";
function Collectable(){
    return(

        <div className="collectable">

            <div className="owner_deets">

                <img src={require("./media/lazy_grizzy.jpeg")} alt="img" id="owner_dp" />

                <div className="c_deets">

                    <span className="type">Bored Ape</span>
                    <span className="username">@ameen_d_great</span>
                    
                </div>

            </div>

            <span className="worth">125.07K ETH</span>

        </div>
    )
};

export default Collectable;