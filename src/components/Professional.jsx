import React, { useState } from 'react';
import { Award, Users, Mic, Maximize2, X } from 'lucide-react';

export default function Professional() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const speakerImages = [
    { src: '/MUST SHOWCASE! raian with mic/1714482892392.jpg', caption: 'Speaking at Academic Event' },
    { src: '/MUST SHOWCASE! raian with mic/1715265184331.jpg', caption: 'Keynote Presentation' },
    { src: '/MUST SHOWCASE! raian with mic/FB_IMG_1741779426453.jpg', caption: 'Addressing Students & Faculty' },
    { src: '/MUST SHOWCASE! raian with mic/FB_IMG_1741779431318.jpg', caption: 'Hosting the Seminar' },
    { src: '/MUST SHOWCASE! raian with mic/Messenger_creation_3CD0FAB7-313A-4ED1-82C2-DDFC74F86F93.jpeg', caption: 'Interactive Q&A Session' }
  ];

  const governorImages = [
    { src: '/being governor/me being governor.png', caption: 'Governor of BSCS Organization' },
    { src: '/being governor/this pic with my officers.jpg', caption: 'Meeting with BSCS Student Officers' }
  ];

  const handleOpenLightbox = (image) => {
    setActiveLightbox(image);
  };

  const handleCloseLightbox = () => {
    setActiveLightbox(null);
  };

  return (
    <section id="professional" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Professional & Governance</h2>
        </div>

        <div className="professional-grid">
          {/* Governor Column */}
          <div className="prof-column">
            <div className="glass-panel" style={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="prof-header">
                <div className="prof-icon">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="prof-title-desc">Student Governance</h3>
                  <p className="prof-tag-desc">Former Governor of BSCS Organization</p>
                </div>
              </div>

              <p className="hero-description" style={{ margin: 0 }}>
                Serving as the Governor of the BSCS Organization at Aklan State University, I led student initiatives, organized seminars, and bridged the communication between students and faculty. This experience honed my project management, public relations, and collaborative leadership skills.
              </p>

              <div className="gallery-grid">
                {governorImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`img-card ${idx === 0 ? 'large-portrait' : ''}`}
                    onClick={() => handleOpenLightbox(img)}
                  >
                    <img src={img.src} alt={img.caption} />
                    <div className="img-overlay">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: '#fff' }}>
                        <span className="img-overlay-text">{img.caption}</span>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speaker Column */}
          <div className="prof-column">
            <div className="glass-panel" style={{ padding: '30px', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="prof-header">
                <div className="prof-icon">
                  <Mic size={24} />
                </div>
                <div>
                  <h3 className="prof-title-desc">Public Speaking & Events</h3>
                  <p className="prof-tag-desc">Host, Speaker & Representative</p>
                </div>
              </div>

              <p className="hero-description" style={{ margin: 0 }}>
                Frequently hosting, speaking, and organizing events. I thrive in front of crowds, presenting technical projects, running student conferences, and representing the computer science student body at state levels.
              </p>

              <div className="gallery-grid three-imgs">
                {speakerImages.slice(0, 3).map((img, idx) => (
                  <div 
                    key={idx} 
                    className="img-card"
                    onClick={() => handleOpenLightbox(img)}
                  >
                    <img src={img.src} alt={img.caption} />
                    <div className="img-overlay">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: '#fff' }}>
                        <span className="img-overlay-text">{img.caption}</span>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra speaker images row */}
              <div className="gallery-grid">
                {speakerImages.slice(3).map((img, idx) => (
                  <div 
                    key={idx} 
                    className="img-card"
                    onClick={() => handleOpenLightbox(img)}
                  >
                    <img src={img.src} alt={img.caption} />
                    <div className="img-overlay">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: '#fff' }}>
                        <span className="img-overlay-text">{img.caption}</span>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Portal/Modal */}
      {activeLightbox && (
        <div className="lightbox" onClick={handleCloseLightbox}>
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={handleCloseLightbox}>
              <X size={32} />
            </span>
            <img src={activeLightbox.src} alt={activeLightbox.caption} className="lightbox-img" />
            <p className="lightbox-caption">{activeLightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
