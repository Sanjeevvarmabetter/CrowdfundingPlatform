import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Ethereum from './logo.svg';
import { ethers } from 'ethers';

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await accountChangedHandler(provider.getSigner());
      } catch (error) {
        setErrorMessage('Failed to connect wallet');
      }
    } else {
      setErrorMessage('Metamask Not installed');
    }
  };

  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
    await getUserBalance(address);
  };

  const getUserBalance = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    setUserBalance(ethers.utils.formatEther(balance));
  };

  return (
    <div>
      <Button
        style={{ background: defaultAccount ? '#A5CC82' : 'white' }}
        onClick={connectWalletHandler}
      >
        Connect Wallet
      </Button>
      {defaultAccount && (
        <div>
          <h4 className="walletAddress">Address: {defaultAccount}</h4>
          <div className="balanceDisplay">
            <h3>Wallet Amount: {userBalance}</h3>
          </div>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default WalletCard;
