import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";


import App from './App.js'
import { CookiesProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 // <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
      <Routes>
     <Route path="/*" element={<App />} />
     
      </Routes>
      </CookiesProvider>
    </BrowserRouter>
 // </React.StrictMode>
);

