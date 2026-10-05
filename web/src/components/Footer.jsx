import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000000', color: '#ffffff', padding: '5rem 0 3rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          
          {/* Column 1 */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Nandi Toyota U Trust</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '280px' }}>
              38/1, 2nd Cross, Hosur Rd, Muniswamappa Layout, Bengaluru, Karnataka, 560068.
            </p>
            
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Connect With Us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>X</span>
              </a>
              <a href="#" style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>IN</span>
              </a>
              <a href="#" style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>FB</span>
              </a>
              <a href="#" style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>IG</span>
              </a>
              <a href="#" style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid #555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>YT</span>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>Quick Links</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>Buy car</a>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>Sell car</a>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>About us</a>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>Contact us</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>FAQ'S</a>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>Testimonials</a>
                <a href="#" style={{ color: '#aaa', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#aaa'}>Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem' }}>For Assistance</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#aaa', fontSize: '0.9rem' }}>
                <Phone size={18} color="#fff" />
                <span>+91-984-504-4779</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#aaa', fontSize: '0.9rem' }}>
                <Mail size={18} color="#fff" />
                <span>feedback@nanditoyotautrust.com</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
