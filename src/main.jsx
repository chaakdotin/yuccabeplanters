import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './index.css'

import Header from './Header';
const App = lazy(() => import('./App'));
const Page = lazy(() => import('./Page'));
const Work = lazy(() => import('./Work'));
const Services = lazy(() => import('./Services'));
const OurActivities = lazy(() => import('./OurActivities'));
const ContactUs = lazy(() => import('./Contact-us'));
import PageLoadAnimation from './PageLoadAnimation';
import Footer from './Footer';
const root = document.getElementById("root");

const Data = () => {

  const lenis = new Lenis({
    // lerp: 0.1, // Add slight smoothing for better ScrollTrigger compatibility
    // duration: 1, // Adjust duration for minimal smoothing
    smooth: true, // Enable smooth scrolling
    wheelMultiplier: 0.2,
  });
  
  // Sync Lenis with GSAP's ticker for better performance
  lenis.on('scroll', () => ScrollTrigger.update());
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  gsap.registerPlugin(ScrollTrigger);
  // Initialize a new Lenis instance for smooth scrollin
  // Disable lag smoothing in GSAP to prevent any delay in scroll animations

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
