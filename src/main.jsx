import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import lenis from "./LenisWrapper";
import Header from './Header';
const App = lazy(() => import('./App'));
const Collections = lazy(() => import('./Collections'));
const Explore = lazy(() => import('./Explore'));
const Services = lazy(() => import('./Services'));
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
              <Route path="/explore" element={<Explore />} />
              <Route path="/services" element={<Services />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/contact" element={<ContactUs />} />
            </Route>
          </Routes>
          <Footer />
      </BrowserRouter>
    </PageLoadAnimation>
  </>
  )
}
ReactDOM.createRoot(root).render(<Data />);
