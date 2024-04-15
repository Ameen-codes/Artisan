import React from "react";
import Collectable from "./collectable";
function TopCard(){
    return(
        <>
        <h3>Top Collections</h3>
        <div className="top_b">

            <Collectable></Collectable>
            <Collectable></Collectable>
            <Collectable></Collectable>
            <Collectable></Collectable>
            <Collectable></Collectable>
            
        </div>
        </>
    )
}

export default TopCard ;