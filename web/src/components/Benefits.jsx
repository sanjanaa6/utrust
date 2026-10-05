import React, { useState } from 'react';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState('buy');

  const buyBenefits = [
    {
      title: "Multibrand",
      desc: "Best options from every brand.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 4v4m0 8v4M4 12h4m8 0h4"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
    },
    {
      title: "Wide Choice",
      desc: "Cars to fit every budget.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M4 6h16M4 12h16m-7 6h7"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      )
    },
    {
      title: "Certified With Warranty",
      desc: "Comprehensive warranty coverage.",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    },
    {
      title: "Buy Back Assurance",
      desc: "Guaranteed value when you upgrade.",
      image: "https://images.unsplash.com/photo-1518987048-93e29699e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M2 12a10 10 0 1 0 10-10"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      )
    },
    {
      title: "Certified Quality Assurance",
      desc: "Rigorous 203-point quality inspection.",
      image: "https://images.unsplash.com/photo-1520113412646-0428d09cb8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    }
  ];

  const sellBenefits = [
    {
      title: "Competitive Pricing",
      desc: "Best value for your trade-in.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      title: "Instant Payment",
      desc: "Immediate cash offers.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2"/>
        </svg>
      )
    },
    {
      title: "Ownership Transfer",
      desc: "Guaranteed ownership transfer.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
        </svg>
      )
    },
    {
      title: "Loan Settlement Help",
      desc: "Seamless loan settlement assistance.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9 15L15 9"/>
          <circle cx="9" cy="9" r="1"/>
          <circle cx="15" cy="15" r="1"/>
        </svg>
      )
    },
    {
      title: "Toyota Reliability & Trust Factors",
      desc: "Backed by the legendary Toyota promise.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    }
  ];

  const currentBenefits = activeTab === 'buy' ? buyBenefits : sellBenefits;

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2rem', color: '#222' }}>
          Benefits of Nandi Toyota <span style={{ color: '#cc0000' }}>U Trust</span>
        </h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem', borderBottom: '1px solid #e0e0e0', maxWidth: '400px', margin: '0 auto 4rem auto' }}>
          <button 
            style={{ padding: '1rem 3rem', fontWeight: 600, color: activeTab === 'buy' ? '#222' : '#999', borderBottom: activeTab === 'buy' ? '2px solid #cc0000' : '2px solid transparent', transition: 'all 0.2s' }}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button 
            style={{ padding: '1rem 3rem', fontWeight: 600, color: activeTab === 'sell' ? '#222' : '#999', borderBottom: activeTab === 'sell' ? '2px solid #cc0000' : '2px solid transparent', transition: 'all 0.2s' }}
            onClick={() => setActiveTab('sell')}
          >
            Sell
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {currentBenefits.map((b, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ position: 'relative', height: '180px', backgroundColor: '#333' }}>
                <img 
                  src={b.image} 
                  alt={b.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
                />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  {b.icon}
                </div>
              </div>
              <div style={{ padding: '2rem 1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: '#222' }}>{b.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
