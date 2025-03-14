import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Header from './Header';
import Page from './Page';
import Work from './Work';
import Services from './Services';
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Header />}>
        <Route index element={<App />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/page" element={<Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
