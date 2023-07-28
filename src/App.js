import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ChatwAI from './pages/ChatwAI';
import Blogs from './pages/Blogs';
import FormComponent from './components/FormComponent';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Display FormComponent first */}
        <Route path="/" element={<FormComponent />} />

        {/* Main Content under /main */}
        <Route path="/main" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="chatwAI" element={<ChatwAI />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
