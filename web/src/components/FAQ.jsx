import React from 'react';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    "What happens if I have a problem with a car shortly after buying it?",
    "Can I have the car inspected by a mechanic before purchasing?",
    "What documents do I need to sell my car to you?",
    "How do you determine the value of my car?",
    "Do you handle the paperwork and legal aspects of selling my car?"
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '4rem', color: '#222' }}>
          Frequently Asked <span style={{ color: '#cc0000' }}>Questions</span>
        </h2>
        
        <div>
          {faqs.map((q, index) => (
            <div 
              key={index} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.5rem 0', 
                borderBottom: '1px solid #e0e0e0',
                cursor: 'pointer'
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: '#222', margin: 0 }}>
                {q}
              </h3>
              <Plus size={24} color="#222" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
