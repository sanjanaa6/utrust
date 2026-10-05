import React from 'react';


const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2 className="how-it-works-title">
          Discover Your <span className="text-red">Dream Wheels</span>
        </h2>
        
        <div className="how-it-works-steps">
          {/* Decorative dashed lines */}
          <div className="step-connector step-connector-1"></div>
          <div className="step-connector step-connector-2"></div>
          
          <div className="step-card">
            <div className="step-icon-wrapper">
              <svg width="150" height="120" viewBox="0 0 100 80" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="10" width="80" height="50" rx="4" />
                <path d="M10 25h80" />
                <path d="M50 60v10" />
                <path d="M35 70h30" />
                <circle cx="50" cy="40" r="10" />
              </svg>
            </div>
            <h3 className="step-title">Discover Your Ideal Car</h3>
            <p className="step-desc">
              Explore our wide range and find the perfect match for your needs.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon-wrapper">
              <svg width="150" height="120" viewBox="0 0 100 80" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="10" width="80" height="50" rx="4" />
                <path d="M30 40h40" />
                <path d="M30 30h20" />
                <path d="M50 60v10" />
                <path d="M35 70h30" />
                <circle cx="70" cy="40" r="15" fill="#e2e8f0" stroke="none" />
              </svg>
            </div>
            <h3 className="step-title">Streamlined Enquiry Process</h3>
            <p className="step-desc">
              Effortlessly reach out about any car you are interested in.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon-wrapper">
              <svg width="100" height="120" viewBox="0 0 60 100" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="10" width="40" height="80" rx="6" />
                <path d="M25 15h10" />
                <circle cx="30" cy="45" r="12" />
                <path d="M30 45l-4-4m4 4l8-8" stroke="#10b981" />
              </svg>
            </div>
            <h3 className="step-title">Enquiry Sent Successfully!</h3>
            <p className="step-desc">
              Sit back and relax. We will be in touch shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
