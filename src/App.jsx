import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import KitchenRemodeling from './components/KitchenRemodeling'
import BathroomRemodeling from './components/BathroomRemodeling'
import AduConstruction from './components/AduConstruction'
import CommercialServices from './components/CommercialServices'
import ConcreteServices from './components/ConcreteServices'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/bathroom-remodeling" element={<BathroomRemodeling />} />
          <Route path="/adu-construction" element={<AduConstruction />} />
          <Route path="/commercial-services" element={<CommercialServices />} />
          <Route path="/concrete-services" element={<ConcreteServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
