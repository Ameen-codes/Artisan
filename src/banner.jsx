import React from "react";
import grizzy from '../src/media/bg.jpeg'
const Banner = (props) => {
    return(
        

        <div className="banner">

            <div className="overview">

                <div id="banner_img">

                    <img src={require("./media/grizzy.jpeg")} alt="banner_img" id="banner_img"/>

                </div>

                <div id="overview_deets">

                    <div id="user">

                        <img src={require("./media/dp_3.jpg")} alt="dp" id="dp" />

                        <span>

                            <h4>John Doe</h4>
                            <h5>@johnnydoe</h5>

                        </span>
                        
                    </div>

                    <div id="nft_type">

                        <h4>3D-nft-collection</h4>

                        <h4>#6868</h4>

                    </div>

                    <div id="balance">

                        <span>

                            <img src={require("./media/btc_2.png")} alt="img" id="network" />

                            <h3>5.6 BTC</h3>

                        </span>

                        <span>

                            <h4>$14563</h4>
                            
                        </span>
                        
                    </div>

                    <div id="options">

                        <button>View Artwork</button>

                        <button>Place Bid</button>
                        
                    </div>
                    
                </div>

            </div>

        </div>
        
        
    );
};

export default Banner ;