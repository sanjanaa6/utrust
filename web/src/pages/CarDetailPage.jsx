import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Share2, Bookmark, Star, ChevronDown, ChevronUp, Calculator } from 'lucide-react';

const formatCurrency = (num) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(num).replace('₹', '₹');
};

const CarDetailPage = ({ car, onBack }) => {
  // EMI Calculator State
  const carPrice = car.priceValue || 1551680;
  const maxDownPayment = Math.floor(carPrice * 0.8);
  const [downPayment, setDownPayment] = useState(carPrice * 0.2); // Default 20% down
  const [tenure, setTenure] = useState(60); // Default 5 years
  const interestRate = 11; // 11% annual

  // Accordion State
  const [openSection, setOpenSection] = useState('overview');

  // Modal State
  const [modalType, setModalType] = useState(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [showCompactEmi, setShowCompactEmi] = useState(true);

  // Calculations
  const principal = carPrice - downPayment;
  const r = interestRate / 12 / 100;
  const emi = principal > 0 ? (principal * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1) : 0;

  return (
    <div style={{ backgroundColor: '#fcfdfd', minHeight: '100vh', paddingBottom: '5rem', fontFamily: "'Inter', sans-serif" }}>

      <div className="container" style={{ paddingTop: '2rem', maxWidth: '1280px', margin: '0 auto' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
          <span onClick={onBack} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#cc0000'} onMouseOut={e => e.currentTarget.style.color = '#666'}>Home</span>
          <ChevronRight size={14} color="#aaa" />
          <span onClick={onBack} style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#cc0000'} onMouseOut={e => e.currentTarget.style.color = '#666'}>Buy Car</span>
          <ChevronRight size={14} color="#aaa" />
          <span style={{ fontWeight: 600, color: '#111' }}>{car.title}</span>
        </div>

        {/* Main Content Layout */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

          {/* Left Column: Media & Info */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Gallery Area */}
            <div style={{ display: 'flex', gap: '1rem', minHeight: '500px', height: '500px' }}>

              {/* Thumbnails (Left Column) */}
              <div style={{ width: '120px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', paddingRight: '4px' }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{
                    width: '100%', height: '80px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, cursor: 'pointer',
                    backgroundColor: '#eef0f3',
                    border: i === 0 ? '2px solid #cc0000' : '2px solid transparent',
                    opacity: i === 0 ? 1 : 0.6,
                    transition: 'all 0.2s'
                  }}>
                    <img src={car.image} alt={`Thumb ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>

              {/* Main Image Container */}
              <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', backgroundColor: '#e3e6ea', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={car.image} alt={car.title} style={{ width: '85%', height: '85%', objectFit: 'contain' }} draggable="false" />

                {/* Left Arrow */}
                <div style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', boxShadow: '0 4px 10px rgba(204,0,0,0.3)', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}>
                  <ChevronLeft size={20} />
                </div>

                {/* Right Arrow */}
                <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#cc0000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', boxShadow: '0 4px 10px rgba(204,0,0,0.3)', transition: 'transform 0.2s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(-50%) scale(1)'}>
                  <ChevronRight size={20} />
                </div>

                {/* Counter */}
                <div style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  1/14
                </div>
              </div>
            </div>

            {/* Accordions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {/* Overview Accordion */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                <div
                  onClick={() => setOpenSection(openSection === 'overview' ? '' : 'overview')}
                  style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: openSection === 'overview' ? '#fcfdfd' : 'white' }}
                >
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111' }}>Vehicle Overview</h3>
                  {openSection === 'overview' ? <ChevronUp size={20} color="#cc0000" /> : <ChevronDown size={20} color="#666" />}
                </div>
                {openSection === 'overview' && (
                  <div style={{ padding: '0 2rem 2rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '2rem', borderTop: '1px solid #f0f0f0', paddingTop: '2rem' }}>
                    <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Make Year</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>{car.year}</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Fuel Type</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>{car.fuelType}</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Km Driven</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>{car.km} km</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Transmission</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem', textTransform: 'capitalize' }}>{car.transmission}</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Ownership</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>{car.owner}</div></div>
                    <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Location</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>{car.location}</div></div>
                  </div>
                )}
              </div>

              {/* Specs Accordion */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0' }}>
                <div
                  onClick={() => setOpenSection(openSection === 'specs' ? '' : 'specs')}
                  style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                >
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111' }}>Specifications & Features</h3>
                  {openSection === 'specs' ? <ChevronUp size={20} color="#cc0000" /> : <ChevronDown size={20} color="#666" />}
                </div>
                {openSection === 'specs' && (
                  <div style={{ padding: '0 2rem 2rem 2rem', borderTop: '1px solid #f0f0f0', paddingTop: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2rem' }}>
                      <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Mileage</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>15.6 kmpl</div></div>
                      <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Engine</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>2GD-FTV</div></div>
                      <div><div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Power</div><div style={{ fontWeight: 600, color: '#222', fontSize: '1rem' }}>148 bhp</div></div>
                    </div>
                    <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      <strong>Key Features:</strong> Power Steering, Power Windows, AC, Automatic Climate Control, Air Quality Control, Touchscreen Infotainment, Keyless Entry, Push Button Start, Dual Airbags.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Pricing & Actions */}
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Main Pricing Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111', lineHeight: 1.2, paddingRight: '15px', letterSpacing: '-0.5px' }}>{car.title}</h1>
                <div style={{ display: 'flex', gap: '12px', paddingTop: '5px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#ffeaea'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#f8f9fa'}>
                    <Share2 size={18} color="#cc0000" />
                  </div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#ffeaea'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#f8f9fa'}>
                    <Bookmark size={18} color="#cc0000" />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                {[`${car.km} km`, car.fuelType, car.transmission, car.owner].map((tag, i) => (
                  <span key={i} style={{ backgroundColor: '#f0f2f5', padding: '6px 12px', borderRadius: '6px', fontSize: '0.85rem', color: '#555', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#111', marginBottom: '0.5rem', letterSpacing: '-1px' }}>
                {car.price}
              </div>

              <div style={{ backgroundColor: '#fff5f5', border: '1px dashed #cc0000', borderRadius: '10px', padding: '12px 16px', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.5rem' }}>🎁</span>
                <div>
                  <div style={{ color: '#cc0000', fontWeight: 700, fontSize: '0.95rem', marginBottom: '2px' }}>Exchange Bonus Available</div>
                  <div style={{ color: '#555', fontSize: '0.85rem' }}>Get up to ₹20,000 extra value when you exchange your old car.</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => setModalType('enquiry')}
                  style={{ backgroundColor: '#111', color: 'white', border: 'none', padding: '16px', borderRadius: '10px', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer', transition: 'transform 0.2s, background 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Make An Enquiry
                </button>
                <button
                  onClick={() => setModalType('test_drive')}
                  style={{ backgroundColor: 'white', color: '#cc0000', border: '2px solid #ffe5e5', padding: '16px', borderRadius: '10px', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#fff5f5'}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Request A Test Drive
                </button>
              </div>
            </div>

            {/* Compact EMI Calculator Widget */}
            <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '1.8rem', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', border: '1px solid #eef2f6' }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', marginBottom: showCompactEmi ? '1.5rem' : '0' }}
                onClick={() => setShowCompactEmi(!showCompactEmi)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ backgroundColor: '#ebf5ff', padding: '8px', borderRadius: '8px' }}>
                    <Calculator size={20} color="#2563eb" />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111' }}>EMI Calculator</h3>
                </div>
                {showCompactEmi ? <ChevronUp size={20} color="#888" /> : <ChevronDown size={20} color="#888" />}
              </div>

              {showCompactEmi && (
                <div style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
                  <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '1.2rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Estimated EMI</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>{formatCurrency(emi)}<span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>/mo</span></div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500, marginBottom: '4px' }}>Interest Rate</div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{interestRate}% p.a.</div>
                      </div>
                    </div>

                    <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '0.5rem 0' }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: '#475569', fontWeight: 500 }}>Loan Amount</span>
                      <span style={{ color: '#0f172a', fontWeight: 700 }}>{formatCurrency(principal)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: '#475569', fontWeight: 500 }}>Total Interest</span>
                      <span style={{ color: '#0f172a', fontWeight: 700 }}>{formatCurrency((emi * tenure) - principal)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginTop: '0.2rem' }}>
                      <span style={{ color: '#1e293b', fontWeight: 700 }}>Total Payable</span>
                      <span style={{ color: '#cc0000', fontWeight: 800 }}>{formatCurrency(emi * tenure)}</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                      <span style={{ color: '#475569', fontWeight: 500 }}>Down Payment</span>
                      <span style={{ color: '#0f172a', fontWeight: 700 }}>{formatCurrency(downPayment)}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max={maxDownPayment}
                      step="10000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(parseInt(e.target.value))}
                      style={{ width: '100%', accentColor: '#2563eb', height: '6px', borderRadius: '3px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                      <span style={{ color: '#475569', fontWeight: 500 }}>Loan Tenure</span>
                      <span style={{ color: '#0f172a', fontWeight: 700 }}>{tenure} Months</span>
                    </div>
                    <input
                      type="range"
                      min="12"
                      max="84"
                      step="12"
                      value={tenure}
                      onChange={(e) => setTenure(parseInt(e.target.value))}
                      style={{ width: '100%', accentColor: '#2563eb', height: '6px', borderRadius: '3px', outline: 'none' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>
                      <span>1 Year</span>
                      <span>7 Years</span>
                    </div>
                  </div>
                </div>
              )}
            </div>



          </div>
        </div>
      </div>

      {/* Enquiry / Test Drive Modal */}
      {modalType && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)'
        }}>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '3rem', width: '450px', maxWidth: '90%', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <div
              onClick={() => { setModalType(null); setMobileNumber(''); }}
              style={{ position: 'absolute', top: '25px', right: '25px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f1f5f9', transition: 'background 0.2s' }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#e2e8f0'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#f1f5f9'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#0f172a' }}>
              {modalType === 'enquiry' ? 'Make An Enquiry' : 'Request A Test Drive'}
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2.5rem' }}>Enter your details to proceed.</p>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ border: '2px solid #e2e8f0', borderRadius: '12px', padding: '0 15px', color: '#0f172a', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.05rem' }}>
                +91
              </div>
              <input
                type="tel"
                placeholder="Mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                style={{ flex: 1, border: '2px solid #e2e8f0', borderRadius: '12px', padding: '16px 15px', fontSize: '1.05rem', outline: 'none', fontWeight: 500, color: '#0f172a', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#cc0000'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>

            <button
              disabled={mobileNumber.length !== 10}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: 700,
                fontSize: '1.05rem',
                backgroundColor: mobileNumber.length === 10 ? '#cc0000' : '#cbd5e1',
                color: 'white',
                cursor: mobileNumber.length === 10 ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                boxShadow: mobileNumber.length === 10 ? '0 4px 15px rgba(204,0,0,0.3)' : 'none'
              }}
            >
              Get OTP
            </button>
            <p style={{ color: '#94a3b8', fontSize: '0.8rem', textAlign: 'center', marginTop: '1.5rem', lineHeight: 1.5 }}>
              By continuing, you agree to our Terms of Service & Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetailPage;
