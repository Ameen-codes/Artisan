import React from "react";

const HotCard = (props) =>{
    return(
        
        <div className="HotCard">

            <div className="owner_deets">
                <span>
                    <img src={props.pp} alt="img" id="dp" />
                </span>

                <span>
                    <h4 >{props.name}</h4>

                    <h5>{props.username}</h5>
                </span>
            </div>

            <div className="bid_nft">

                <img src={props.nft} alt="nft" id="bid_nft"/>

            </div>

            <div className="description">
                <span>{props.description}</span>
                <span>{props.tag}</span>
            </div>

            <div className="bid_deets">

                <div className="grid_1">

                    <h5>current bid</h5>

                    <h4><img src={props.network} id="network" alt="img" /> 4.6 ETH</h4>

                </div>

                <div className="grid_2">

                    <h5>Ending In</h5>

                    <h4>12h 21m</h4>

                </div>
            </div>
        </div>
    )
}

export default HotCard ;