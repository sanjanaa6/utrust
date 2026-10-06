import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const buyVideos = [
  { id: 1, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4", title: "Customer buying Glanza", poster: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/person-bicycle-car-detection.mp4", title: "Innova Crysta Delivery", poster: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/driver-action-recognition.mp4", title: "Great Buying Experience", poster: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4", title: "Toyota Fortuner Handover", poster: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/person-bicycle-car-detection.mp4", title: "Smooth Loan Process", poster: "https://images.unsplash.com/photo-1503376713915-dce15c0e4474?auto=format&fit=crop&w=1200&q=80" }
];

const sellVideos = [
  { id: 6, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/driver-action-recognition.mp4", title: "Best Price for my Car", poster: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80" },
  { id: 7, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4", title: "Instant Payment Review", poster: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80" },
  { id: 8, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/person-bicycle-car-detection.mp4", title: "Sold my Swift easily", poster: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80" },
  { id: 9, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/driver-action-recognition.mp4", title: "Hassle-free selling", poster: "https://images.unsplash.com/photo-1502877338535-494e50821d3f?auto=format&fit=crop&w=1200&q=80" },
  { id: 10, src: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4", title: "Transparent Evaluation", poster: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80" }
];

const HappyCustomers = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const displayedVideos = activeTab === 'buy' ? buyVideos : sellVideos;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log("Autoplay was prevented:", e));
    }
  }, [currentIndex, activeTab]);

  // Handle tab switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0); // Reset index when switching tabs
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayedVideos.length) % displayedVideos.length);
  };

  const currentVideo = displayedVideos[currentIndex];

  return (
    <section style={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem', position: 'relative' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '3rem', color: '#222' }}>
          Happy <span style={{ color: '#cc0000' }}>Customers</span>
        </h2>

        {/* Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', borderBottom: '1px solid #ddd' }}>
          <button
            style={{
              padding: '1rem 3rem',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: activeTab === 'buy' ? '#333' : '#888',
              borderBottom: activeTab === 'buy' ? '3px solid #cc0000' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => handleTabSwitch('buy')}
          >
            Buy
          </button>
          <button
            style={{
              padding: '1rem 3rem',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              fontWeight: 600,
              color: activeTab === 'sell' ? '#333' : '#888',
              borderBottom: activeTab === 'sell' ? '3px solid #cc0000' : '3px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onClick={() => handleTabSwitch('sell')}
          >
            Sell
          </button>
        </div>

        {/* Video Slider Area */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* Left Arrow */}
          <button
            className="happy-arrow-left"
            onClick={handlePrev}
            style={{
              position: 'absolute', left: '10px', background: 'rgba(255,255,255,0.7)', borderRadius: '50%', border: 'none',
              cursor: 'pointer', zIndex: 10, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <ChevronLeft size={30} color="#333" />
          </button>

          {/* Current Video Card */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            width: '100%',
            maxWidth: '750px', // Wider landscape player
            display: 'flex',
            flexDirection: 'column',
            transition: 'opacity 0.3s ease-in-out'
          }}>
            <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#000', position: 'relative' }}>
              <video
                ref={videoRef}
                src={currentVideo.src}
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                poster={currentVideo.poster}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#333', margin: 0 }}>
                {currentVideo.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
                Video {currentIndex + 1} of {displayedVideos.length}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="happy-arrow-right"
            onClick={handleNext}
            style={{
              position: 'absolute', right: '10px', background: 'rgba(255,255,255,0.7)', borderRadius: '50%', border: 'none',
              cursor: 'pointer', zIndex: 10, padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <ChevronRight size={30} color="#333" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
