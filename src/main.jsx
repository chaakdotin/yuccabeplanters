import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from 'lenis'
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Header from './Header';
import Page from './Page';
import Work from './Work';
import Services from './Services';
import OurActivities from './OurActivities';
import PageLoadAnimation from './PageLoadAnimation';
import Footer from './Footer';
import ContactUs from './Contact-us';

const root = document.getElementById("root");

const Data = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  return (
    <>
    <PageLoadAnimation>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<App />} />
              <Route path="/work" element={<Work />} />
              <Route path="/services" element={<Services />} />
              <Route path="/page" element={<Page />} />
              <Route path="/activities" element={<OurActivities />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
          <Footer />
      </BrowserRouter>
    </PageLoadAnimation>
  </>
  )
}
ReactDOM.createRoot(root).render(<Data />);
