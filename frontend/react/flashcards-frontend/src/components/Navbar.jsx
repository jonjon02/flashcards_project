import { useState } from "react";
import './Navbar.css'

function Navbar() {
    return (
    <nav className="navbar">  
        <div className="logo"> Flashcards</div>
        <ul className="nav-left">
            <li className="nav-card">🏠 Home</li>
            <li className="nav-card">📚 Library</li>
            <li className="nav-card">👨‍💻 Learn</li>
            <li className="nav-card">🔭 About</li>
        </ul>
    </nav>
    );
}

export default Navbar