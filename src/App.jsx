import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import SignUp from './SignUp';
import LoginWithGoogleButton from './Login';
import UserProfile from './user_profile';
import ForgetPwd from './ForgetPwd';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginWithGoogleButton />} />
          <Route path="/forgetpwd" element={<ForgetPwd />} />
          <Route path='/user_profile' element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
