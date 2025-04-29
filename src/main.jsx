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
const AboutUs = lazy(() => import('./AboutUs'));
const Blogs = lazy(() => import('./Blogs'));
const BlogsDetails = lazy(() => import('./BlogsDetails'));
const Portfolio = lazy(() => import('./Portfolio'));
const Portfolio1 = lazy(() => import('./Portfolio1'));
const Projects = lazy(() => import('./Projects'));
import NotFound from "./NotFound";

import PageLoadAnimation from './PageLoadAnimation';
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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio1" element={<Portfolio1 />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/:title" element={<BlogsDetails />} />
              
              {/* 🔴 Catch-all route for undefined paths */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
          
      </BrowserRouter>
    </PageLoadAnimation>
  </>
  )
}
ReactDOM.createRoot(root).render(<Data />);
