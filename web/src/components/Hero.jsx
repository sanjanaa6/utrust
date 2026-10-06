import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Check, ArrowRight, CarFront } from 'lucide-react';

const CustomDropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative', flex: 1, minWidth: '130px' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '14px 16px', backgroundColor: 'white', color: '#0f172a',
          border: '1px solid #e2e8f0',
          borderRadius: '12px', cursor: 'pointer', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95rem',
          fontWeight: 500,
          transition: 'all 0.2s',
          boxShadow: isOpen ? '0 4px 12px rgba(0,0,0,0.05)' : 'none'
        }}
        onMouseOver={e => !isOpen && (e.currentTarget.style.borderColor = '#cbd5e1')}
        onMouseOut={e => !isOpen && (e.currentTarget.style.borderColor = '#e2e8f0')}
      >
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {value ? options.find(o => o.value === value)?.label : label}
        </span>
        <ChevronDown size={16} color="#64748b" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
      </div>

      {isOpen && (
        <>
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9 }} onClick={() => setIsOpen(false)} />
          <div style={{
            position: 'absolute', top: 'calc(100% + 8px)', left: 0, width: '100%',
            backgroundColor: 'white', color: '#0f172a',
            borderRadius: '12px', zIndex: 10,
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxHeight: '250px', overflowY: 'auto'
          }}>
            {options.map((opt, i) => (
              <div
                key={i}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                style={{
                  padding: '12px 16px', cursor: 'pointer', display: 'flex',
                  alignItems: 'center', justifyContent: 'space-between',
                  borderBottom: i < options.length - 1 ? '1px solid #f1f5f9' : 'none',
                  fontSize: '0.9rem',
                  backgroundColor: value === opt.value ? '#f8fafc' : 'transparent',
                  color: value === opt.value ? '#cc0000' : '#334155',
                  fontWeight: value === opt.value ? 600 : 400
                }}
                onMouseEnter={(e) => { if (value !== opt.value) e.currentTarget.style.backgroundColor = '#f8fafc' }}
                onMouseLeave={(e) => { if (value !== opt.value) e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                <span>{opt.label}</span>
                {value === opt.value && <Check size={16} color="#cc0000" />}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Hero = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('buy');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [budget, setBudget] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const defaultImages = [
    {
      src: "/assets/diwali_banner.jpg",
      // subHeading: "CELEBRATE DIWALI WITH SHINE!",
      // heading: "FESTIVE CAR OFFER",
      // offer: "UP TO ₹2,00,000 OFF*",
      // description: "0% INTEREST* | FREE ACCESSORIES | EXCHANGE BONUS",
      // buttonText: "BOOK A TEST DRIVE",
      // align: 'left',
      // color: '#fff',
      // accentColor: '#fbbf24'
    },
    {
      src: "/assets/dussehra_banner.jpg",
      // subHeading: "CELEBRATE THE VICTORY",
      // heading: "DUSSEHRA SPECIAL",
      // offer: "BENEFITS UP TO ₹1.5 LAKH*",
      // description: "OFFERS ON SELECT MODELS | LOW EMI | EXCHANGE BONUS",
      // buttonText: "BOOK NOW",
      // align: 'left',
      // color: '#fff',
      // accentColor: '#fbbf24'
    }
  ];
  const [heroImages, setHeroImages] = useState(defaultImages);

  useEffect(() => {
    // Ensuring default festive banners always load
    setHeroImages(defaultImages);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const budgetOptions = [
    { label: 'Under 3 lakh', value: '0-300000' },
    { label: '3-4 lakh', value: '300000-400000' },
    { label: '4-5 lakh', value: '400000-500000' },
    { label: '5-6 lakh', value: '500000-600000' },
    { label: '6-7 lakh', value: '600000-700000' }
  ];

  const makeOptions = [
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Maruti Suzuki', value: 'Maruti Suzuki' },
    { label: 'Hyundai', value: 'Hyundai' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Tata', value: 'Tata' }
  ];

  const modelOptions = [
    { label: 'Glanza', value: 'Glanza' },
    { label: 'Innova', value: 'Innova' },
    { label: 'Creta', value: 'Creta' },
    { label: 'City', value: 'City' },
    { label: 'Nexon', value: 'Nexon' }
  ];

  const yearOptions = [
    { label: '2022 & above', value: '2022' },
    { label: '2020 & above', value: '2020' },
    { label: '2018 & above', value: '2018' },
    { label: '2016 & above', value: '2016' }
  ];

  const handleSearch = () => {
    if (onNavigate) {
      onNavigate('buy', { budget, make, model, year });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fcfdfd', paddingBottom: '4rem' }}>

      {/* Carousel */}
      <div style={{ width: '96%', maxWidth: '1600px', borderRadius: '30px', marginTop: '20px', height: '80vh', minHeight: '600px', maxHeight: '900px', position: 'relative', overflow: 'hidden' }}>
        {heroImages.map((item, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              opacity: currentSlide === idx ? 1 : 0,
              visibility: currentSlide === idx ? 'visible' : 'hidden',
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === idx ? 1 : 0
            }}
          >
            <img
              src={typeof item === 'string' ? item : item.src}
              alt={`Slide ${idx + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {typeof item === 'object' && (
              <>
                {/* Dark overlay for text readability */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)' }} />

                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', padding: '0 8%' }}>
                  <div style={{ maxWidth: '700px', color: item.color, textAlign: item.align }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '3px', color: item.accentColor, marginBottom: '1rem', textTransform: 'uppercase' }}>{item.subHeading}</h4>
                    <h2 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)', letterSpacing: '-1px' }}>{item.heading}</h2>
                    <div style={{ display: 'inline-block', backgroundColor: item.accentColor, color: '#111', padding: '10px 24px', borderRadius: '6px', fontSize: '1.6rem', fontWeight: 900, marginBottom: '1.5rem', transform: 'skewX(-10deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                      <span style={{ display: 'block', transform: 'skewX(10deg)' }}>{item.offer}</span>
                    </div>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, opacity: 0.9, marginBottom: '2.5rem', letterSpacing: '1px' }}>{item.description}</p>
                    <button style={{ backgroundColor: 'transparent', color: item.color, border: `2px solid ${item.accentColor}`, padding: '16px 40px', fontSize: '1.1rem', fontWeight: 700, borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s', backdropFilter: 'blur(4px)' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = item.accentColor; e.currentTarget.style.color = '#111'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = item.color; }}>
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </>
            )}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)' }} />
          </div>
        ))}

        {/* Carousel Indicators */}
        <div style={{ position: 'absolute', bottom: '80px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 2 }}>
          {heroImages.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: currentSlide === idx ? '30px' : '10px',
                height: '10px',
                borderRadius: '10px',
                backgroundColor: currentSlide === idx ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Buy/Sell Floating Section */}
      <div style={{
        width: '92%', maxWidth: '1200px',
        backgroundColor: 'white',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
        marginTop: '-40px',
        position: 'relative',
        zIndex: 10,
        display: 'flex', flexDirection: 'column', gap: '1.5rem',
        border: '1px solid rgba(0,0,0,0.05)'
      }}>

        {/* Header inside floating section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-1px' }}>
              {activeTab === 'buy' ? (
                <>Find your <span style={{ color: '#cc0000' }}>perfect</span> drive.</>
              ) : (
                <>Get the <span style={{ color: '#cc0000' }}>best</span> value.</>
              )}
            </h1>
            <p style={{ fontSize: '1rem', color: '#64748b', margin: 0 }}>
              {activeTab === 'buy'
                ? 'Explore India\'s largest selection of trusted, certified pre-owned cars.'
                : 'Sell your car from your home in just one hour. We guarantee the best price.'}
            </p>
          </div>

          {/* Toggle Pill */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: '#f1f5f9',
            borderRadius: '50px',
            padding: '6px',
            width: '280px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '6px',
              left: activeTab === 'buy' ? '6px' : 'calc(50% + 3px)',
              width: 'calc(50% - 9px)',
              height: 'calc(100% - 12px)',
              backgroundColor: 'white',
              borderRadius: '40px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }} />
            <button
              onClick={() => setActiveTab('buy')}
              style={{
                flex: 1, padding: '10px 0', borderRadius: '40px',
                backgroundColor: 'transparent',
                color: activeTab === 'buy' ? '#cc0000' : '#64748b',
                fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer',
                position: 'relative', zIndex: 2, transition: 'color 0.3s'
              }}
            >
              Buy a Car
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              style={{
                flex: 1, padding: '10px 0', borderRadius: '40px',
                backgroundColor: 'transparent',
                color: activeTab === 'sell' ? '#cc0000' : '#64748b',
                fontWeight: 700, fontSize: '0.95rem', border: 'none', cursor: 'pointer',
                position: 'relative', zIndex: 2, transition: 'color 0.3s'
              }}
            >
              Sell your Car
            </button>
          </div>
        </div>

        {/* Search/Sell Forms */}
        {activeTab === 'buy' ? (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
              <CustomDropdown label="Make" options={makeOptions} value={make} onChange={setMake} />
              <CustomDropdown label="Model" options={modelOptions} value={model} onChange={setModel} />
              <CustomDropdown label="Budget" options={budgetOptions} value={budget} onChange={setBudget} />
              <CustomDropdown label="Year" options={yearOptions} value={year} onChange={setYear} />
            </div>
            <button
              onClick={handleSearch}
              style={{
                height: '54px', padding: '0 32px', borderRadius: '12px',
                backgroundColor: '#cc0000', color: 'white',
                fontWeight: 700, fontSize: '1.05rem', border: 'none',
                cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                transition: 'background 0.2s', boxShadow: '0 4px 15px rgba(204,0,0,0.2)',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#b30000'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#cc0000'}
            >
              <Search size={20} />
              Search Cars
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
              <div style={{ position: 'absolute', top: '50%', left: '16px', transform: 'translateY(-50%)' }}>
                <CarFront size={22} color="#94a3b8" />
              </div>
              <input
                type="text"
                placeholder="Enter car number (e.g. KA-01-AB-1234)"
                style={{
                  width: '100%', padding: '16px 20px 16px 52px', boxSizing: 'border-box',
                  borderRadius: '12px', border: '2px solid #e2e8f0',
                  fontSize: '1.05rem', color: '#0f172a', fontWeight: 600,
                  outline: 'none', transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = '#cc0000'}
                onBlur={e => e.target.style.borderColor = '#e2e8f0'}
              />
            </div>
            <button
              style={{
                height: '54px', padding: '0 32px', borderRadius: '12px',
                backgroundColor: '#cc0000', color: 'white',
                fontWeight: 700, fontSize: '1.05rem', border: 'none',
                cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                transition: 'background 0.2s', boxShadow: '0 4px 15px rgba(204,0,0,0.2)',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#b30000'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#cc0000'}
            >
              Get Free Valuation <ArrowRight size={20} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Hero;

