import React, { useState } from 'react';

import { MapPin, Phone, Search, Mic, User } from 'lucide-react';

const Header = ({ onNavigate, currentPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="container top-bar-content">
            <div className="top-bar-item">
              <MapPin size={16} />
              <span>Bangalore</span>
            </div>
            <div className="top-bar-item">
              <Phone size={16} />
              <span>+91 98450 44779</span>
            </div>
          </div>
        </div>
        
        <div className="main-header">
          <div className="container main-header-content" style={{ flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <div className="flex items-center" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="logo-container" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <img 
                  src="/utrust_logo.png" 
                  alt="U Trust" 
                  style={{ height: '40px', objectFit: 'contain' }} 
                />
              </div>
              
              <nav style={{ display: 'flex', gap: '2rem', marginLeft: '2.5rem' }}>
                <a 
                  href="#" 
                  style={{ 
                    color: '#000', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderBottom: currentPage === 'buy' ? '2px solid #d30000' : '2px solid transparent',
                    paddingBottom: '4px'
                  }}
                  onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('buy'); }}
                >
                  Buy
                </a>
                <a 
                  href="#" 
                  style={{ 
                    color: '#000', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    borderBottom: currentPage === 'sell' ? '2px solid #d30000' : '2px solid transparent',
                    paddingBottom: '4px'
                  }}
                  onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('sell'); }}
                >
                  Sell
                </a>
              </nav>
            </div>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              border: '1px solid #ccc', 
              borderRadius: '2rem', 
              padding: '0.5rem 1rem',
              width: '100%',
              maxWidth: '500px',
              backgroundColor: '#fff',
              margin: '0 1rem'
            }}>
              <input 
                type="text" 
                placeholder="Search" 
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.95rem',
                  color: '#333'
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#555' }}>
                <Search size={18} strokeWidth={2.5} style={{ cursor: 'pointer', color: '#000' }} />
                <div style={{ width: '1px', height: '24px', backgroundColor: '#ddd' }}></div>
                <Mic size={18} strokeWidth={2.5} style={{ cursor: 'pointer', color: '#000' }} />
              </div>
            </div>

            <div className="header-actions" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
              <a 
                href="https://www.nanditoyota.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="toyota-logo"
                style={{ textDecoration: 'none', cursor: 'pointer', position: 'relative' }}
              >
                <img 
                  src="/nandi_toyota_logo.png" 
                  alt="Nandi Toyota" 
                  style={{ height: '40px', objectFit: 'contain', transform: 'scale(2.5)', margin: '0 25px 0 15px' }}
                />
                <span className="toyota-new-badge" style={{ position: 'absolute', top: '-2px', right: '-12px', color: '#d30000', fontSize: '0.65rem', fontWeight: 800, fontStyle: 'italic', zIndex: 2 }}>NEW</span>
              </a>
              

              <button className="login-btn" onClick={() => setIsModalOpen(true)}>
                <User size={20} />
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Login / Register Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(3px)'
        }}>
          <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '2.5rem', width: '550px', maxWidth: '90%', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div 
              onClick={() => { setIsModalOpen(false); setMobileNumber(''); setAgreed(false); }}
              style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '50%', border: '1px solid #ddd' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}>
              Login or register
            </h2>
            <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '2rem' }}>
              for Better Experience, Order tracking & Regular updates
            </p>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '0 15px', color: '#555', backgroundColor: '#fff', display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                +91
              </div>
              <input 
                type="tel"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                style={{ flex: 1, border: '1px solid #ddd', borderRadius: '6px', padding: '14px 15px', fontSize: '1rem', outline: 'none' }}
              />
            </div>
            
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginBottom: '2rem' }}>
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ marginTop: '4px', width: '16px', height: '16px', accentColor: '#cc0000', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.9rem', color: '#555' }}>
                By proceeding, you agree to our <span style={{ color: '#cc0000' }}>terms</span> and <span style={{ color: '#cc0000' }}>conditions</span>
              </span>
            </label>
            
            <button 
              disabled={mobileNumber.length !== 10 || !agreed}
              style={{ 
                width: '100%', 
                padding: '14px', 
                borderRadius: '6px', 
                border: 'none', 
                fontWeight: 600, 
                fontSize: '1rem',
                backgroundColor: (mobileNumber.length === 10 && agreed) ? '#cc0000' : '#c4c4c4',
                color: 'white',
                cursor: (mobileNumber.length === 10 && agreed) ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s'
              }}
            >
              Get OTP
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
