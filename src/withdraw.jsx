import React, { useState,useEffect } from 'react';
import Web3 from 'web3';

function WithdrawFunds({ account }) {
    const sepoliaRPC = 'https://sepolia.io/rpc';
    const web3 = new Web3(sepoliaRPC)
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');

  const handleWithdraw = async () => {
    try {
      

      // Convert withdrawal amount to Wei
      const amountInWei = web3.utils.toWei(withdrawAmount,'ether');

      // Send transaction
      const transaction = await web3.eth.sendTransaction({
        from: account,
        to: recipientAddress,
        value: amountInWei,
      });

      setTransactionHash(transaction.transactionHash);
    } catch (error) {
      console.error('Error withdrawing funds:', error);
    }
  };

  return (
    <div>
      {/* <h2>Withdraw Funds</h2>
      <label>
        Withdraw Amount (ETH):
        <input type="number" value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} />
      </label>
      <label>
        Recipient Address:
        <input type="text" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
      </label>
      <button onClick={handleWithdraw}>Withdraw</button>
      {transactionHash && (
        <p>
          Transaction submitted. Transaction Hash: <a href={`https://etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">{transactionHash}</a>
        </p>
      )} */}
    </div>
  );
}

export default WithdrawFunds;
