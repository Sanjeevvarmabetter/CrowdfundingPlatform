import React, { Component } from 'react';
import FundingPage from './pages/FundingPage';
import Header from './components/Header';
import Footer from './components/Footer';
// import WalletCard from './blockchain-components/ConnectMetamask';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FundingPage />
        {/* <WalletCard /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
