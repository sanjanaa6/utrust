import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageSquare } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 Welcome to Nandi Toyota U Trust. How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking delay
    setTimeout(() => {
      let botResponse = "I'm a virtual assistant. For detailed inquiries, please call us at +91 98450 44779 or leave your contact details here.";
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello again! Are you looking to buy or sell a car today?";
      } else if (lowerInput.includes('buy')) {
        botResponse = "Awesome! We have a great collection of certified pre-owned cars. Check out our 'Buy' section in the navigation menu to see our latest inventory.";
      } else if (lowerInput.includes('sell')) {
        botResponse = "We offer the best market prices for your used car with instant payment! Navigate to our 'Sell' page to get a quick valuation.";
      } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        botResponse = "Our prices vary based on the model, year, and condition. You can use the search filters on the Buy page to find cars within your budget!";
      } else if (lowerInput.includes('location') || lowerInput.includes('address') || lowerInput.includes('where')) {
        botResponse = "We have multiple branches in Bangalore, including Hosur Road and KP Road. Would you like to schedule a visit?";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div 
        onClick={() => setIsOpen(true)}
        style={{
          width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#fff', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)', display: isOpen ? 'none' : 'flex', 
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflow: 'hidden', position: 'relative'
        }} 
        title="Chat with us"
      >
        <img 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
          alt="Chat Assistant" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', bottom: '5px', right: '5px', width: '12px', height: '12px', 
          backgroundColor: '#00cc44', borderRadius: '50%', border: '2px solid white'
        }}></div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '30px',
          width: '350px',
          height: '500px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 9999
        }}>
          {/* Header */}
          <div style={{ 
            backgroundColor: '#cc0000', 
            padding: '1rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.3)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Assistant" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600 }}>Priya</h3>
                <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Virtual Assistant</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '5px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div style={{ 
            flex: 1, 
            padding: '1rem', 
            overflowY: 'auto', 
            backgroundColor: '#f8f9fa',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? '#cc0000' : '#fff',
                  color: msg.sender === 'user' ? '#fff' : '#333',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                  maxWidth: '80%',
                  fontSize: '0.9rem',
                  lineHeight: 1.4,
                  boxShadow: msg.sender === 'bot' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none'
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', backgroundColor: '#fff', padding: '10px 14px', borderRadius: '16px', borderBottomLeftRadius: '4px', fontSize: '0.9rem', color: '#888', display: 'flex', gap: '4px', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                <span className="dot-typing">●</span>
                <span className="dot-typing" style={{ animationDelay: '0.2s' }}>●</span>
                <span className="dot-typing" style={{ animationDelay: '0.4s' }}>●</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ 
            padding: '1rem', 
            backgroundColor: '#fff', 
            borderTop: '1px solid #eee',
            display: 'flex',
            gap: '10px'
          }}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              style={{ 
                flex: 1, 
                padding: '10px 15px', 
                borderRadius: '20px', 
                border: '1px solid #ddd',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim()}
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                backgroundColor: inputValue.trim() ? '#cc0000' : '#f0f0f0', 
                color: inputValue.trim() ? '#fff' : '#aaa',
                border: 'none',
                cursor: inputValue.trim() ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
            >
              <Send size={18} style={{ marginLeft: '2px' }} />
            </button>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .dot-typing {
          animation: blink 1.4s infinite both;
        }
      `}} />
    </>
  );
};

export default Chatbot;
