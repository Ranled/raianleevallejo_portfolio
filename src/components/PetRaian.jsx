import React, { useState, useEffect } from 'react';
import { Download, Monitor, Mouse, Hand, Move, X as XIcon, GripVertical, Pin, Sparkles, Volume2, Moon, Utensils, MessageCircle, Palette, Clock, Users, ChevronDown, ShieldAlert, Rocket, Play } from 'lucide-react';

export default function PetRaian() {
  const [activePreview, setActivePreview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [floatingY, setFloatingY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setFloatingY(prev => prev === 0 ? -10 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const previewImages = [
    { src: '/DESKTOP WEB/grab2.png', label: 'Grab Reaction', emoji: '😤' },
    { src: '/DESKTOP WEB/idle.png', label: 'Idle State', emoji: '🧍' },
    { src: '/DESKTOP WEB/walk1.png', label: 'Walking', emoji: '🚶' },
  ];

  const controls = [
    { action: 'Grab Raian', how: 'Left-click on him', icon: <Hand size={18} /> },
    { action: 'Move Raian', how: 'Click and drag him anywhere', icon: <Move size={18} /> },
    { action: 'Drop Raian', how: 'Release the mouse — he falls back down!', icon: <GripVertical size={18} /> },
    { action: 'Close Raian', how: 'Right-click → "Close Raian"', icon: <XIcon size={18} /> },
  ];

  const behaviors = [
    { emoji: '🧍', title: 'Idles', desc: 'Raian stands still, chilling on your screen' },
    { emoji: '🚶', title: 'Walks', desc: 'He randomly walks left and right across your screen, bouncing off the edges' },
    { emoji: '💬', title: 'Talks', desc: 'Random funny quotes pop up above him', quotes: ['"Error 404: motivation not found."', '"Plot twist: I\'m the main character."', '"Remember to drink water! 💧"', '"My brain has too many tabs open."'] },
    { emoji: '😤', title: 'Reacts when grabbed', desc: 'Click or drag him and he\'ll say things like:', quotes: ['"Hey! Put me down!! 😤"', '"WHEEEEE~ ✈️"', '"Unhand me, human! 👑"'] },
    { emoji: '⬇️', title: 'Falls', desc: 'Drop him from the air and he falls back down with gravity!' },
    { emoji: '📌', title: 'Always on top', desc: 'Raian stays above all your windows so he\'s always visible' },
  ];

  const upcoming = [
    { icon: <Volume2 size={20} />, title: 'Sound effects', desc: 'Reactions with audio' },
    { icon: <Moon size={20} />, title: 'Sleep mode', desc: 'Raian takes naps when you\'re idle' },
    { icon: <Utensils size={20} />, title: 'Feeding', desc: 'Give Raian snacks!' },
    { icon: <MessageCircle size={20} />, title: 'More quotes', desc: 'Even more funny things to say' },
    { icon: <Palette size={20} />, title: 'Skins / Outfits', desc: 'Dress up Raian in different styles' },
    { icon: <Clock size={20} />, title: 'Reminders', desc: 'Raian reminds you to take breaks' },
    { icon: <Users size={20} />, title: 'Multiple pets', desc: 'Have more than one on screen!' },
  ];

  const techStack = [
    { tech: 'Python', purpose: 'Core programming language' },
    { tech: 'tkinter', purpose: 'Desktop window & graphics' },
    { tech: 'Pillow', purpose: 'Image loading & processing' },
  ];

  return (
    <div className="pet-page">
      {/* Animated background particles */}
      <div className="pet-bg-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="pet-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Banner */}
      <section className={`pet-hero ${isVisible ? 'pet-visible' : ''}`}>
        <div className="pet-hero-glow" />
        <div className="pet-container">
          <div className="pet-hero-content">
            <div className="pet-hero-badge">
              <Sparkles size={14} />
              <span>Desktop Companion</span>
            </div>
            <h1 className="pet-hero-title">
              Raian — <span className="pet-gradient-text">Desktop Pet</span>
            </h1>
            <p className="pet-hero-subtitle">
              A cute little companion that lives on your desktop! He walks around, says funny things, and reacts when you pick him up.
            </p>

            <div className="pet-hero-actions">
              <a
                href="/DESKTOP WEB/Raian_your_pet.exe"
                download="Raian_your_pet.exe"
                className="pet-btn pet-btn-download"
              >
                <Download size={20} />
                <span>Download Raian.exe</span>
                <span className="pet-btn-size">~78 MB</span>
              </a>
              <a href="#preview" className="pet-btn pet-btn-ghost">
                <Play size={18} />
                <span>Watch Preview</span>
              </a>
            </div>

            <div className="pet-quick-steps">
              <div className="pet-step">
                <div className="pet-step-num">1</div>
                <span>Double-click <strong>Raian.exe</strong></span>
              </div>
              <div className="pet-step-arrow">→</div>
              <div className="pet-step">
                <div className="pet-step-num">2</div>
                <span>Raian appears on your screen! 🎉</span>
              </div>
              <div className="pet-step-arrow">→</div>
              <div className="pet-step">
                <div className="pet-step-num">3</div>
                <span>No installs needed!</span>
              </div>
            </div>
          </div>

          <div className="pet-hero-visual">
            <div
              className="pet-hero-image-float"
              style={{ transform: `translateY(${floatingY}px)` }}
            >
              <img
                src="/DESKTOP WEB/idle.png"
                alt="Raian Desktop Pet Idle"
                className="pet-hero-sprite"
              />
            </div>
            <div className="pet-hero-shadow" />
          </div>
        </div>
      </section>

      {/* Video Preview */}
      <section id="preview" className="pet-section">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Preview</span>
            <h2 className="pet-section-title">See Raian in Action</h2>
          </div>

          <div className="pet-video-wrapper">
            <div className="pet-video-container">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/DESKTOP WEB/idle.png"
              >
                <source src="/DESKTOP WEB/SAMPLE VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="pet-video-badge">
                <Play size={12} />
                <span>Sample Demo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Previews */}
      <section className="pet-section">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Screenshots</span>
            <h2 className="pet-section-title">Preview Raian's States</h2>
          </div>

          <div className="pet-preview-gallery">
            {previewImages.map((img, i) => (
              <div
                key={i}
                className={`pet-preview-card ${activePreview === i ? 'active' : ''}`}
                onClick={() => setActivePreview(i)}
              >
                <div className="pet-preview-img-wrapper">
                  <img src={img.src} alt={img.label} />
                </div>
                <div className="pet-preview-label">
                  <span className="pet-preview-emoji">{img.emoji}</span>
                  <span>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="pet-section pet-section-alt">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Controls</span>
            <h2 className="pet-section-title">How to Interact</h2>
          </div>

          <div className="pet-controls-grid">
            {controls.map((ctrl, i) => (
              <div key={i} className="pet-control-card glass-card">
                <div className="pet-control-icon">{ctrl.icon}</div>
                <div className="pet-control-info">
                  <h3>{ctrl.action}</h3>
                  <p>{ctrl.how}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Does Raian Do */}
      <section className="pet-section">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Behaviors</span>
            <h2 className="pet-section-title">What Does Raian Do?</h2>
          </div>

          <div className="pet-behaviors-grid">
            {behaviors.map((b, i) => (
              <div key={i} className="pet-behavior-card">
                <div className="pet-behavior-emoji">{b.emoji}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                {b.quotes && (
                  <div className="pet-quotes">
                    {b.quotes.map((q, j) => (
                      <span key={j} className="pet-quote-bubble">{q}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Windows Defender Notice */}
      <section className="pet-section pet-section-alt">
        <div className="pet-container">
          <div className="pet-notice-card">
            <div className="pet-notice-icon">
              <ShieldAlert size={32} />
            </div>
            <div className="pet-notice-content">
              <h3>Windows Defender Notice</h3>
              <p>
                Windows Defender might show a warning the first time you run <strong>Raian.exe</strong>. 
                This is a <strong>false positive</strong> — it happens with all apps packaged this way.
              </p>
              <div className="pet-notice-steps">
                <span className="pet-notice-step">Click "More info"</span>
                <span className="pet-notice-arrow">→</span>
                <span className="pet-notice-step">Click "Run anyway"</span>
                <span className="pet-notice-arrow">→</span>
                <span className="pet-notice-step">Raian starts normally! ✅</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="pet-section">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">
              <Rocket size={14} />
              Coming Soon
            </span>
            <h2 className="pet-section-title">More Features Coming Soon!</h2>
          </div>

          <div className="pet-upcoming-grid">
            {upcoming.map((feat, i) => (
              <div key={i} className="pet-upcoming-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="pet-upcoming-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built With */}
      <section className="pet-section pet-section-alt">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Tech Stack</span>
            <h2 className="pet-section-title">Built With</h2>
          </div>

          <div className="pet-tech-grid">
            {techStack.map((t, i) => (
              <div key={i} className="pet-tech-card glass-card">
                <h3>{t.tech}</h3>
                <p>{t.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="pet-section pet-cta-section">
        <div className="pet-container">
          <div className="pet-cta-card">
            <div className="pet-cta-glow" />
            <h2>Ready to meet Raian?</h2>
            <p>Download now and let your new desktop companion keep you company!</p>
            <a
              href="/DESKTOP WEB/Raian_your_pet.exe"
              download="Raian_your_pet.exe"
              className="pet-btn pet-btn-download pet-btn-lg"
            >
              <Download size={22} />
              <span>Download Raian.exe</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Credit */}
      <footer className="pet-footer">
        <p>Developed by <strong>Raian</strong></p>
      </footer>
    </div>
  );
}
