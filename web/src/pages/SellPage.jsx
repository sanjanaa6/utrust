import React from 'react';
import { ChevronRight, RefreshCcw } from 'lucide-react';

const SellPage = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: '#fcfdfd', minHeight: 'calc(100vh - 150px)', padding: '2rem 0 4rem 0', fontFamily: "'Inter', sans-serif" }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
          <span onClick={() => onNavigate && onNavigate('home')} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#cc0000'} onMouseOut={e=>e.target.style.color='#666'}>Home</span>
          <ChevronRight size={14} color="#aaa" />
          <span style={{ color: '#111', fontWeight: 600 }}>Sell Car</span>
        </div>

        {/* Exchange Bonus Banner */}
        <div style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.1) 100%), url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px', 
          padding: '2rem', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '2rem', 
          boxShadow: '0 15px 40px rgba(204,0,0,0.15)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.15)', padding: '16px', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
              <RefreshCcw size={32} color="white" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 0.4rem 0', letterSpacing: '-0.5px' }}>UTrust Exchange Bonus</h3>
              <p style={{ margin: '0 0 0.3rem 0', color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.4 }}>
                Exchange your old car for a certified UTrust vehicle and get an extra bonus of up to <span style={{ fontWeight: 800, color: '#ffd700', fontSize: '1.15rem' }}>₹30,000*</span>.
              </p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 500 }}>
                *Terms and conditions applicable
              </p>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '2rem' }}>
            {/* Vehicle Details */}
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#333', marginBottom: '1.5rem' }}>Vehicle Details</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <input 
                  type="text" 
                  placeholder="Enter registration number" 
                  style={inputStyle}
                />
                <input 
                  type="text" 
                  placeholder="Enter make name" 
                  style={inputStyle}
                />
                <input 
                  type="text" 
                  placeholder="Enter model name" 
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Personal Details */}
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#333', marginBottom: '1.5rem' }}>Personal Details</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <input 
                  type="text" 
                  placeholder="Full name" 
                  style={inputStyle}
                />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  style={inputStyle}
                />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input 
                    type="text" 
                    placeholder="+91" 
                    defaultValue="+91"
                    style={{ ...inputStyle, width: '70px', textAlign: 'center' }}
                  />
                  <input 
                    type="tel" 
                    placeholder="Enter mobile number" 
                    style={{ ...inputStyle, flex: 1 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
            <button style={{
              padding: '0.6rem 2rem',
              backgroundColor: '#fff',
              border: '1px solid #333',
              borderRadius: '6px',
              color: '#333',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Cancel
            </button>
            <button style={{
              padding: '0.6rem 2rem',
              backgroundColor: '#b30000',
              border: '1px solid #b30000',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Submit
            </button>
          </div>
        </div>

        {/* Steps Images Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {[
            { 
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
              icon: '₹',
              title: 'Competitive Pricing',
              desc: 'Best value for your trade-in.'
            },
            { 
              img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
              icon: '₹',
              title: 'Instant Payment',
              desc: 'Immediate cash offers.'
            },
            { 
              img: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
              icon: '🔑',
              title: 'Ownership Transfer',
              desc: 'Guaranteed ownership transfer.'
            },
            { 
              img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', 
              icon: '%',
              title: 'Loan Settlement',
              desc: 'Seamless loan assistance.'
            },
          ].map((step, idx) => (
            <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '140px', backgroundColor: '#333' }}>
                <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                    fontSize: '1.2rem', fontWeight: 'bold'
                  }}>
                    {step.icon}
                  </div>
                </div>
              </div>
              <div style={{ padding: '1.5rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#222' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.4, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '0.95rem',
  color: '#333',
  outline: 'none',
  transition: 'border-color 0.2s'
};

export default SellPage;
