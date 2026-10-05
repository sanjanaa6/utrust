import React from 'react';

const CashYourCar = () => {
  return (
    <section style={{ padding: '5rem 0', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '4rem', color: '#222' }}>
          Cash Your <span style={{ color: '#cc0000' }}>Car</span>
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Decorative dashed lines */}
          <div style={{ position: 'absolute', top: '70px', left: '25%', width: '20%', borderTop: '2px dashed #d1d5db', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: '70px', left: '58%', width: '20%', borderTop: '2px dashed #d1d5db', zIndex: 1 }}></div>
          
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ width: '180px', height: '140px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="150" height="120" viewBox="0 0 100 80" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="10" width="80" height="50" rx="4" />
                <circle cx="50" cy="40" r="10" />
                <path d="M30 40h40" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#222' }}>Share Your Car's Details</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>Let others discover the beauty of your ride.</p>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ width: '180px', height: '140px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="100" height="120" viewBox="0 0 60 100" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="10" width="40" height="80" rx="6" />
                <circle cx="30" cy="45" r="12" />
                <path d="M25 45h10M30 40v10" stroke="#10b981" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#222' }}>Request Valuation</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>Discover the true worth of your vehicle.</p>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ width: '180px', height: '140px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="150" height="120" viewBox="0 0 100 80" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 50h60l-10-30H30L20 50z" fill="#e2e8f0" stroke="none" />
                <path d="M20 50v10M80 50v10" />
                <circle cx="30" cy="60" r="8" />
                <circle cx="70" cy="60" r="8" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#222' }}>Finalize Payment</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>Get a quotation and seal the deal!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashYourCar;
