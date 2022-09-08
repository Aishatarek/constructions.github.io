import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import ContactUs from "./ContactUs";
import Projects from "./Projects";
import Groups from "./Groups";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])
  return (
    <BrowserRouter>
      {loading ?
        <div className="preloaderr">
          <ScaleLoader color={'#f87765'} loading={loading} height={50} margin={5} />
        </div> :
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Groups" element={<Groups />} />

          </Routes>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
