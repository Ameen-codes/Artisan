import React from "react";
import Collectable from "./collectable";
function TopCard(){
    return(
        <>
        <h3>Top Collections</h3>
        <div className="top_b">

            <Collectable
            C_img={require("./media/lazy_grizzy.jpeg")}
            C_type={"Lazy Grizzy"}
            C_username={"ameen_d_great"}
            C_worth={"120K"}
            />

            <Collectable
            C_img={require("./media/faceless_clone.jpeg")}
            C_type={"Faceless Clone"}
            C_username={"topboy"}
            C_worth={"50K"}
            />   

            <Collectable
            C_img={require("./media/Ide.jpeg")}
            C_type={"Ide"}
            C_username={"Makima"}
            C_worth={"90K"}
            />

            <Collectable
            C_img={require("./media/earlyman.jpeg")}
            C_type={"Early Man"}
            C_username={"Mad Max"}
            C_worth={"790K"}
            />

            <Collectable
            C_img={require("./media/black-maska-neon-anonim-chernii-109917.jpeg")}
            C_type={"Neon Mask"}
            C_username={"pabloman"}
            C_worth={"26K"}
            /> 
        </div>
        </>
    )
}

export default TopCard ;