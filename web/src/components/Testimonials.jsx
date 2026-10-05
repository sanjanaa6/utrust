import React from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '4rem', color: '#222' }}>
          Testimonials
        </h2>
        
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1000px', margin: '0 auto', gap: '4rem' }}>
          
          <div style={{ flex: '0 0 450px', height: '300px', borderRadius: '30px 100px 30px 30px', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Satisfied User" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              I sold more than 5 cars in Nandi Toyota U TRUST in a decade and I always refer my friends to them. No one else in Bangalore offers such a fast transaction giving the best price for your car.
            </p>
            
            <div style={{ display: 'flex', gap: '0.3rem', color: '#fbbf24', marginBottom: '2rem' }}>
              <Star size={20} fill="#fbbf24" />
              <Star size={20} fill="#fbbf24" />
              <Star size={20} fill="#fbbf24" />
              <Star size={20} fill="#fbbf24" />
              <Star size={20} fill="#fbbf24" />
            </div>
            
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#222', marginBottom: '0.3rem' }}>MGR Swamy</h4>
            <p style={{ fontSize: '1rem', color: '#777', marginBottom: '2.5rem' }}>Managing Director - Good Prints</p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ width: '50px', height: '50px', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', color: '#888' }}>
                <ArrowLeft size={20} />
              </button>
              <button style={{ width: '50px', height: '50px', borderRadius: '8px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#cc0000', color: 'white' }}>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
