import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   
    <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/pricing" element={<PricingPage/>} />
        <Route path="/support" element={<SupportPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
   </React.StrictMode>
    
    
);


