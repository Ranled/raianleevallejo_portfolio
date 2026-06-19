import React, { useState } from 'react';
import { Mail, Clipboard, Check, ArrowUp } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "vallejoraianlee@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '40px' }}>
      <div className="container">
        <div className="glass-panel contact-card">
          <span className="section-tag">Get In Touch</span>
          <h2 className="contact-title">Let's Create Something Together</h2>
          <p className="contact-subtitle" style={{ marginBottom: '24px' }}>
            Whether you want to collaborate on a graphic design project, build a web/mobile application, discuss robotics, or just connect—feel free to reach out!
          </p>

          {/* What I Do Checklist */}
          <div className="contact-checklist-wrapper" style={{ margin: '0 auto 40px auto', maxWidth: '480px', textAlign: 'left', background: 'rgba(2, 132, 199, 0.03)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              What I do:
            </h4>
            <div className="contact-checklist-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {[
                "Graphic Designer",
                "Business Owner",
                "Business Manager",
                "Social Media Manager",
                "Web Developer",
                "Mobile Developer",
                "Robotics"
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '500', color: 'var(--text-medium)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', backgroundColor: 'var(--blue-100)', borderRadius: '50%', color: 'var(--accent-blue)' }}>
                    <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-methods">
            <a 
              href="https://www.facebook.com/ranledransan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item fb"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              Message me on Facebook
            </a>
            
            <button onClick={handleCopyEmail} className="contact-item email">
              <Mail size={20} style={{ color: 'var(--accent-blue)' }} />
              <span style={{ marginRight: '8px' }}>{emailAddress}</span>
              {copied ? <Check size={16} style={{ color: '#16a34a' }} /> : <Clipboard size={16} />}
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={handleScrollTop} 
              className="btn btn-secondary"
              style={{ borderRadius: 'var(--radius-full)', padding: '10px 20px', fontSize: '13px' }}
            >
              Back to Top
              <ArrowUp size={14} />
            </button>
          </div>

          <div className="footer-text">
            <p style={{ fontWeight: '600', marginBottom: '4px', color: 'var(--text-main)' }}>
              Raian Lee D. Vallejo
            </p>
            <p style={{ fontSize: '13px', marginBottom: '4px' }}>
              Computer Science Student at Aklan State University - Ibajay Campus
            </p>
            <p style={{ fontSize: '12px' }}>
              Former Governor of BSCS Organization | Entrepreneur | Developer
            </p>
            <p style={{ fontSize: '11px', marginTop: '16px', color: 'var(--text-light)' }}>
              &copy; {new Date().getFullYear()} Raian Lee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
