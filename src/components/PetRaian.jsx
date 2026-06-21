import React, { useState, useEffect } from 'react';
import { Download, Monitor, Smartphone, Mouse, Hand, Move, X as XIcon, GripVertical, Pin, Sparkles, Volume2, Moon, Utensils, MessageCircle, Palette, Clock, Users, ChevronDown, ShieldAlert, Rocket, Play } from 'lucide-react';

export default function PetRaian() {
  const [activePreview, setActivePreview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [floatingY, setFloatingY] = useState(0);
  const [playingAudio, setPlayingAudio] = useState(null);
  const [audioInstance, setAudioInstance] = useState(null);
  const [activeVideoTab, setActiveVideoTab] = useState('demo');

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setFloatingY(prev => prev === 0 ? -10 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioInstance) {
        audioInstance.pause();
      }
    };
  }, [audioInstance]);

  const previewImages = [
    { src: '/DESKTOP WEB/idle.png', label: 'Idle State', emoji: '🧍' },
    { src: '/DESKTOP WEB/walk1.png', label: 'Walking', emoji: '🚶' },
    { src: '/DESKTOP WEB/grab2.png', label: 'Grab Reaction', emoji: '😤' },
    { src: '/DESKTOP WEB/fllying.png', label: 'Flying Overhaul', emoji: '✈️' },
    { src: '/DESKTOP WEB/eat1.png', label: 'Interactive Feeding', emoji: '🍙' },
  ];

  const videos = {
    demo: {
      src: '/DESKTOP WEB/SAMPLE VID.mp4',
      title: 'Full Gameplay Demo',
      desc: 'Watch Raian walk around, interact with dragging and dropping, and hear some voice lines in action!',
    },
    eating: {
      src: '/DESKTOP WEB/EATING SAMPLE VID.mp4',
      title: '🍙 Interactive Feeding Demo',
      desc: 'Right-click Raian and select "Feed Raian" to watch him eat a rice ball with eating sound effects for 3 seconds!',
    },
    flying: {
      src: '/DESKTOP WEB/FLYING SAMPLE VID.mp4',
      title: '✈️ Flight Overhaul Demo',
      desc: 'Watch Raian fly freely across the desktop, bouncing off edges, bobbing up and down, and facing the flight direction!',
    }
  };

  const voiceovers = [
    { name: "Feed Raian (Eating)", file: "eating.m4a", category: "Feeding", desc: "Plays when you feed him a rice ball" },
    { name: "Falling Scream", file: "falling1.m4a", category: "Physics", desc: "Plays when dropped from the top" },
    { name: "Am I Flying?", file: "Are we flying AM I FLYING.m4a", category: "Flight", desc: "Soaring high in the sky" },
    { name: "Flight Line 1", file: "flying.m4a", category: "Flight", desc: "Random flight commentary" },
    { name: "Flight Line 2", file: "flying 2.m4a", category: "Flight", desc: "Random flight commentary" },
    { name: "Flight Line 3", file: "flying3.m4a", category: "Flight", desc: "Random flight commentary" },
    { name: "Motivation Not Found", file: "Error 404 motivation not found.m4a", category: "Quotes", desc: "Classic pixelated procrastination" },
    { name: "Drink Water", file: "Remember to drink water.m4a", category: "Quotes", desc: "Friendly hydration reminder" },
    { name: "Theme Song", file: "Alexa, play my theme song.m4a", category: "Quotes", desc: "Asking Alexa to play his jam" },
    { name: "Main Character", file: "Plot twist I'm the main character.m4a", category: "Quotes", desc: "Self-aware pixel protagonist" },
    { name: "Professional Overthinker", file: "Current moodprofessional overthinker.m4a", category: "Quotes", desc: "Relatable daily mood" },
    { name: "Yawns... Not Sleeping", file: "yawns ...I wasn't sleeping.m4a", category: "Quotes", desc: "Getting comfy and tired" },
  ];

  const playSound = (fileName) => {
    // If there is a playing audio, stop it
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }

    if (playingAudio === fileName) {
      // If clicking the same one, just pause
      setPlayingAudio(null);
      setAudioInstance(null);
      return;
    }

    const audioPath = `/DESKTOP WEB/voiceover/${fileName}`;
    const audio = new Audio(audioPath);
    
    audio.addEventListener('ended', () => {
      setPlayingAudio(null);
      setAudioInstance(null);
    });

    audio.addEventListener('error', (e) => {
      console.error("Audio failed to play", e);
      setPlayingAudio(null);
      setAudioInstance(null);
    });

    setPlayingAudio(fileName);
    setAudioInstance(audio);
    audio.play().catch(err => {
      console.warn("Audio playback failed, possibly user gesture required", err);
      setPlayingAudio(null);
      setAudioInstance(null);
    });
  };

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
    { icon: <Moon size={20} />, title: 'Sleep mode', desc: 'Raian takes naps when you\'re idle' },
    { icon: <Palette size={20} />, title: 'Skins / Outfits', desc: 'Dress up Raian in different styles' },
    { icon: <Clock size={20} />, title: 'Reminders', desc: 'Raian reminds you to take breaks' },
    { icon: <Users size={20} />, title: 'Multiple pets', desc: 'Have more than one on screen!' },
    { icon: <MessageCircle size={20} />, title: 'Mini Games', desc: 'Play mini games with Raian directly on screen' },
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
              <div className="pet-hero-action-group">
                <span className="pet-action-title-text">
                  <Monitor size={16} /> Desktop (Windows)
                </span>
                <a
                  href="/DESKTOP WEB/Raian_your_pet_V2.exe"
                  download="Raian_your_pet_V2.exe"
                  className="pet-btn pet-btn-download"
                >
                  <Download size={20} />
                  <span>Download Raian.exe (v2.0.0)</span>
                  <span className="pet-btn-size">~98 MB</span>
                </a>
              </div>

              <div className="pet-hero-action-group">
                <span className="pet-action-title-text">
                  <Smartphone size={16} /> Mobile (Android)
                </span>
                <a
                  href="/DESKTOP WEB/Raian_Pet_Android.apk"
                  download="Raian_Pet_Android.apk"
                  className="pet-btn pet-btn-android"
                >
                  <Download size={20} />
                  <span>Download Raian_Pet.apk</span>
                  <span className="pet-btn-size">~66 MB</span>
                </a>
                <span className="pet-compatibility-info">
                  ⚠️ Some mobile devices might not be compatible.
                </span>
              </div>

              <div className="pet-hero-preview-group">
                <span className="pet-action-title-text">&nbsp;</span>
                <a href="#preview" className="pet-btn pet-btn-ghost">
                  <Play size={18} />
                  <span>Watch Preview</span>
                </a>
              </div>
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

      {/* Update Notes Section */}
      <section className="pet-section pet-section-alt">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Version 2.0.0</span>
            <h2 className="pet-section-title">🎉 Raian Desktop Pet - Update Notes</h2>
            <p className="pet-section-subtitle">
              Release Date: 📅 June 21, 2026
            </p>
          </div>

          <div className="pet-update-notes-container">
            <div className="pet-update-intro">
              <p>We've rolled out a major update to Raian! Here is a list of everything new and improved in <strong>v2.0.0</strong>:</p>
            </div>

            <div className="pet-update-grid">
              <div className="pet-update-card glass-card">
                <div className="pet-update-card-header">
                  <span className="pet-update-emoji">🎙️</span>
                  <h3>Native Audio & Voice-Overs</h3>
                </div>
                <ul>
                  <li><strong>Full Voice-Over Support:</strong> Raian's dialogue is now fully voiced! Speech bubbles are connected to matching native <code>.m4a</code> voice lines that play seamlessly in the background.</li>
                  <li><strong>Special Screaming Voice:</strong> Plays a falling scream (<code>aaaaahhh</code>) whenever Raian is dropped from the top of the screen.</li>
                </ul>
              </div>

              <div className="pet-update-card glass-card">
                <div className="pet-update-card-header">
                  <span className="pet-update-emoji">🍙</span>
                  <h3>Interactive Feeding</h3>
                </div>
                <ul>
                  <li><strong>Feed Raian:</strong> Right-click Raian and select "Feed Raian" to give him a rice ball!</li>
                  <li><strong>New Asset & Custom Duration:</strong> Displays the new <code>eat1.png</code> frame, plays eating sounds (<code>eating.m4a</code>), and stays in the eating state for 3 seconds before returning to idle.</li>
                </ul>
              </div>

              <div className="pet-update-card glass-card">
                <div className="pet-update-card-header">
                  <span className="pet-update-emoji">✈️</span>
                  <h3>Complete Flight Overhaul ("Make Raian Fly")</h3>
                </div>
                <ul>
                  <li><strong>Full Desktop Freedom:</strong> Raian now flies freely all over the screen, bouncing dynamically off all four edges.</li>
                  <li><strong>Flying Physics:</strong> Added a smooth sinusoidal bobbing effect (moves up and down gently as he flies) with random vertical direction changes.</li>
                  <li><strong>Auto-Flip Sprite:</strong> If Raian is flying left, the sprite automatically flips horizontal to face the correct direction.</li>
                  <li><strong>Flight Voice Lines:</strong> Plays random flying quotes (<code>flying.m4a</code>, <code>flying 2.m4a</code>, or <code>flying3.m4a</code>) while soaring.</li>
                  <li><strong>Manual Flight:</strong> You can now manually trigger flight from the right-click context menu.</li>
                </ul>
              </div>

              <div className="pet-update-card glass-card">
                <div className="pet-update-card-header">
                  <span className="pet-update-emoji">💬</span>
                  <h3>Sleek Speech Bubbles</h3>
                </div>
                <ul>
                  <li><strong>Professional Styling:</strong> Redesigned with a smooth, clean black-and-white theme.</li>
                  <li><strong>Real-time Tracking:</strong> The speech bubble now follows Raian dynamically across the screen. If he moves while talking, the bubble moves with him.</li>
                </ul>
              </div>

              <div className="pet-update-card glass-card" style={{ gridColumn: 'span 2' }}>
                <div className="pet-update-card-header">
                  <span className="pet-update-emoji">🏃</span>
                  <h3>Physics & Movement Upgrades</h3>
                </div>
                <ul>
                  <li><strong>Accelerated Gravity Fall:</strong> Dragging and dropping Raian in mid-air now results in a faster, smoother, and much more natural falling animation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice-Over Showcase Soundboard */}
      <section className="pet-section">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Sound Showcase</span>
            <h2 className="pet-section-title">🎙️ Raian's Interactive Soundboard</h2>
            <p className="pet-section-subtitle">Click the buttons below to sample the new voice-overs and dialogue sound effects!</p>
          </div>

          <div className="pet-soundboard-grid">
            {voiceovers.map((vo, i) => (
              <div 
                key={i} 
                className={`pet-sound-card glass-card ${playingAudio === vo.file ? 'playing' : ''}`}
                onClick={() => playSound(vo.file)}
              >
                <div className="pet-sound-play-btn">
                  {playingAudio === vo.file ? (
                    <div className="pet-playing-indicator">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                  ) : (
                    <Play size={16} fill="currentColor" />
                  )}
                </div>
                <div className="pet-sound-info">
                  <div className="pet-sound-meta">
                    <span className="pet-sound-badge">{vo.category}</span>
                    <span className="pet-sound-file">{vo.file}</span>
                  </div>
                  <h3>{vo.name}</h3>
                  <p>{vo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="preview" className="pet-section pet-section-alt">
        <div className="pet-container">
          <div className="pet-section-header">
            <span className="pet-tag">Video Showcase</span>
            <h2 className="pet-section-title">See Features in Action</h2>
            <p className="pet-section-subtitle">Switch tabs to preview the new flight dynamics, feeding, and general behaviors.</p>
          </div>

          <div className="pet-video-showcase">
            <div className="pet-video-tabs">
              <button 
                className={`pet-video-tab ${activeVideoTab === 'demo' ? 'active' : ''}`}
                onClick={() => setActiveVideoTab('demo')}
              >
                <Monitor size={16} />
                <span>General Gameplay</span>
              </button>
              <button 
                className={`pet-video-tab ${activeVideoTab === 'eating' ? 'active' : ''}`}
                onClick={() => setActiveVideoTab('eating')}
              >
                <Utensils size={16} />
                <span>🍙 Interactive Feeding</span>
              </button>
              <button 
                className={`pet-video-tab ${activeVideoTab === 'flying' ? 'active' : ''}`}
                onClick={() => setActiveVideoTab('flying')}
              >
                <Rocket size={16} />
                <span>✈️ Flight Overhaul</span>
              </button>
            </div>

            <div className="pet-video-wrapper">
              <div className="pet-video-container">
                <video
                  key={activeVideoTab}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/DESKTOP WEB/idle.png"
                >
                  <source src={videos[activeVideoTab].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="pet-video-badge">
                  <Play size={12} />
                  <span>{videos[activeVideoTab].title}</span>
                </div>
              </div>
              <p className="pet-video-description-text">{videos[activeVideoTab].desc}</p>
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
            <p>Download now and let your new companion keep you company on your screen!</p>
            
            <div className="pet-cta-actions">
              <div className="pet-cta-action-group">
                <span className="pet-cta-label">
                  <Monitor size={18} /> Desktop (Windows)
                </span>
                <a
                  href="/DESKTOP WEB/Raian_your_pet_V2.exe"
                  download="Raian_your_pet_V2.exe"
                  className="pet-btn pet-btn-download pet-btn-lg"
                >
                  <Download size={22} />
                  <span>Download Raian.exe (v2.0.0)</span>
                </a>
              </div>

              <div className="pet-cta-action-group">
                <span className="pet-cta-label">
                  <Smartphone size={18} /> Mobile (Android)
                </span>
                <a
                  href="/DESKTOP WEB/Raian_Pet_Android.apk"
                  download="Raian_Pet_Android.apk"
                  className="pet-btn pet-btn-android pet-btn-lg"
                >
                  <Download size={22} />
                  <span>Download Raian_Pet.apk</span>
                </a>
                <span className="pet-compatibility-info">
                  ⚠️ Note: Some mobile devices might not be compatible.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Credit */}
      <footer className="pet-footer">
        <p>Developer: <strong>Raian Lee D. Vallejo</strong></p>
      </footer>
    </div>
  );
}
