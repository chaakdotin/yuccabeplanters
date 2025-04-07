import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
gsap.registerPlugin(ScrollTrigger);
const root = document.getElementById("root");

const Data = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  // Use requestAnimationFrame to continuously update the scroll
 
  
  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

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
