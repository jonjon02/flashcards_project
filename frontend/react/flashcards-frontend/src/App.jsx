import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Library from './assets/pages/Library';
import Home from './assets/pages/Home';
import Notes from './assets/pages/Notes';
import Deck from './assets/pages/Deck';

export default function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/notes" element={<Notes/>}/>
            <Route path="/library/deck/:deckId" element={<Deck/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}