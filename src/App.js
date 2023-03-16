import './App.css';
import React from 'react'
import {SecondaryMenu} from './components/SecondaryMenu'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={ <SecondaryMenu/>} />
        <Route path="about" element={ <h1>This is the about</h1>} />
        <Route path="contact" element={ <h1>Contact</h1> } />
      </Routes>
      

    </div>

  );
}

export default App;
