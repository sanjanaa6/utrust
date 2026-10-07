import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What happens if I have a problem with a car shortly after buying it?",
      a: "Every UTrust certified car comes with a comprehensive warranty. If you experience any issues within the warranty period, simply bring it to our authorized service center and we will fix it at no additional cost."
    },
    {
      q: "Can I have the car inspected by my own mechanic before purchasing?",
      a: "Yes! While all our cars undergo a rigorous 200-point inspection by certified engineers, we encourage complete transparency. You are welcome to bring a trusted mechanic for an independent inspection."
    },
    {
      q: "What documents do I need to sell my car to you?",
      a: "You'll need the original RC (Registration Certificate), active insurance policy, PUC certificate, duplicate keys, and your KYC documents (Aadhaar/PAN). If the car is on loan, the NOC from the bank is required."
    },
    {
      q: "How do you determine the value of my car?",
      a: "We use a proprietary algorithmic pricing model combined with a physical inspection. We factor in the car's age, mileage, condition, service history, and real-time market demand to offer you the best price."
    },
    {
      q: "Do you handle the paperwork and legal aspects of selling my car?",
      a: "Absolutely. We manage 100% of the paperwork, including RC transfer, RTO formalities, and loan clearance if applicable. You just sign the documents and get paid."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#fcfdfd', fontFamily: "'Inter', sans-serif" }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="faq-heading" style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-1px' }}>
            Frequently Asked <span style={{ color: '#cc0000' }}>Questions</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to know about buying or selling a car with UTrust. Can't find the answer? Feel free to contact our support team.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => toggleFAQ(index)}
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: isOpen ? '1px solid #cc0000' : '1px solid #e2e8f0',
                  boxShadow: isOpen ? '0 10px 30px rgba(204,0,0,0.05)' : '0 4px 6px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  padding: '1.5rem', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center'
                }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: isOpen ? '#cc0000' : '#1e293b', margin: 0, transition: 'color 0.3s ease', paddingRight: '20px' }}>
                    {faq.q}
                  </h3>
                  <div style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: isOpen ? '#fff5f5' : '#f1f5f9',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}>
                    <ChevronDown 
                      size={20} 
                      color={isOpen ? "#cc0000" : "#64748b"} 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.3s ease' 
                      }} 
                    />
                  </div>
                </div>
                
                <div style={{ 
                  maxHeight: isOpen ? '200px' : '0', 
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  padding: isOpen ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem'
                }}>
                  <p style={{ margin: 0, color: '#475569', fontSize: '1rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
