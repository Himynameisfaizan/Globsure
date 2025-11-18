import "./App.css";
import About from "./components/about-page/About";
import Home from "./components/home-page/Home";

import { Route, Routes } from "react-router-dom";
import Insurance from "./components/insurnce-page/Insurance";
import Claim from "./components/claim-page/Claim";
import Contact from "./components/contact-page/Contact";
import Topbar from "./components/header footer/Topbar";
import { Header } from "./components/header footer/Header";
import { Footer } from "./components/header footer/Footer";
function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
