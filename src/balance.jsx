import React from "react";
function Balance (){
    return(
        <div className="balance">
            <h4>Total Balance</h4>
            <h1>122.00 ETH</h1>
            <h1>$42,234.00</h1>

            <div className="bal_nav">
                <button id="withdraw"><img src="" alt="btn" /> withdraw</button>
                <button id="send"><img src="" alt="btn" /> send</button>
                <button id="deposit"><img src="" alt="btn" /> deposit</button>
            </div>
        </div>
    )
}

export default Balance ;