import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import WalletCard from './blockchain-components/ConnectMetamask';

import FundingPage from './pages/FundingPage';
import Projects from './pages/Projects';
import './App.css';



function Home() {
  return(
    <div>
      <Header />
      <Footer />
    </div>
  );
}


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fundingpage" element={<FundingPage />} />
        <Route path="/avaliableprojects" element={<Projects />} />
      </Routes>
    </Router>
  )
}


export default App;
