import React, { useState } from 'react';
import { Search, ChevronDown, Check, Bookmark, MapPin } from 'lucide-react';

const BuyPage = ({ onCarSelect, initialFilters }) => {
  const defaultPriceRange = initialFilters?.budget 
    ? initialFilters.budget.split('-').map(Number)
    : [50000, 7000000];

  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState(defaultPriceRange);
  const [minYear, setMinYear] = useState(initialFilters?.year ? parseInt(initialFilters.year) : 0);
  
  const [filters, setFilters] = useState({
    brand: initialFilters?.make ? [initialFilters.make] : [], 
    fuelType: [], 
    color: [], 
    bodyStyle: [], 
    seats: [], 
    owner: [], 
    transmission: initialFilters?.transmission ? [initialFilters.transmission] : []
  });

  const handleToggle = (category, value) => {
    setFilters(prev => {
      const list = prev[category] || [];
      if (list.includes(value)) {
        return { ...prev, [category]: list.filter(v => v !== value) };
      }
      return { ...prev, [category]: [...list, value] };
    });
  };

  const removeFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].filter(v => v !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({ brand: [], fuelType: [], color: [], bodyStyle: [], seats: [], owner: [], transmission: [] });
    setPriceRange([50000, 7000000]);
    setMinYear(0);
  };
  
  const cars = [
    {
      id: 1, title: "2023 Toyota Glanza G", specs: "18,362 km • Petrol • Manual", price: "₹7.75 Lakh", location: "Whitefield, Bangalore", 
      image: "https://assets.spinny.com/sp-file-system/public/2026-10-04/ecb763a444b9458cb69daf8d716629f9/raw/file.JPG",
      brand: "Toyota", fuelType: "Petrol", bodyStyle: "Hatchback", owner: "1st owner", transmission: "manual", color: "#ffffff",
      priceValue: 775000, year: 2023, km: 18362, seats: "5 seater", status: "available"
    },
    {
      id: 2, title: "2019 Maruti Suzuki Vitara Brezza", specs: "74,249 km • Diesel • Manual", price: "₹8.95 Lakh", location: "KP Road, Bangalore", 
      image: "https://assets.spinny.com/sp-file-system/public/2026-10-01/e1e41ec4518b4336bf0e6436fb606d72/raw/file.JPG",
      brand: "Maruti Suzuki", fuelType: "Diesel", bodyStyle: "SUV", owner: "1st owner", transmission: "manual", color: "#ffffff",
      priceValue: 895000, year: 2019, km: 74249, seats: "5 seater", status: "sold"
    },
    {
      id: 3, title: "2021 Hyundai Creta 1.5 SX", specs: "56,801 km • Petrol • Automatic", price: "₹13 Lakh", location: "KP Road, Bangalore", 
      image: "https://assets.spinny.com/sp-file-system/public/2026-10-02/35ffbf1364e945e2a7f9677eb9bd14ad/raw/file.JPG",
      brand: "Hyundai", fuelType: "Petrol", bodyStyle: "SUV", owner: "2nd owner", transmission: "automatic", color: "#ff0000",
      priceValue: 1300000, year: 2021, km: 56801, seats: "5 seater", status: "available"
    },
    {
      id: 4, title: "2020 Honda City ZX", specs: "42,000 km • Petrol • Manual", price: "₹11.50 Lakh", location: "Indiranagar, Bangalore", 
      image: "https://mda.spinny.com/sp-file-system/public/2025-02-28/c6b0f11a31974f5da329faa0888e0e6f/raw/file.jpg",
      brand: "Honda", fuelType: "Petrol", bodyStyle: "Sedan", owner: "1st owner", transmission: "manual", color: "#000000",
      priceValue: 1150000, year: 2020, km: 42000, seats: "5 seater", status: "booked"
    },
    {
      id: 5, title: "2022 Tata Nexon EV", specs: "15,000 km • Electric • Automatic", price: "₹14.20 Lakh", location: "Whitefield, Bangalore", 
      image: "https://media.spinny.com/sp-file-system/public/2025-01-17/ce4c5ddd996046719f58b602b77ed1aa/file.JPG",
      brand: "Tata", fuelType: "Electric", bodyStyle: "SUV", owner: "1st owner", transmission: "automatic", color: "#808080",
      priceValue: 1420000, year: 2022, km: 15000, seats: "5 seater", status: "available"
    },
    {
      id: 6, title: "2018 Ford EcoSport", specs: "80,000 km • Diesel • Manual", price: "₹6.80 Lakh", location: "Koramangala, Bangalore", 
      image: "https://assets.spinny.com/sp-file-system/public/2026-07-20/439b3aa021974610a54d528d7eee67e4/raw/file.JPG",
      brand: "Ford", fuelType: "Diesel", bodyStyle: "SUV", owner: "2nd owner", transmission: "manual", color: "#0000ff",
      priceValue: 680000, year: 2018, km: 80000, seats: "5 seater", status: "available"
    }
  ];

  const filteredCars = cars.filter(car => {
    if (car.priceValue < priceRange[0] || car.priceValue > priceRange[1]) return false;
    if (minYear > 0 && car.year < minYear) return false;
    
    if (filters.brand.length > 0 && !filters.brand.includes(car.brand)) return false;
    if (filters.fuelType.length > 0 && !filters.fuelType.includes(car.fuelType)) return false;
    if (filters.bodyStyle.length > 0 && !filters.bodyStyle.includes(car.bodyStyle)) return false;
    if (filters.owner.length > 0 && !filters.owner.includes(car.owner)) return false;
    if (filters.transmission.length > 0 && !filters.transmission.includes(car.transmission)) return false;
    if (filters.color.length > 0 && !filters.color.includes(car.color)) return false;
    if (filters.seats.length > 0 && !filters.seats.includes(car.seats)) return false;
    
    return true;
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === 'price_asc') return a.priceValue - b.priceValue;
    if (sortBy === 'price_desc') return b.priceValue - a.priceValue;
    if (sortBy === 'year_desc' || sortBy === 'newest') return b.year - a.year;
    return 0;
  });

  const getCount = (key, value) => cars.filter(c => c[key] === value).length;

  const brands = ['Toyota', 'Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Honda', 'Kia', 'Renault', 'Volkswagen', 'Skoda', 'Ford', 'Jeep'].map(name => ({ name, count: getCount('brand', name) }));
  const fuelTypes = ['LPG', 'Hybrid', 'Electric', 'Diesel', 'Petrol'].map(name => ({ name, count: getCount('fuelType', name) }));
  const bodyStyles = ['Hatchback', 'Sedan', 'SUV', 'MUV', 'Compact Sedan', 'Compact SUV', 'Pickup', 'Coupe', 'Convertible', 'Station Wagon', 'Crossover', 'MPV', 'Van', 'Microcar'].map(name => ({ name, count: getCount('bodyStyle', name) }));
  const seats = ['5 seater', '6 seater', '7 seater', '8 seater'].map(name => ({ name, count: getCount('seats', name) }));
  const owners = ['1st owner', '2nd owner', '3rd owner', 'Above 4'].map(name => ({ name, count: getCount('owner', name) }));
  const transmissions = ['automatic', 'manual'].map(name => ({ name, count: getCount('transmission', name) }));

  const activeFilterPills = Object.entries(filters).flatMap(([category, values]) => 
    values.map(value => ({ category, value }))
  );

  const colorSwatches = [
    '#808080', '#ffd700', '#ffb6c1', '#8b0000', '#800080',
    '#808000', '#e6e6fa', '#008080', '#00008b', '#800000',
    '#ff8c00', '#00ff00', '#9932cc', '#ffff00', '#d2b48c',
    '#000000', '#ff0000', '#0000ff', '#d3d3d3', '#a9a9a9',
    '#ffffff'
  ];
  
  const sortMap = {
    'relevance': 'Relevance',
    'price_asc': 'Price - low to high',
    'price_desc': 'Price - high to low',
    'year_desc': 'Year - new to old',
    'newest': 'Newest first'
  };

  const FilterSection = ({ title, category, items, searchable }) => (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: '#222' }}>{title}</h3>
      {searchable && (
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
          <Search size={14} color="#888" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search" 
            style={{ width: '100%', padding: '8px 10px 8px 30px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '0.85rem', outline: 'none' }}
          />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {items.map((item, i) => (
          <label key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', opacity: item.count === 0 ? 0.5 : 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input 
                type="checkbox" 
                checked={filters[category]?.includes(item.name) || false}
                onChange={() => handleToggle(category, item.name)}
                style={{ width: '15px', height: '15px', accentColor: '#cc0000', cursor: 'pointer' }} 
              />
              <span style={{ fontSize: '0.9rem', color: '#444' }}>{item.name}</span>
            </div>
            <span style={{ fontSize: '0.85rem', color: '#888' }}>({item.count})</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ backgroundColor: '#f4f5f7', minHeight: '100vh', paddingBottom: '5rem' }}>
      
      {/* CSS for Dual Slider */}
      <style>{`
        .dual-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
        }
        .dual-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          pointer-events: auto;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #cc0000;
          border: 3px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          cursor: pointer;
          margin-top: -7px;
        }
        .dual-slider::-moz-range-thumb {
          pointer-events: auto;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #cc0000;
          border: 3px solid white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          cursor: pointer;
          border: none;
        }
        .dual-slider::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          background: transparent;
        }
      `}</style>

      <div className="container" style={{ paddingTop: '2rem' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>Home</span>
          <span style={{ color: '#aaa' }}>&gt;</span>
          <span style={{ fontWeight: 600, color: '#222' }}>Buy Car</span>
        </div>

        {/* Top Active Filters Area */}
        {activeFilterPills.length > 0 && (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              onClick={clearAllFilters}
              style={{ backgroundColor: '#cc0000', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 600 }}
            >
              Clear All
            </button>
            {activeFilterPills.map((filter, i) => (
              <div key={i} style={{ padding: '6px 12px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ textTransform: 'capitalize' }}>
                  {filter.category === 'color' ? 'Color' : filter.value}
                </span>
                <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => removeFilter(filter.category, filter.value)}>×</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
          
          {/* Scrollable Sidebar */}
          <div style={{ 
            flex: '0 0 280px', backgroundColor: 'white', borderRadius: '12px', padding: '1.5rem', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)', position: 'sticky', top: '20px', 
            height: 'calc(100vh - 40px)', overflowY: 'auto'
          }}>
            
            {/* Price Range */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.5rem', color: '#222' }}>Price Range</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center', gap: '10px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <span style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.8rem', color: '#555' }}>₹</span>
                  <input 
                    type="number" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    style={{ width: '100%', padding: '6px 6px 6px 20px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>
                <span style={{ color: '#888' }}>-</span>
                <div style={{ position: 'relative', flex: 1 }}>
                  <span style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.8rem', color: '#555' }}>₹</span>
                  <input 
                    type="number" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 7000000])}
                    style={{ width: '100%', padding: '6px 6px 6px 20px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '0.85rem', outline: 'none' }}
                  />
                </div>
              </div>
              
              {/* Dual Thumb Range Slider */}
              <div style={{ position: 'relative', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', marginBottom: '0.8rem', marginTop: '1.5rem' }}>
                <div style={{ 
                  position: 'absolute', 
                  left: `${((priceRange[0] - 50000) / (7000000 - 50000)) * 100}%`, 
                  right: `${100 - ((priceRange[1] - 50000) / (7000000 - 50000)) * 100}%`, 
                  top: 0, bottom: 0, backgroundColor: '#cc0000', borderRadius: '3px' 
                }}></div>
                <input 
                  type="range" min="50000" max="7000000" step="10000"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Math.min(parseInt(e.target.value), priceRange[1]), priceRange[1]])}
                  style={{ position: 'absolute', width: '100%', top: '0', pointerEvents: 'none', zIndex: 3 }}
                  className="dual-slider"
                />
                <input 
                  type="range" min="50000" max="7000000" step="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Math.max(parseInt(e.target.value), priceRange[0])])}
                  style={{ position: 'absolute', width: '100%', top: '0', pointerEvents: 'none', zIndex: 4 }}
                  className="dual-slider"
                />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888' }}>
                <span>Minimum</span>
                <span>Maximum</span>
              </div>
            </div>

            {/* Dynamic Filter Sections */}
            <FilterSection title="Make + Model" category="brand" items={brands} searchable={true} />
            <FilterSection title="Fuel Type" category="fuelType" items={fuelTypes} />
            
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: '#222' }}>Color</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
                {colorSwatches.map((color, i) => {
                  const isSelected = filters.color.includes(color);
                  return (
                    <div 
                      key={i}
                      onClick={() => handleToggle('color', color)}
                      style={{
                        width: '32px', height: '32px', borderRadius: '8px', 
                        backgroundColor: color, cursor: 'pointer',
                        border: isSelected ? '3px solid #cc0000' : color === '#ffffff' ? '1px solid #ddd' : 'none',
                        boxShadow: isSelected ? '0 0 0 2px white inset' : 'none'
                      }}
                    />
                  );
                })}
              </div>
            </div>
            
            <FilterSection title="Body Style" category="bodyStyle" items={bodyStyles} />
            <FilterSection title="Seats" category="seats" items={seats} />
            <FilterSection title="Owner" category="owner" items={owners} />
            <FilterSection title="Transmission" category="transmission" items={transmissions} />
          </div>

          {/* Main Content Area */}
          <div style={{ flex: 1 }}>
            
            {/* Sorting Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#222' }}>
                {sortedCars.length} Cars Found
              </div>
              <div style={{ position: 'relative' }}>
                <button 
                  onClick={() => setSortOpen(!sortOpen)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'white', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '0.9rem', color: '#555', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                >
                  Sort By : {sortMap[sortBy]} <ChevronDown size={16} />
                </button>
                
                {sortOpen && (
                  <div style={{ position: 'absolute', top: '110%', right: 0, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '220px', zIndex: 10, padding: '0.5rem 0' }}>
                    {Object.entries(sortMap).map(([key, label]) => (
                      <div 
                        key={key}
                        onClick={() => { setSortBy(key); setSortOpen(false); }}
                        style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', backgroundColor: sortBy === key ? '#f9f9f9' : 'white', fontWeight: sortBy === key ? 600 : 400, fontSize: '0.9rem', color: '#555', borderBottom: '1px solid #f1f1f1' }}
                      >
                        {label} {sortBy === key && <Check size={16} color="#222" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid or Empty State */}
            {sortedCars.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {sortedCars.map(car => (
                  <div 
                    key={car.id} 
                    onClick={() => onCarSelect && onCarSelect(car)} 
                    style={{ 
                      backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', 
                      boxShadow: '0 4px 15px rgba(0,0,0,0.06)', cursor: 'pointer', 
                      border: '1px solid #eee', display: 'flex', flexDirection: 'column'
                    }}
                  >
                    <div style={{ height: '210px', position: 'relative', backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
                      <img src={car.image} alt={car.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: car.status === 'sold' ? 0.7 : 1, filter: car.status === 'sold' ? 'grayscale(30%)' : 'none' }} />
                      
                      {car.status === 'sold' && (
                        <div style={{ position: 'absolute', top: '25px', left: '-35px', transform: 'rotate(-45deg)', backgroundColor: '#d30000', color: 'white', padding: '6px 45px', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', zIndex: 5, boxShadow: '0 4px 10px rgba(0,0,0,0.3)', textAlign: 'center' }}>
                          SOLD
                        </div>
                      )}
                      
                      {car.status === 'booked' && (
                        <div style={{ position: 'absolute', top: '25px', left: '-35px', transform: 'rotate(-45deg)', backgroundColor: '#d30000', color: 'white', padding: '6px 45px', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '1px', zIndex: 5, boxShadow: '0 4px 10px rgba(0,0,0,0.3)', textAlign: 'center' }}>
                          BOOKED
                        </div>
                      )}


                      <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(255,255,255,0.95)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', cursor: 'pointer', zIndex: 2 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      </div>
                    </div>
                    
                    <div style={{ padding: '1rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111', marginBottom: '0.4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {car.title}
                      </h4>
                      
                      <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem', fontWeight: 500 }}>
                        {car.specs}
                      </p>
                      
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111', marginBottom: '0.2rem' }}>
                        {car.price}
                      </div>
                      
                      <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                        EMI from ₹14,500/m
                      </div>
                      
                      <div style={{ display: 'inline-block', backgroundColor: '#fff5f5', color: '#cc0000', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, border: '1px dashed #cc0000', marginBottom: '1rem', alignSelf: 'flex-start' }}>
                        🎁 Up to ₹20,000 Exchange Bonus
                      </div>
                      
                      <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 'auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: '#666', fontWeight: 500 }}>
                          <MapPin size={14} color="#cc0000" /> {car.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '4rem 2rem', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔔</div>
                <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.1rem' }}>We'll notify you when similar cars are<br/>added to our inventory</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '2.5rem', backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', maxWidth: '500px', margin: '0 auto 2.5rem auto' }}>
                  {activeFilterPills.map((filter, i) => (
                    <div key={i} style={{ padding: '8px 16px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ textTransform: 'capitalize' }}>
                        {filter.category === 'color' ? 'Color' : filter.value}
                      </span>
                      <span style={{ cursor: 'pointer', fontWeight: 'bold', color: '#888' }} onClick={() => removeFilter(filter.category, filter.value)}>×</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '400px', margin: '0 auto' }}>
                  <input type="email" placeholder="Enter your email id" style={{ flex: 1, padding: '12px 15px', borderRadius: '6px', border: '1px solid #ddd', outline: 'none' }} />
                  <button style={{ backgroundColor: '#cc0000', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', fontWeight: 600, cursor: 'pointer' }}>Notify Me</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
