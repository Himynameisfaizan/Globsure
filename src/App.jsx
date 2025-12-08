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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
