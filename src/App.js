import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ChatwAI from './pages/ChatwAI';
import Blogs from './pages/Blogs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="chatwAI" element={<ChatwAI/>} />
          <Route path="blogs" element={<Blogs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
