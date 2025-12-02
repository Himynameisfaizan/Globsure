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
import Vehical_insurance from "./components/insurnce-page/vehical/Vehical_insurance";
import General_inurance from "./components/insurnce-page/general/General_inurance";
function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health_insurance" element={<Health_insurance />} />
        <Route path="/vehical_insurance" element={<Vehical_insurance />} />
        <Route path="/general_insurance" element={<General_inurance/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
