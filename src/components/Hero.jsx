import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({ activeSection, onNavigate }) {
  const roles = [
    "Graphic Designer",
    "Business Owner",
    "Business Manager",
    "Social Media Manager",
    "Web Developer",
    "Mobile Developer",
    "Robotics Engineer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentFullRole.slice(0, displayText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait 2s before deleting
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-wrapper">
      <div className="blob-bg" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="blob-bg" style={{ bottom: '-15%', right: '-10%', background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(255,255,255,0) 70%)' }}></div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="hero-greeting">Hello World, I'm</span>
            
            <h1 className="hero-title">
              Raian Lee <br />
              <span className="hero-name">D. Vallejo</span>
            </h1>
            
            <div className="hero-roles">
              <span>{displayText}</span>
              <span className="hero-roles-cursor"></span>
            </div>
            
            <p className="hero-description">
              A 20-year-old entrepreneur, developer, and designer from Aklan, Philippines. Currently studying Computer Science at <strong>Aklan State University - Ibajay Campus</strong>. I build digital experiences, manage business operations, and program robotics systems in hopes to become a better version of myself and to live the life I want to live.
            </p>
            
            <div className="hero-cta">
              <button onClick={() => onNavigate('ventures')} className="btn btn-primary">
                View My Ventures
                <ChevronRight size={18} />
              </button>
              <button onClick={() => onNavigate('professional')} className="btn btn-secondary">
                Leadership & Governance
              </button>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src="/MAIN IMAGE OF RAIAN PROFILE.png" 
                alt="Raian Lee D. Vallejo Profile" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
