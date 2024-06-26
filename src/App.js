import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './buyer/Home3';
import Home4 from './landlord/Home4';
import Home5 from './buyerhome/Home5';
import Trial from './pages/Trial';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignUp2 from './pages/SignUp2';
import LogIn from './pages/LogIn';


import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: 'ease-out-cubic' });
  }, []);

  useDocTitle("UrbanGreens");

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newhome" element={<Home2 />} />
          <Route path="/buyer" element={<Home3 />} />
          <Route path="/buyerhome" element={<Home5 />} />
          <Route path="/landlord" element={<Home4 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;

