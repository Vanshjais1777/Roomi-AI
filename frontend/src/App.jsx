import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadBlueprint from './pages/UploadBlueprint';
import DesignSuggestions from './pages/DesignSuggestions';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';

const App = () => {  
  return (
    <div>
        <Router>
          <Routes>
            {/* Define Routes for your pages */}
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/uploadBp" element={<UploadBlueprint />} />
            <Route path="/designsugg" element={<DesignSuggestions />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            {/* Catch-all route for 404 */}
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
