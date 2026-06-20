import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import Professional from './components/Professional';
import Ventures from './components/Ventures';
import Robotics from './components/Robotics';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'professional', 'ventures', 'robotics', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // nav height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio-app">
      {/* Premium Sticky Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer' }}>
            <span>Raian Lee</span>
            <div className="logo-dot"></div>
          </div>

          {/* Desktop nav links */}
          <ul className="nav-links">
            <li>
              <button 
                onClick={() => handleNavigate('home')} 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigate('professional')} 
                className={`nav-link ${activeSection === 'professional' ? 'active' : ''}`}
              >
                Leadership
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigate('ventures')} 
                className={`nav-link ${activeSection === 'ventures' ? 'active' : ''}`}
              >
                Ventures
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigate('robotics')} 
                className={`nav-link ${activeSection === 'robotics' ? 'active' : ''}`}
              >
                Robotics
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavigate('contact')} 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact
              </button>
            </li>
            <li>
              <Link 
                to="/pet-raian" 
                className="nav-link pet-raian-nav-btn"
              >
                PET RAIAN
              </Link>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none' /* handled in CSS media query override below */ }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            borderBottom: '1px solid var(--border-color)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '24px',
            boxShadow: 'var(--shadow-md)',
            animation: 'fadeIn var(--transition-fast)'
          }}
        >
          <button 
            onClick={() => handleNavigate('home')} 
            style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', color: activeSection === 'home' ? 'var(--accent-blue)' : 'var(--text-main)' }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigate('professional')} 
            style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', color: activeSection === 'professional' ? 'var(--accent-blue)' : 'var(--text-main)' }}
          >
            Leadership & Governance
          </button>
          <button 
            onClick={() => handleNavigate('ventures')} 
            style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', color: activeSection === 'ventures' ? 'var(--accent-blue)' : 'var(--text-main)' }}
          >
            My Ventures
          </button>
          <button 
            onClick={() => handleNavigate('robotics')} 
            style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', color: activeSection === 'robotics' ? 'var(--accent-blue)' : 'var(--text-main)' }}
          >
            Robotics
          </button>
          <button 
            onClick={() => handleNavigate('contact')} 
            style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600', color: activeSection === 'contact' ? 'var(--accent-blue)' : 'var(--text-main)' }}
          >
            Contact
          </button>
          <Link 
            to="/pet-raian" 
            style={{ textAlign: 'left', fontSize: '16px', fontWeight: '700', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}
          >
            PET RAIAN
          </Link>
        </div>
      )}

      {/* Extra style tag to handle menu toggle in mobile viewports */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .nav-links {
            display: none !important;
          }
        }
      `}</style>

      {/* Portfolio Sections */}
      <main>
        <Hero activeSection={activeSection} onNavigate={handleNavigate} />
        <Professional />
        <Ventures />
        <Robotics />
        <Contact />
      </main>
    </div>
  );
}
