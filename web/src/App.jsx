import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import BuyPage from './pages/BuyPage'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' && <Home />}
      {currentPage === 'buy' && <BuyPage />}
      
      <Footer />
      {/* Floating Action Buttons */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        zIndex: 100
      }}>
        {/* Call Now */}
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#2563eb', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', cursor: 'pointer', color: 'white'
        }} title="Call Now">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>

        {/* WhatsApp */}
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#25D366', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', cursor: 'pointer', color: 'white'
        }} title="WhatsApp">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </div>

        {/* Chatbot */}
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#fff', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', cursor: 'pointer', overflow: 'hidden', position: 'relative'
        }} title="Chat with us">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="Chat Assistant" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute', bottom: '5px', right: '5px', width: '12px', height: '12px', 
            backgroundColor: '#cc0000', borderRadius: '50%', border: '2px solid white'
          }}></div>
        </div>
      </div>
    </div>
  )
}

export default App
