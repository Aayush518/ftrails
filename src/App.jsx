import React, { useState } from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  var [a,b]=useState(69);
  return (
    <div>
    <Navbar />
    <Hero />
    <Footer />
  </div>
  )
}

export default App