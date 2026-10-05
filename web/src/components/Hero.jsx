import React from 'react';


const Hero = () => {
  return (
    <div className="container" style={{ padding: '0' }}>
      <section className="hero-section">
        {/* Placeholder image from unsplash as we don't have the exact one */}
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Happy family with car" 
          className="hero-image"
        />
        
        <div className="hero-overlay">
          <div className="hero-toggle">
            <button className="toggle-btn active">Buy</button>
            <button className="toggle-btn inactive">Sell</button>
          </div>
          
          <h1 className="hero-title">Discover Your Drive</h1>
          <p className="hero-subtitle">Where Value Meets Performance</p>
          
          <div className="trusted-badge">
            Trusted &<br/>Certified
          </div>

          <div className="search-filter-bar">
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled hidden>Budget</option>
              <option value="1">Under 5 Lakhs</option>
              <option value="2">5 - 10 Lakhs</option>
              <option value="3">10+ Lakhs</option>
            </select>
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled hidden>Make</option>
              <option value="toyota">Toyota</option>
              <option value="maruti">Maruti Suzuki</option>
              <option value="hyundai">Hyundai</option>
            </select>
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled hidden>Model</option>
              <option value="glanza">Glanza</option>
              <option value="innova">Innova</option>
            </select>
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled hidden>Year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <select className="filter-dropdown" defaultValue="">
              <option value="" disabled hidden>Transmission</option>
              <option value="auto">Automatic</option>
              <option value="manual">Manual</option>
            </select>
            
            <button className="search-filter-btn">Search</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
