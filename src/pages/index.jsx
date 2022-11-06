import React from 'react'
import Navbar from "../components/common/navbar";
import Footer from "../components/Footer";
import Values from "../components/Values";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Hero from "../components/Hero";

function Index () {
  return (
          <div>
              <Hero/>
              <Values/>
              <Features/>
              <HowItWorks/>
          </div>
  )
}

export default Index
