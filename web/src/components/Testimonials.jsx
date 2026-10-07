import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

const testimonialsData = [
  { id: 1, name: 'Anil Warrier', designation: 'Talent Acquisition Leader, Amazon', text: 'It has been a great ride with Automatch for the past 12 years. The quality of car, the price deals, the after sales support and their customer obsession, relationship management and genuinity in their interactions has been superb.', image: '/assets/testimonials/img_1.jpg', rating: 5 },
  { id: 2, name: 'Vivek Karat', designation: 'Product Manager - Consulting', text: 'Safe to say, Automatch team were great to work with and really went above and beyond to secure our desired car and ensure top quality. I highly recommend you talk to the experts at Automatch if you are considering buying previously owned automobile!', image: 'https://ui-avatars.com/api/?name=Vivek+Karat&size=512&background=f1f5f9&color=334155&font-size=0.33', rating: 5 },
  { id: 3, name: 'Venkatachalam S.V', designation: 'Scientist, ISRO', text: 'My journey with Automatch started in the year 2012. The courteous and exemplary behaviour of Automatch team is infectious. No wonder I turned out there again and again. You are doing good and will do so in the future.', image: 'https://ui-avatars.com/api/?name=Venkatachalam+SV&size=512&background=f1f5f9&color=334155&font-size=0.33', rating: 5 },
  { id: 4, name: 'Avinash Sathyakumar', designation: 'Director – Karnataka Automats', text: 'It was great doing business with Automatch. Have sold my 2 Innova’s to them. The whole transaction was quick and hassle free, the prices offered for my cars after all the due diligent inspections were totally acceptable and satisfying.', image: '/assets/testimonials/img_2.jpg', rating: 5 },
  { id: 5, name: 'Dr. Shekhar Rao', designation: 'Cardiologist', text: 'It gives me satisfaction to recount my car selling experience with Automatch. They were prompt in finalizing a fair price for my car which they paid by cheque. All the paperwork was taken care of by them and registration transferred without any hassle.', image: '/assets/testimonials/img_3.jpg', rating: 5 },
  { id: 6, name: 'Vikram Nagpal', designation: 'Director - The Wash Master', text: 'It was a long journey with Automatch past 12 years, I sold 4 cars and purchased 5 cars from them. When it comes to buying or selling used car, I never think about any other options, they are true professionals.', image: 'https://ui-avatars.com/api/?name=Vikram+Nagpal&size=512&background=f1f5f9&color=334155&font-size=0.33', rating: 5 },
  { id: 7, name: 'Prashanth Madavana', designation: 'Co Founder – FEDO', text: 'Nandi Toyota U Trust offers fair prices for your car with a quick and hassle free selling experience. The staff are very friendly and experienced. I have only good memories associated with Automatch.', image: '/assets/testimonials/img_4.jpg', rating: 5 },
  { id: 8, name: 'NGR Swamy', designation: 'Managing Director - Good Prints', text: 'I sold more than 5 cars in Nandi Toyota U Trust in a decade and I always refer my friends to them. No one else in Bangalore offers such a fast transaction giving the best price for your car.', image: '/assets/testimonials/img_5.jpg', rating: 5 },
  { id: 9, name: 'Ganesh Mahadevan', designation: 'Customer', text: 'Would like to really appreciate the excellent services rendered by Automatch for my Toyota corolla and Altis vehicles. The team is really very effective, efficient and provides superb customer experience.', image: 'https://ui-avatars.com/api/?name=Ganesh+Mahadevan&size=512&background=f1f5f9&color=334155&font-size=0.33', rating: 5 },
  { id: 10, name: 'P K Thomas', designation: 'Entrepreneur, Mentor & Faculty', text: 'Great professional service at a very competitive price. It has been so refreshing to find a car service centre that I can fully trust. They have been more than fair with me on diagnostic charges and fixed problems they found.', image: '/assets/testimonials/img_6.jpg', rating: 5 },
  { id: 11, name: 'Nijoe Paul', designation: 'Founder – IBS Business solutions', text: 'I had upgraded my car multiple times, but never had to look around for another car service center, after I found Popular Automatch. A very professional team who has taken care of any brand for me!', image: '/assets/testimonials/img_7.jpg', rating: 5 },
  { id: 12, name: 'Arun Raja', designation: 'Customer', text: 'Since 2018, I have been a happy customer of Automatch multi-brand car workshop. Special mention to the team displayed the highest level of professionalism, quality and integrity in their services. Their approach to problem-solving is absolutely spot on.', image: '/assets/testimonials/img_8.jpg', rating: 5 },
  { id: 13, name: 'Vijay', designation: 'Processing AM – Aditya Birla Group', text: 'Good, honest mechanics. They always get me in quickly, prices are great and the waiting area is really nice and comfy. Definitely the nicest auto shop I\'ve ever been to.', image: '/assets/testimonials/img_9.jpg', rating: 5 }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [direction, setDirection] = useState('right');
  const [data, setData] = useState(testimonialsData);

  useEffect(() => {
    // Use the hardcoded PDF data directly instead of localStorage
    setData(testimonialsData);
  }, []);

  const handleNext = () => {
    if (isFading || data.length === 0) return;
    setDirection('right');
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
      setIsFading(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isFading || data.length === 0) return;
    setDirection('left');
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
      setIsFading(false);
    }, 400);
  };

  const currentTestimonial = data[currentIndex] || data[0];

  if (!currentTestimonial) return null;

  return (
    <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(204, 0, 0, 0.03)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(0, 0, 0, 0.03)', filter: 'blur(60px)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h4 style={{ color: '#cc0000', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', fontSize: '0.9rem' }}></h4>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#222' }}>Testimonials</h2>
        </div>

        <div style={{ width: '92%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'stretch',
              background: 'white',
              borderRadius: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              height: '450px'
            }}
            className="testimonial-card-mobile"
          >
            {/* Image Side */}
            <div style={{
              flex: '0 0 45%',
              position: 'relative',
              overflow: 'hidden'
            }} className="testimonial-img-side">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  opacity: isFading ? 0 : 1,
                  transform: isFading
                    ? (direction === 'right' ? 'scale(1.1) translateX(-20px)' : 'scale(1.1) translateX(20px)')
                    : 'scale(1) translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(255,255,255,1))', width: '100%' }} className="img-gradient-overlay" />
            </div>

            {/* Content Side */}
            <div style={{
              flex: '1',
              padding: '4rem 3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              background: 'white'
            }}>
              <Quote size={80} color="rgba(204, 0, 0, 0.05)" style={{ position: 'absolute', top: '1.5rem', right: '2rem' }} />

              <div style={{
                opacity: isFading ? 0 : 1,
                transform: isFading
                  ? (direction === 'right' ? 'translateX(20px)' : 'translateX(-20px)')
                  : 'translateX(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', flex: 1 }}>
                  "{currentTestimonial.text}"
                </p>

                <div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111', marginBottom: '0.2rem' }}>
                    {currentTestimonial.name}
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: '#cc0000', fontWeight: 600 }}>
                    {currentTestimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '3rem',
            alignItems: 'center'
          }}>
            <button
              onClick={handlePrev}
              className="testimonial-nav-btn"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                color: '#222',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = '#cc0000'; e.currentTarget.style.border = '2px solid #cc0000'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = '#222'; e.currentTarget.style.border = '2px solid transparent'; }}
            >
              <ArrowLeft size={22} />
            </button>

            {/* Progress Dots */}
            <div style={{ display: 'flex', gap: '8px', margin: '0 1rem' }}>
              {data.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: currentIndex === i ? '30px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: currentIndex === i ? '#cc0000' : '#d1d5db',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    if (currentIndex === i) return;
                    setDirection(i > currentIndex ? 'right' : 'left');
                    setIsFading(true);
                    setTimeout(() => {
                      setCurrentIndex(i);
                      setIsFading(false);
                    }, 400);
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="testimonial-nav-btn"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#cc0000',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(204,0,0,0.3)',
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#a30000'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#cc0000'}
            >
              <ArrowRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
