import React, { useState } from 'react';
import { Bookmark, Search, MapPin, ChevronRight } from 'lucide-react';

const newCars = [
  {
    id: 1,
    title: '2025 Toyota Glanza V AMT',
    specs: '7531 km . Petrol . Manual . 1st owner',
    price: '10.90 Lakhs',
    location: 'Hosur Road, Bangalore',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: '2025 Tata Nexon Fearless Plus PS',
    specs: '15422 km . Petrol . Automatic . 1st owner',
    price: '12.85 Lakhs',
    location: 'Hosur Road, Bangalore',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: '2017 Maruti Suzuki Ignis ZETA PE...',
    specs: '52978 km . Petrol . Manual . 2nd owner',
    price: '4.95 Lakhs',
    location: 'Banaswadi, Bangalore',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: '2016 Maruti Suzuki Baleno DELTA...',
    specs: '52814 km . Petrol . Automatic . 1st owner',
    price: '5.75 Lakhs',
    location: 'Banaswadi, Bangalore',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const popularCars = [
  {
    id: 11,
    title: '2014 Toyota Camry HYBRID',
    specs: '64669 km . Petrol . Automatic . 1st owner',
    price: '16.26 Lakhs',
    location: 'Hosur Road, Bangalore',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    title: '2021 Toyota Innova Crysta 2.4 Z...',
    specs: '157967 km . Diesel . Automatic . 2nd owner',
    price: '21.75 Lakhs',
    location: 'KP Road, Bangalore',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    title: '2023 Toyota Innova Hycross 2.4 ...',
    specs: '32207 km . Petrol . Automatic . 1st owner',
    price: '19.90 Lakhs',
    location: 'KP Road, Bangalore',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    title: '2021 Toyota Innova Crysta ZX DI...',
    specs: '47824 km . Diesel . Automatic . 1st owner',
    price: '27.90 Lakhs',
    location: 'KP Road, Bangalore',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const brands = [
  "Toyota", "Maruti Suzuki", "Hyundai", "Ford", 
  "Honda", "Jeep", "Kia", "Mahindra", 
  "Renault", "Skoda", "Tata", "Volkswagen"
];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState('new'); // 'new' | 'popular'

  const displayedCars = activeTab === 'new' ? newCars : popularCars;

  return (
    <section className="cars-section">
      <div className="container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'new' ? 'active' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            New Arrivals (13)
          </button>
          <button 
            className={`tab ${activeTab === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveTab('popular')}
          >
            Most Popular (31)
          </button>
        </div>

        <div className="cars-grid">
          {displayedCars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <img src={car.image} alt={car.title} className="car-image" />
                <div className="search-badge">
                  <Search size={14} />
                </div>
              </div>
              <div className="car-details">
                <div className="car-title-row">
                  <h3 className="car-title">{car.title}</h3>
                  <button className="bookmark-btn">
                    <Bookmark size={20} />
                  </button>
                </div>
                <p className="car-specs">{car.specs}</p>
                <div className="car-price">
                  <span>₹</span> {car.price}
                </div>
                <div className="car-footer">
                  <MapPin size={14} />
                  <span>{car.location}</span>
                </div>
              </div>
            </div>
          ))}
          
          <button className="slider-arrow">
            <ChevronRight size={24} color="#333" />
          </button>
        </div>

        {/* Brands Section */}
        <div style={{ marginTop: '5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: '1rem'
          }}>
            {brands.map(brand => (
              <div 
                key={brand}
                style={{
                  backgroundColor: '#fff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '500',
                  color: '#222',
                  cursor: 'pointer',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#cc0000';
                  e.currentTarget.style.color = '#cc0000';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0';
                  e.currentTarget.style.color = '#222';
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
