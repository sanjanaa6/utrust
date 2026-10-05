import React from 'react';

import { MapPin, Phone, Search, Mic, User } from 'lucide-react';

const Header = ({ onNavigate, currentPage }) => {
  return (
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
        <div className="container main-header-content">
          <div className="flex items-center">
            <div className="logo-container" onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer' }}>
              <span className="logo-nandi">NANDI</span>
              <div className="logo-trust">
                <span className="logo-trust-top">Toyota</span>
                <span className="logo-trust-bottom">
                  <span className="logo-trust-icon">U</span>TRUST
                </span>
              </div>
            </div>
            
            <nav className="nav-links">
              <a 
                href="#" 
                className="nav-link" 
                style={{ 
                  color: currentPage === 'buy' ? '#cc0000' : '#333', 
                  borderBottom: currentPage === 'buy' ? '2px solid #cc0000' : 'none',
                  paddingBottom: '4px'
                }}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('buy'); }}
              >
                Buy
              </a>
              <a href="#" className="nav-link">Sell</a>
            </nav>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" className="search-input" />
            <div className="search-icons">
              <Search size={18} className="search-icon-btn" />
              <div className="search-divider"></div>
              <Mic size={18} className="search-icon-btn" />
            </div>
          </div>

          <div className="header-actions">
            <div className="toyota-logo">
              {/* Simplified Toyota Logo SVG placeholder */}
              <svg width="40" height="25" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="50" cy="30" rx="45" ry="25" />
                <ellipse cx="50" cy="30" rx="30" ry="12" />
                <ellipse cx="50" cy="20" rx="8" ry="18" />
              </svg>
              <span className="toyota-new-badge">NEW</span>
            </div>
            
            <button className="login-btn">
              <User size={20} />
              Login / Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
