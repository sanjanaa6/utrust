import React from 'react';

const HowItWorks = () => {
  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#fff', fontFamily: "'Inter', sans-serif", overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 500, color: '#111', marginBottom: '4rem' }}>
          Discover Your <span style={{ color: '#cc0000' }}>Dream Wheels</span>
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
          
          {/* Arrow 1 */}
          <div style={{ position: 'absolute', top: '30%', left: '23%', width: '20%', zIndex: 0 }}>
            <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" style={{ overflow: 'visible' }}>
              <path d="M 20 80 C 80 80, 120 20, 180 20" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" fill="none" strokeLinecap="round" />
              <path d="M 170 12 L 182 20 L 172 28" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Arrow 2 */}
          <div style={{ position: 'absolute', top: '30%', left: '57%', width: '20%', zIndex: 0 }}>
            <svg width="100%" height="100" viewBox="0 0 200 100" fill="none" style={{ overflow: 'visible' }}>
              <path d="M 20 20 C 80 20, 120 80, 180 80" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8 8" fill="none" strokeLinecap="round" />
              <path d="M 172 72 L 182 80 L 170 88" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Step 1 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', zIndex: 1 }}>
            <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/assets/step1.png" alt="Discover Your Ideal Car" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/280x200/f8f9fa/a0aec0?text=Upload+step1.png" }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: '#333', marginBottom: '0.8rem' }}>Discover Your Ideal Car</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5, maxWidth: '280px' }}>
              Explore our wide range and find the perfect match for your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', zIndex: 1 }}>
            <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/assets/step2.png" alt="Streamlined Enquiry Process" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/280x200/f8f9fa/a0aec0?text=Upload+step2.png" }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: '#333', marginBottom: '0.8rem' }}>Streamlined Enquiry Process</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5, maxWidth: '280px' }}>
              Effortlessly reach out about any car you are interested in.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem', zIndex: 1 }}>
            <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <img src="/assets/step3.png" alt="Enquiry Sent Successfully!" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/280x200/f8f9fa/a0aec0?text=Upload+step3.png" }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500, color: '#333', marginBottom: '0.8rem' }}>Enquiry Sent Successfully!</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5, maxWidth: '280px' }}>
              Sit back and relax. We will be in touch shortly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
