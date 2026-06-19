import React, { useState } from 'react';
import { Cpu, Play, ExternalLink, X } from 'lucide-react';

export default function Robotics() {
  const [activeLightbox, setActiveLightbox] = useState(null);

  const specs = [
    "Microcontroller Programming (Arduino, ESP32, Raspberry Pi)",
    "Sensor Integration (Ultrasonic, IR, Gyroscope, RFID)",
    "Motor Control & Kinematics (Servo, Stepper, DC Gear motors)",
    "Hardware Prototyping & Custom Circuit Layouts",
    "IoT Smart Devices & Wireless Control Systems"
  ];

  const streetLightSpecs = [
    "Ambient Light Sensing (LDR automatic dimming control)",
    "Real-time Motion Detection (PIR infrared sensor activation)",
    "IoT Wireless Telemetry & Status Logging (ESP32 NodeMCU)",
    "Energy-efficient LED driver controls & duty cycle scaling",
    "Smart City Integration for centralized lighting automation"
  ];

  return (
    <section id="robotics" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="blob-bg" style={{ top: '20%', right: '0', background: 'radial-gradient(circle, rgba(2, 132, 199, 0.05) 0%, rgba(255,255,255,0) 60%)' }}></div>
      
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Engineering</span>
          <h2 className="section-title">Robotics & IoT</h2>
        </div>

        {/* Row 1: Obstacle Avoidance Project */}
        <div className="robotics-row">
          <div className="robotics-showcase" onClick={() => setActiveLightbox('/robotics/robotics.png')}>
            <img src="/robotics/robotics.png" alt="Robotics Project Showcase" />
          </div>

          <div className="robotics-info">
            <h3 className="robotics-title" style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px' }}>
              Obstacle Avoidance & Prototyping
            </h3>
            <p className="hero-description" style={{ marginBottom: '24px' }}>
              I combine hardware and software to design responsive robotics projects. From microcontroller programming and circuit design to custom logic and mechanical builds, I enjoy prototyping smart systems that interact dynamically with their environment.
            </p>

            <div className="specs-list">
              {specs.map((spec, idx) => (
                <div key={idx} className="spec-item">
                  <div className="spec-bullet"></div>
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://www.facebook.com/share/v/1M6RCTAFMS/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <Play size={18} fill="currentColor" />
              Watch Video Demonstration
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Row 2: Smart IoT Street Light Project */}
        <div className="robotics-row reverse">
          <div className="robotics-info">
            <h3 className="robotics-title" style={{ fontSize: '26px', fontWeight: '800', marginBottom: '16px' }}>
              Smart IoT Street Light
            </h3>
            <p className="hero-description" style={{ marginBottom: '24px' }}>
              An intelligent, IoT-enabled smart street light prototype that dynamically dim-controls illumination based on ambient light levels (LDR) and PIR motion detection. Powered by ESP32/Arduino integration, it logs telemetry and scales duty cycles to maximize energy conservation.
            </p>

            <div className="specs-list">
              {streetLightSpecs.map((spec, idx) => (
                <div key={idx} className="spec-item">
                  <div className="spec-bullet"></div>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="robotics-showcase" style={{ cursor: 'default' }}>
            <video 
              src="/robotics/IOT smart street light/20251214_155146.mp4" 
              poster="/robotics/IOT smart street light/street_light_smart_iot.jpg"
              controls 
              preload="metadata" 
              playsInline
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
            ></video>
          </div>
        </div>
      </div>

      {/* Lightbox for Robotics Image */}
      {activeLightbox && (
        <div className="lightbox" onClick={() => setActiveLightbox(null)}>
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={() => setActiveLightbox(null)}>
              <X size={32} />
            </span>
            <img src={activeLightbox} alt="Robotics Project Large" className="lightbox-img" />
            <p className="lightbox-caption">Robotics & Electronic Prototyping Showcase</p>
          </div>
        </div>
      )}
    </section>
  );
}
