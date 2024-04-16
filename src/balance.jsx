import React from "react";
function Balance (){
    return(
        <div className="balance">
            <h4>Total Balance</h4>
            <h1>122.00 ETH</h1>
            <h1>$42,234.00</h1>

            <div className="bal_nav">
                <button id="withdraw"><img src={require("./media/icons8-withdraw-53.png")} alt="btn" id="icon"/> withdraw</button>
                <button id="send"><img src={require("./media/icons8-send-50.png")} alt="btn" id="icon"/> send</button>
                <button id="deposit"><img src={require("./media/icons8-wallet-60.png")} alt="btn" id="icon"/> deposit</button>
            </div>
        </div>
    )
}

export default Balance ;