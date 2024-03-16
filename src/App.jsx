import React, { useState } from 'react'
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  var [a,b]=useState(69);
  return (
    <div>
    <Navbar />
    <Hero />
  </div>
  )
}

export default App