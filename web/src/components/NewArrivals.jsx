import React, { useState, useRef } from 'react';
import { Bookmark, Search, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

const newCars = [
  {
    id: 1,
    title: '2025 Toyota Glanza V AMT',
    specs: '7531 km . Petrol . Manual . 1st owner',
    price: '10.90 Lakhs',
    location: 'Hosur Road, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/092460851f6582f98c333ea0dc7992e1.png',
    tag: 'BOOKED'
  },
  {
    id: 2,
    title: '2025 Tata Nexon Fearless Plus PS',
    specs: '15422 km . Petrol . Automatic . 1st owner',
    price: '12.85 Lakhs',
    location: 'Hosur Road, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/6bd2b03f2931ace106562bf6d6b9c719.png',
    tag: null
  },
  {
    id: 3,
    title: '2017 Maruti Suzuki Ignis ZETA PE...',
    specs: '52978 km . Petrol . Manual . 2nd owner',
    price: '4.95 Lakhs',
    location: 'Banaswadi, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/00c76a3a340301c38b96a00f6f14ed12.png',
    tag: 'SOLD'
  },
  {
    id: 4,
    title: '2016 Maruti Suzuki Baleno DELTA...',
    specs: '52814 km . Petrol . Automatic . 1st owner',
    price: '5.75 Lakhs',
    location: 'Banaswadi, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/5c5757bf3810a45e158aef7d73838a91.png',
    tag: 'BOOKED'
  }
];

const popularCars = [
  {
    id: 11,
    title: '2014 Toyota Camry HYBRID',
    specs: '64669 km . Petrol . Automatic . 1st owner',
    price: '16.26 Lakhs',
    location: 'Hosur Road, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/6613461a96272711bbd89f666b7eb6b6.png',
    tag: null
  },
  {
    id: 12,
    title: '2021 Toyota Innova Crysta 2.4 Z...',
    specs: '157967 km . Diesel . Automatic . 2nd owner',
    price: '21.75 Lakhs',
    location: 'KP Road, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/494096f92cc97d02a0e68cce195709d0.png',
    tag: 'BOOKED'
  },
  {
    id: 13,
    title: '2023 Toyota Innova Hycross 2.4 ...',
    specs: '32207 km . Petrol . Automatic . 1st owner',
    price: '19.90 Lakhs',
    location: 'KP Road, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/8da8d5a7602b9278b72c654a4543e439.png',
    tag: 'SOLD'
  },
  {
    id: 14,
    title: '2021 Toyota Innova Crysta ZX DI...',
    specs: '47824 km . Diesel . Automatic . 1st owner',
    price: '27.90 Lakhs',
    location: 'KP Road, Bangalore',
    image: 'https://luxecars.blr1.cdn.digitaloceanspaces.com/6bd2b03f2931ace106562bf6d6b9c719.png',
    tag: 'BOOKED'
  }
];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState('new');
  const scrollRef = useRef(null);

  const displayedCars = activeTab === 'new' ? newCars : popularCars;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // roughly one card width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Tabs */}
        <div className="new-arrivals-tabs" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
          <button
            style={{
              padding: '1rem 2.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: activeTab === 'new' ? '#333' : '#888',
              borderBottom: activeTab === 'new' ? '3px solid #cc0000' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setActiveTab('new')}
          >
            New Arrivals ({newCars.length})
          </button>
          <button
            style={{
              padding: '1rem 2.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              color: activeTab === 'popular' ? '#333' : '#888',
              borderBottom: activeTab === 'popular' ? '3px solid #cc0000' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => setActiveTab('popular')}
          >
            Most Popular ({popularCars.length})
          </button>
        </div>

        {/* Scroll Controls */}
        <button 
          className="hide-on-mobile"
          onClick={() => scroll('left')}
          style={{ position: 'absolute', left: '-30px', top: '55%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
        >
          <ChevronLeft size={30} color="#333" />
        </button>
        
        <button 
          className="hide-on-mobile"
          onClick={() => scroll('right')}
          style={{ position: 'absolute', right: '-30px', top: '55%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
        >
          <ChevronRight size={30} color="#333" />
        </button>

        {/* Horizontal Scrollable Grid */}
        <div 
          ref={scrollRef}
          style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            overflowX: 'auto', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            paddingBottom: '1rem'
          }}
          className="hide-scroll"
        >
          {displayedCars.map((car) => (
            <div key={car.id} style={{ 
              flex: '0 0 320px', 
              backgroundColor: '#fff', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              
              {/* Image Section */}
              <div style={{ position: 'relative', height: '200px', backgroundColor: '#e9ecef', overflow: 'hidden' }}>
                <img src={car.image} alt={car.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Search Badge (Top Right) */}
                <div style={{ 
                  position: 'absolute', top: '10px', right: '10px', width: '28px', height: '28px', 
                  backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '50%', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center' 
                }}>
                  <Search size={14} color="#555" />
                </div>

                {/* Ribbon Badge */}
                {car.tag && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '-30px',
                    backgroundColor: '#cc0000',
                    color: '#fff',
                    padding: '4px 30px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    transform: 'rotate(-45deg)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    letterSpacing: '1px'
                  }}>
                    {car.tag}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#333', lineHeight: 1.4, margin: 0, paddingRight: '1rem' }}>
                    {car.title}
                  </h3>
                  <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#666' }}>
                    <Bookmark size={20} />
                  </button>
                </div>
                
                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1.25rem' }}>{car.specs}</p>
                
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#222', marginBottom: '1.5rem', marginTop: 'auto' }}>
                  <span style={{ fontSize: '1.1rem', marginRight: '4px' }}>₹</span>
                  {car.price}
                </div>
                
                <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#555', fontSize: '0.9rem' }}>
                  <MapPin size={16} />
                  <span>{car.location}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default NewArrivals;
