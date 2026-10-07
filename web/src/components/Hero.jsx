import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Check, ArrowRight, CarFront, LayoutTemplate } from 'lucide-react';
import carousel1 from '../assets/Carousel1.jpeg';
import carousel2 from '../assets/Carousel2.jpeg';
import carousel3 from '../assets/Carousel3.jpeg';

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
  const [carouselLayout, setCarouselLayout] = useState('full');
  const [budget, setBudget] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const defaultImages = [
    {
      src: carousel1,
      heading: "Find Your Dream Car",
      subHeading: "PREMIUM SELECTION",
      offer: "Up to ₹50,000 Off",
      description: "Explore our wide range of certified pre-owned cars.",
      buttonText: "Browse Cars",
      color: "#ffffff",
      accentColor: "#cc0000",
      align: "left"
    },
    {
      src: carousel2,
      heading: "Sell Your Car in 1 Hour",
      subHeading: "BEST PRICE GUARANTEED",
      offer: "Free Valuation",
      description: "Get the best market price for your used car with immediate payment.",
      buttonText: "Sell Now",
      color: "#ffffff",
      accentColor: "#cc0000",
      align: "left"
    },
    {
      src: carousel3,
      heading: "Trusted by Thousands",
      subHeading: "CERTIFIED PRE-OWNED",
      offer: "1 Year Warranty",
      description: "Every car undergoes a rigorous 160-point quality check.",
      buttonText: "Learn More",
      color: "#ffffff",
      accentColor: "#cc0000",
      align: "left"
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
  }; const renderBuySellCard = (layoutMode) => {
    const isSplit = layoutMode === 'split' || layoutMode === 'split-reverse';
    const isCreative = layoutMode === 'creative';
    const isFull = layoutMode === 'full';
    
    return (
    <div className="hero-floating-section" style={{
      width: isSplit || isCreative ? '100%' : '80%',
      maxWidth: isSplit || isCreative ? 'none' : '950px',
      backgroundColor: isCreative ? 'rgba(255, 255, 255, 0.98)' : 'white',
      borderRadius: '24px',
      padding: isSplit || isCreative ? '2rem' : '1.5rem 2rem',
      boxShadow: isCreative ? '25px 25px 50px rgba(0,0,0,0.5)' : (isSplit ? '0 10px 30px -10px rgba(0,0,0,0.1)' : '0 25px 50px -12px rgba(0,0,0,0.15)'),
      marginTop: isSplit || isCreative ? '0' : '-50px',
      position: 'relative',
      zIndex: 10,
      display: 'flex', flexDirection: 'column', gap: isFull ? '1rem' : '1.5rem',
      border: '1px solid rgba(0,0,0,0.05)',
      transform: isCreative ? 'rotateY(8deg) scale(0.95)' : 'none',
      transition: 'all 0.5s ease'
    }}>
      {/* Header inside floating section */}
      <div className="hero-floating-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #f1f5f9', paddingBottom: isFull ? '1rem' : '1.5rem', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="hero-floating-title" style={{ fontSize: isFull ? '2rem' : '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, marginBottom: '0.5rem', letterSpacing: '-1px' }}>
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
        <div className="hero-toggle-pill" style={{
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
        <div className="hero-search-form" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="hero-dropdown-grid" style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
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
        <div className="hero-search-form" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="hero-dropdown-grid" style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
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
            Sell <ArrowRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fcfdfd', paddingBottom: '4rem' }}>

      {/* Carousel Container */}
      <div className="hero-carousel-container" style={{
        width: carouselLayout === 'full' ? '90%' : '96%', 
        maxWidth: carouselLayout === 'full' ? '1400px' : '1600px',
        borderRadius: '30px', marginTop: '20px',
        height: carouselLayout === 'full' ? '65vh' : (carouselLayout === 'creative' ? '80vh' : 'auto'),
        minHeight: carouselLayout === 'full' ? '500px' : (carouselLayout === 'creative' ? '600px' : 'auto'),
        maxHeight: (carouselLayout === 'full' || carouselLayout === 'creative') ? '900px' : 'none',
        position: 'relative',
        overflow: carouselLayout === 'creative' ? 'visible' : 'hidden',
        display: (carouselLayout === 'split' || carouselLayout === 'split-reverse' || carouselLayout === 'creative') ? 'flex' : 'block',
        backgroundColor: carouselLayout === 'creative' ? '#020617' : 'transparent',
        perspective: carouselLayout === 'creative' ? '2000px' : 'none',
        alignItems: 'stretch',
        justifyContent: carouselLayout === 'creative' ? 'center' : 'space-between',
        gap: (carouselLayout === 'split' || carouselLayout === 'split-reverse') ? '2rem' : (carouselLayout === 'creative' ? '2rem' : '0')
      }}>

        {/* Layout Toggle Button */}
        <button
          onClick={() => {
            setCarouselLayout(prev => {
              if (prev === 'full') return 'split';
              if (prev === 'split') return 'split-reverse';
              if (prev === 'split-reverse') return 'creative';
              return 'full';
            })
          }}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 100,
            backgroundColor: carouselLayout === 'creative' ? 'rgba(255,255,255,0.1)' : 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          title="Change Layout Theme"
        >
          <LayoutTemplate size={20} color={carouselLayout === 'creative' ? '#ffffff' : '#cc0000'} />
        </button>

        {/* Left Panel for Split Layout (Buy/Sell Card) */}
        {carouselLayout === 'split' && (
          <div style={{ flex: '0 0 45%', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
            {renderBuySellCard('split')}
          </div>
        )}

        {/* Left Panel for Creative 3D Layout (Buy/Sell Card) */}
        {carouselLayout === 'creative' && (
          <div style={{ flex: '0 0 40%', paddingLeft: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10, transformStyle: 'preserve-3d' }}>
            {renderBuySellCard('creative')}
          </div>
        )}

        {/* Carousel Slider */}
        <div style={
          carouselLayout === 'creative' 
          ? {
              flex: '0 0 55%',
              height: '80%',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              transform: 'rotateY(-12deg) scale(0.95)',
              boxShadow: '-30px 30px 60px rgba(0,0,0,0.6)',
              transition: 'all 0.5s ease',
              marginRight: '2rem'
            }
          : {
              flex: (carouselLayout === 'split' || carouselLayout === 'split-reverse') ? '1' : 'none',
              position: (carouselLayout === 'split' || carouselLayout === 'split-reverse') ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: (carouselLayout === 'split' || carouselLayout === 'split-reverse') ? 'auto' : '100%',
              borderRadius: (carouselLayout === 'split' || carouselLayout === 'split-reverse') ? '24px' : '0',
              overflow: 'hidden'
            }
        }>
          <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transition: 'transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1)',
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
            {heroImages.map((item, idx) => (
              <div
                key={idx}
                style={{
                  flex: '0 0 100%',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <img
                  src={typeof item === 'string' ? item : item.src}
                  alt={`Slide ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Bottom gradient for indicators */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20%', background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)' }} />
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div style={{ position: 'absolute', bottom: carouselLayout === 'full' ? '80px' : '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 2 }}>
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

        {/* Right Panel for Split-Reverse Layout (Buy/Sell Card) */}
        {carouselLayout === 'split-reverse' && (
          <div style={{ flex: '0 0 45%', padding: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
            {renderBuySellCard('split-reverse')}
          </div>
        )}
      </div>

      {/* Buy/Sell Floating Section for Full Layout */}
      {carouselLayout === 'full' && renderBuySellCard('full')}

    </div>
  );
};

export default Hero;

