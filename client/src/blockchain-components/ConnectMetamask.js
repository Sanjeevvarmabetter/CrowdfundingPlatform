import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ethers } from 'ethers';

const WalletCard = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts) => {
          if (accounts.length > 0) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            accountChangedHandler(provider.getSigner());
          }
        });
    }
  }, []);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        accountChangedHandler(provider.getSigner());
      } catch (error) {
        setErrorMessage('Failed to connect wallet');
      }
    } else {
      setErrorMessage('Metamask Not installed');
    }
  };

  const accountChangedHandler = async (signer) => {
    try {
      const address = await signer.getAddress();
      setDefaultAccount(address);
      await getUserBalance(address);
    } catch (error) {
      setErrorMessage('Failed to get account details');
    }
  };

  const getUserBalance = async (address) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(address);
      setUserBalance(ethers.utils.formatEther(balance));
    } catch (error) {
      setErrorMessage('Failed to get balance');
    }
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
            <h3>Wallet Amount: {userBalance} ETH</h3>
          </div>
        </div>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default WalletCard;
