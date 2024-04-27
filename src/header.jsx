import React, { useState } from "react";
import WithdrawFunds from "./withdraw";

function Header() {
  const [accounts, setAccounts] = useState([]);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("MetaMask not installed");
    }
  };
  return (
    <nav id="top_nav">
      
      <h1>Artisan</h1>

      <ul>
        <li>
          <a href="">Resources</a>
        </li>
        <li>
          <a href="">Portfolio</a>
        </li>
        <li>
          <a href="">Market</a>
        </li>
        <li>
          <a href="">Learn More</a>
        </li>
      </ul>
      {accounts.length >= 1 &&
        accounts.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}

      <WithdrawFunds account={accounts[1]} />
       
        <button id="cw" onClick={connectMetaMask}> 
        <img src={require("./media/flash.png")} alt="img" /> Connect Wallet
        
        </button>
      
    </nav>
  );
}

export default Header;
