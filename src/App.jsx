import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import SignUp from './SignUp';
import LoginWithGoogleButton from './Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="login" element={<LoginWithGoogleButton />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
