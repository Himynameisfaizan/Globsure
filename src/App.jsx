import "./App.css";
import About from "./components/about-page/About";
import Home from "./components/home-page/Home";

import { Route, Routes } from "react-router-dom";
import Claim from "./components/claim-page/Claim";
import Contact from "./components/contact-page/Contact";
import Topbar from "./components/header footer/Topbar";
import { Header } from "./components/header footer/Header";
import { Footer } from "./components/header footer/Footer";
import Health_insurance from "./components/insurnce-page/health/Health_insurance";
import General_inurance from "./components/insurnce-page/general/General_inurance";
import ScrollToTop from "./components/header footer/ScrollToTop";
import Vehicle_insurance from "./components/insurnce-page/vehicle/Vehicle_insurance";
import Testing from "./components/testing/Testing";
import Blog_one from "./components/blog-section/Blog_one";
import Blog_two from "./components/blog-section/Blog_two";
import Blog_three from "./components/blog-section/Blog_three";
import Blog_four from "./components/blog-section/Blog_four";
import Blog_five from "./components/blog-section/Blog_five";
function App() {
  return (
    <>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health_insurance" element={<Health_insurance />} />
        <Route path="/vehicle_insurance" element={<Vehicle_insurance />} />
        <Route path="/general_insurance" element={<General_inurance />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/health-insurance-essential" element={<Blog_one />} />
        <Route path="/car-insurance-mistakes" element={<Blog_two />} />
        <Route path="/term-vs-life-insurance" element={<Blog_three />} />
        <Route path="/how-to-claim" element={<Blog_four />} />
        <Route path="/retirement-planning" element={<Blog_five />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
