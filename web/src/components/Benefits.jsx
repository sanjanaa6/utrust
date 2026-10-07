import React, { useState } from 'react';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState('buy');

  const buyBenefits = [
    {
      title: "Multibrand",
      desc: "Best options from every brand.",
      image: "https://nanditoyotautrust.com/assets/nandi1.png",
    },
    {
      title: "Wide Choice",
      desc: "Cars to fit every budget.",
      image: "https://nanditoyotautrust.com/assets/nandi2.png",
    },
    {
      title: "Certified With Warranty",
      desc: "Comprehensive warranty coverage.",
      image: "https://nanditoyotautrust.com/assets/nandi3.png",
    },
    {
      title: "Buy Back Assurance",
      desc: "Guaranteed value when you upgrade.",
      image: "https://nanditoyotautrust.com/assets/nandi4.png",
    },
    {
      title: "Certified Quality Assurance",
      desc: "Rigorous 203-point quality inspection.",
      image: "https://images.unsplash.com/photo-1520113412646-0428d09cb8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  const sellBenefits = [
    {
      title: "Competitive Pricing",
      desc: "Best value for your trade-in.",
      image: "https://nanditoyotautrust.com/assets/nandi5.png",
    },
    {
      title: "Instant Payment",
      desc: "Immediate cash offers.",
      image: "https://nanditoyotautrust.com/assets/nandi6.png",
    },
    {
      title: "Ownership Transfer",
      desc: "Guaranteed ownership transfer.",
      image: "	https://nanditoyotautrust.com/assets/nandi7.png",
    },
    {
      title: "Loan Settlement Help",
      desc: "Seamless loan settlement assistance.",
      image: "	https://nanditoyotautrust.com/assets/nandi8.png",
    },
    {
      title: "Toyota Reliability & Trust Factors",
      desc: "Backed by the legendary Toyota promise.",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    }
  ];

  const certifications = [
    {
      title: "Toyota Certified Signature",
      points: [
        "Toyota Vehicle upto 3 years / 50,000 Km qualify",
        "Comprehensive Warranty upto 5 years / 1,00,000 Km*",
        "Includes Ceramic coating and Extended Warranty"
      ]
    },
    {
      title: "Toyota Certified",
      points: [
        "Toyota Vehicle upto 7 years / 1.5 Lakh Km qualify",
        "Comprehensive Warranty upto 2 years / 30,000 Km*",
        "Upto 10 years* battery warranty on Certified Toyota Self-charging Hybrid Electric Vehicle"
      ]
    },
    {
      title: "Toyota Certified Blu",
      points: [
        "Toyota Vehicle upto 10 years / 1.5 Lakh Km qualify",
        "Warranty on Engine and Transmission upto 6 months / 10,000 Km*"
      ]
    },
    {
      title: "T Certified",
      points: [
        "Multi-brand vehicle upto 8 years / 1 Lakh Km qualify",
        "Warranty on Engine & Drive line upto 1 year / 15,000 kms"
      ]
    }
  ];

  const currentBenefits = activeTab === 'buy' ? buyBenefits : sellBenefits;

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2rem', color: '#222' }}>
          Benefits of Nandi Toyota <span style={{ color: '#cc0000' }}>U Trust</span>
        </h2>

        <div className="benefits-tabs" style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem', borderBottom: '1px solid #e0e0e0', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          <button
            style={{ flex: 1, padding: '1rem', fontWeight: 600, color: activeTab === 'buy' ? '#222' : '#999', borderBottom: activeTab === 'buy' ? '2px solid #cc0000' : '2px solid transparent', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button
            style={{ flex: 1, padding: '1rem', fontWeight: 600, color: activeTab === 'sell' ? '#222' : '#999', borderBottom: activeTab === 'sell' ? '2px solid #cc0000' : '2px solid transparent', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
            onClick={() => setActiveTab('sell')}
          >
            Sell
          </button>
          <button
            style={{ flex: 1, padding: '1rem', fontWeight: 600, color: activeTab === 'certifications' ? '#222' : '#999', borderBottom: activeTab === 'certifications' ? '2px solid #cc0000' : '2px solid transparent', background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
            onClick={() => setActiveTab('certifications')}
          >
            Certifications
          </button>
        </div>

        {activeTab === 'certifications' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {certifications.map((cert, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#222', margin: 0, textTransform: 'uppercase', textAlign: 'center' }}>
                    {cert.title}
                  </h3>
                </div>
                <div style={{ padding: '2rem 1.5rem', flex: 1 }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {cert.points.map((point, idx) => (
                      <li key={idx} style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.5, display: 'flex', alignItems: 'flex-start', gap: '12px', fontWeight: 500 }}>
                        <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#cc0000', marginTop: '7px' }}></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {currentBenefits.map((b, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ position: 'relative', height: '180px', backgroundColor: '#333' }}>
                  <img
                    src={b.image}
                    alt={b.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                  />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    {b.icon}
                  </div>
                </div>
                <div style={{ padding: '2rem 1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: '#222' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.5 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Benefits;
