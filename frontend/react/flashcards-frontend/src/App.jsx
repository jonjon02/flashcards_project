import { useState } from 'react'
import Navbar from './components/navbar'
import Library from './components/Library'

export default function App() {
  return (
    <>    
    <div>
       <Navbar />
    </div>
    <div>
      <Library />
    </div>
    </>
  );
}