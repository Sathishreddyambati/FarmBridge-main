import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Farmer from './pages/Farmer'
import Buyer from './pages/Buyer'
import Listings from './pages/Listings'
import Transport from './pages/Transport'
import './styles.css'

function App(){
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>FarmBridge AI (Demo)</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/farmer">Farmer</Link>
            <Link to="/buyer">Buyer</Link>
            <Link to="/listings">Listings</Link>
            <Link to="/transport">Transport</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/farmer" element={<Farmer/>}/>
            <Route path="/buyer" element={<Buyer/>}/>
            <Route path="/listings" element={<Listings/>}/>
            <Route path="/transport" element={<Transport/>}/>
          </Routes>
        </main>
        <footer>
          <small>FarmBridge - Demo UI. Data is mock. Features: AI price prediction, buyer matching, transport booking (mock).</small>
        </footer>
      </div>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App/>)