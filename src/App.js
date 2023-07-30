import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ChatwAI from './pages/ChatwAI';
import Blogs from './pages/Blogs';
import CommonTopic from './pages/CommonTopic'; // Thêm import cho CommonTopic
import GenzPeerTopic from './pages/GenzPeerTopic'; // Thêm import cho GenzPeerTopic
import FormComponent from './components/FormComponent';
import Blog1 from './pages/Blog1';
function App() {
  // Check if the user is logged in from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <Routes>
        {/* Display FormComponent if the user is not logged in */}
        {!isLoggedIn && <Route path="/" element={<FormComponent />} />}

        {/* Main Content under /main */}
        <Route path="/main" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="chatwAI" element={<ChatwAI />} />
          <Route path="blogs" element={<Blogs />}>
            <Route index element={<Blogs />} />
            <Route path="common" element={<CommonTopic />} /> {/* Liên kết đến CommonTopic */}
            <Route path="genz-peer-peersure" element={<GenzPeerTopic />} /> {/* Liên kết đến GenzPeerTopic */}
            <Route path="blog1" element={<Blog1 />} /> {/* Đường dẫn cho trang Blog1.js */}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
