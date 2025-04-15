import React, {lazy} from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import lenis from "./LenisWrapper";

import Header from './Header';
const App = lazy(() => import('./App'));
const Collection = lazy(() => import('./Collections'));
const Work = lazy(() => import('./Work'));
const Services = lazy(() => import('./Services'));
const OurActivities = lazy(() => import('./OurActivities'));
const ContactUs = lazy(() => import('./Contact-us'));
import PageLoadAnimation from './PageLoadAnimation';
import Footer from './Footer';
const root = document.getElementById("root");

const Data = () => {
  <lenis />
  return (
    <>
    <PageLoadAnimation>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<App />} />
              <Route path="/work" element={<Work />} />
              <Route path="/services" element={<Services />} />
              <Route path="/collections" element={<Collection />} />
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
