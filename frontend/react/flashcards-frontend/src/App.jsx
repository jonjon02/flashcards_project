import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Library from './assets/pages/Library';
import Home from './assets/pages/Home';
import Learn from './assets/pages/Learn';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/learn" element={<Learn/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}