import React, {lazy} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Lenis from "./LenisWrapper";
import Header from './Header';
const App = lazy(() => import('./App'));
const Collections = lazy(() => import('./Collections'));
const Explore = lazy(() => import('./Explore'));
const Services = lazy(() => import('./Services'));
const ContactUs = lazy(() => import('./Contact-us'));
const AboutUs = lazy(() => import('./AboutUs'));
const Blogs = lazy(() => import('./Blogs'));
const BlogsDetails = lazy(() => import('./BlogsDetails'));
const BlogsDetails1 = lazy(() => import('./BlogsDetails1'));
const BlogsDetails2 = lazy(() => import('./BlogsDetails2'));
const BlogsDetails3 = lazy(() => import('./BlogsDetails3'));
const BlogsDetails4 = lazy(() => import('./BlogsDetailss4'));
const BlogsDetails5 = lazy(() => import('./BlogsDetails5'));
const MaxEstate = lazy(() => import('./max-estate'));
const Portfolio = lazy(() => import('./Portfolio'));
const Portfolio1 = lazy(() => import('./Portfolio1'));
const Parliamentofindia = lazy(() => import('./parliament-of-india'));
const Jamnagar = lazy(() => import('./jamnagar'));
const Indiragandhiinternationalairportt1 = lazy(() => import('./indira-gandhi-international-airport-t1'));
const Residentialspace = lazy(() => import('./residential-space'));
const Projects = lazy(() => import('./Projects'));
import NotFound from "./NotFound";

import PageLoadAnimation from './PageLoadAnimation';
const root = document.getElementById("root");

const Data = () => {
  <Lenis />
  return (
    <>
    <PageLoadAnimation>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<App />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-products" element={<Collections />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio1" element={<Portfolio1 />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/max-estate" element={<MaxEstate />}></Route>
              <Route path="/top-10-stylish-planters-to-elevate-your-home-decor-in-2025" element={<BlogsDetails />} />
              <Route path="/terrace-garden-ideas-how-to-style-your-outdoors-with-yuccabe-planters" element={<BlogsDetails1 />} />
              <Route path="/how-plants-improve-mental-health-and-why-your-home-needs-more-greenery" element={<BlogsDetails2 />} />
              <Route path="/the-ultimate-guide-to-choosing-the-right-planter-for-every-space" element={<BlogsDetails3 />} />
              <Route path="/why-designer-pots-are-the-new-statement-pieces-for-luxury-homes" element={<BlogsDetails4 />} />
              <Route path="/balcony-makeover-ideas-using-yuccabe-s-modern-planter-designs" element={<BlogsDetails5 />} />

              <Route path="/parliament-of-india" element={<Parliamentofindia />} />
              <Route path="/jamnagar" element={<Jamnagar />} />
              <Route path="/indira-gandhi-international-airport-t1" element={<Indiragandhiinternationalairportt1 />} />
              <Route path="/residential-space" element={<Residentialspace />} />
              {/* 🔴 Catch-all route for undefined paths */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          
      </BrowserRouter>
    </PageLoadAnimation>
  </>
  )
}
ReactDOM.createRoot(root).render(<Data />);
