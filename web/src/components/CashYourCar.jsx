import React from 'react';

const CashYourCar = () => {
  return (
    <section style={{ padding: '5rem 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 500, marginBottom: '4rem', color: '#222' }}>
          Cash Your <span style={{ color: '#cc0000' }}>Car</span>
        </h2>
        
        <div className="how-it-works-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', margin: '0 auto' }}>
          
          {/* Arrow 1 */}
          <div className="how-it-works-arrow" style={{ position: 'absolute', top: '40%', left: '26%', width: '15%', zIndex: 1 }}>
            <svg viewBox="0 0 100 50" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <path 
                d="M 0 40 Q 50 10 100 20" 
                fill="none" 
                stroke="#c0c0c0" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                markerEnd="url(#arrowhead)" 
              />
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6" fill="none" stroke="#c0c0c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Arrow 2 */}
          <div className="how-it-works-arrow" style={{ position: 'absolute', top: '40%', right: '26%', width: '15%', zIndex: 1 }}>
            <svg viewBox="0 0 100 50" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <path 
                d="M 0 20 Q 50 40 100 40" 
                fill="none" 
                stroke="#c0c0c0" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                markerEnd="url(#arrowhead)" 
              />
            </svg>
          </div>
          
          <div className="how-it-works-step" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ height: '160px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/step1.png" alt="Share Details" style={{ maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#222' }}>Share Your Car's Details</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5, maxWidth: '250px' }}>Let others discover the beauty of your ride.</p>
          </div>

          <div className="how-it-works-step" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ height: '160px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/step2.png" alt="Request Valuation" style={{ maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#222' }}>Request Valuation</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5, maxWidth: '250px' }}>Discover the true worth of your vehicle.</p>
          </div>

          <div className="how-it-works-step" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', position: 'relative', zIndex: 2 }}>
            <div style={{ height: '160px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/assets/step3.png" alt="Finalize Payment" style={{ maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.8rem', color: '#222' }}>Finalize Payment</h3>
            <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5, maxWidth: '250px' }}>Get a quotation and seal the deal!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashYourCar;
