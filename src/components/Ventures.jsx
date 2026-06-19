import React, { useState } from 'react';
import { ExternalLink, Palette, ShoppingBag, Eye, Maximize2, Play, Compass, X, Image as ImageIcon } from 'lucide-react';

export default function Ventures() {
  const [activeTab, setActiveTab] = useState('aim');
  const [visibleAimCount, setVisibleAimCount] = useState(12);
  const [activeLightbox, setActiveLightbox] = useState(null);

  // AIM Graphic Studio Images (total 33 files)
  const aimImages = [
    { src: '/aim/people wearing my design 1.jpg', category: 'AIM Branding' },
    { src: '/aim/609088552_122174321720878006_5067451045323515946_n.jpg', category: 'Typography Art' },
    { src: '/aim/614838275_122175915212878006_7032056352501766861_n.jpg', category: 'Flyer Design' },
    { src: '/aim/615217320_122177215058878006_7696426013798110136_n.jpg', category: 'Mockup Design' },
    { src: '/aim/615822663_122176540112878006_2432504789857204508_n.jpg', category: 'Poster Layout' },
    { src: '/aim/people wearing my design 3.jpg', category: 'Creative Graphic' },
    { src: '/aim/616019835_122177813942878006_1700921120610588960_n.jpg', category: 'Branding Ad' },
    { src: '/aim/616132209_122178486584878006_2641430066948539215_n.jpg', category: 'Typography Post' },
    { src: '/aim/616320991_122177487926878006_3191636279302771132_n.jpg', category: 'Marketing Art' },
    { src: '/aim/617545397_122179443728878006_6927975547726824073_n.jpg', category: 'Creative Layout' },
    { src: '/aim/617579260_122179754798878006_4642069518313886306_n.jpg', category: 'Logo Concept' },
    { src: '/aim/618659960_122180339162878006_1571189170792485390_n.jpg', category: 'Social Campaign' },
    { src: '/aim/622840383_122180648972878006_8241542748475993259_n.jpg', category: 'Advertising Design' },
    { src: '/aim/623100745_122182106498878006_6676556040201549562_n.jpg', category: 'Product Showcase' },
    { src: '/aim/623464998_122182448852878006_2264680260665935586_n.jpg', category: 'Visual Concept' },
    { src: '/aim/626567060_122183332400878006_7894375398007828297_n.jpg', category: 'Modern Poster' },
    { src: '/aim/626794926_122183620790878006_1581216709052713785_n.jpg', category: 'Vector Illustration' },
    { src: '/aim/people wearing my design 2.jpg', category: 'Brand Advertisement' },
    { src: '/aim/people wearing my design 3.jpg', category: 'Digital Banner' },
    { src: '/aim/628416241_122184416864878006_5611029896783612094_n.jpg', category: 'Flyer Concept' },
    { src: '/aim/629364895_122184281648878006_4406754070223109359_n.jpg', category: 'Creative Graphic' },
    { src: '/aim/634022378_122185835276878006_1584497318320681745_n.jpg', category: 'Social Promo' },
    { src: '/aim/650859756_122191708688878006_8718661638413637162_n.jpg', category: 'Corporate Poster' },
    { src: '/aim/651175185_122192120630878006_3617865871775621001_n.jpg', category: 'Promotional Ad' },
    { src: '/aim/651900964_122191918778878006_4471740123871493957_n.jpg', category: 'Campaign Design' },
    { src: '/aim/659834730_122194786760878006_2157366672206538183_n.jpg', category: 'Creative Artwork' },
    { src: '/aim/661085815_122194954526878006_3272371096365555761_n.jpg', category: 'Vector Graphic' },
    { src: '/aim/665986352_122195076674878006_1561881044239933583_n.jpg', category: 'Poster Concept' },
    { src: '/aim/670491002_122196288518878006_6315117759729718428_n.jpg', category: 'Branding Project' },
    { src: '/aim/670875599_122196542150878006_6031639299158827888_n.jpg', category: 'Visual Post' },
    { src: '/aim/716170874_122204226224878006_4311136993041529877_n.jpg', category: 'Flyer Design' },
    { src: '/aim/people wearing my design 4.jpg', category: 'Modern Layout' },
    { src: '/aim/people wearing my design 1.jpg', category: 'Visual Layout' }
  ];

  // Ranled's Shop product images (10 files total)
  const shopImages = [
    { src: '/ranledshop/main image of this shop.jpg', title: 'Ranled\'s Custom Merch Hub', price: 'Featured Cover' },
    { src: '/ranledshop/471858272_122107188524697350_6523276854240735584_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/472093227_122107193282697350_8060522274934789916_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/472215241_122107185734697350_1971250540662613639_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/473793007_122110378400697350_1811138651448119509_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/491996373_122125881146697350_5752786155113859441_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/492322410_122125881086697350_6483108006247429766_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/560406282_122149141022697350_5560555689436668737_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/599941208_122157779336697350_3566212835651031770_n.jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' },
    { src: '/ranledshop/608871778_122159964254697350_3649902807092058953_n (1).jpg', title: 'Custom TShirt Print', price: 'Premium Quality Printing' }
  ];

  // Rise & Live images and videos
  const riseLiveImages = [
    { src: '/rise&live/IMG_2072.jpg', caption: 'Rise&Live Lifestyle Moment' },
    { src: '/rise&live/IMG_2186.jpg', caption: 'Outdoor Branding Session' },
    { src: '/rise&live/IMG_2213.jpg', caption: 'Team Coordination Meeting' },
    { src: '/rise&live/IMG_2307.jpg', caption: 'Community Outreach Event' },
    { src: '/rise&live/IMG_2530.jpg', caption: 'Branding Promo Shoot' }
  ];

  // Ranled's Graphic & Designs Images (10 files total)
  const graphicDesignsImages = [
    { src: '/ranledsgraphic and designs/472043074_122103080024707990_4520951209638997966_n.jpg', category: 'Graphic Layout' },
    { src: '/ranledsgraphic and designs/472074397_122103087188707990_2676416451527885393_n.jpg', category: 'Typography Post' },
    { src: '/ranledsgraphic and designs/472094043_122103019358707990_8418556492952615401_n.jpg', category: 'Social Media Banner' },
    { src: '/ranledsgraphic and designs/472134575_122105094254707990_4914827773969893771_n.jpg', category: 'Digital Flyer' },
    { src: '/ranledsgraphic and designs/472274368_122104574210707990_354435416012262623_n.jpg', category: 'Creative Artwork' },
    { src: '/ranledsgraphic and designs/472283275_122103085970707990_3650299445050665161_n.jpg', category: 'Branding Ad' },
    { src: '/ranledsgraphic and designs/474592837_122109795170707990_6558045828298669469_n.jpg', category: 'Event Poster' },
    { src: '/ranledsgraphic and designs/475662361_122111298872707990_1764672801639542230_n.jpg', category: 'Visual Concept' },
    { src: '/ranledsgraphic and designs/480240702_122114485766707990_1255934221307893771_n.jpg', category: 'Marketing Banner' },
    { src: '/ranledsgraphic and designs/485303863_122119985582707990_187952153177615665_n.jpg', category: 'Poster Design' }
  ];

  const handleOpenLightbox = (image) => {
    setActiveLightbox(image);
  };

  const handleCloseLightbox = () => {
    setActiveLightbox(null);
  };

  const handleLoadMore = () => {
    setVisibleAimCount(prev => prev + 12);
  };

  return (
    <section id="ventures" className="section">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-tag">Ventures</span>
          <h2 className="section-title">My Creative Businesses</h2>
        </div>

        {/* Tab Buttons */}
        <div className="ventures-tabs">
          <button 
            className={`tab-btn ${activeTab === 'aim' ? 'active' : ''}`}
            onClick={() => setActiveTab('aim')}
          >
            <Palette size={18} />
            AIM Graphic Studio
          </button>
          <button 
            className={`tab-btn ${activeTab === 'shop' ? 'active' : ''}`}
            onClick={() => setActiveTab('shop')}
          >
            <ShoppingBag size={18} />
            Ranled's Shop
          </button>
          <button 
            className={`tab-btn ${activeTab === 'rise' ? 'active' : ''}`}
            onClick={() => setActiveTab('rise')}
          >
            <Compass size={18} />
            Rise & Live
          </button>
          <button 
            className={`tab-btn ${activeTab === 'graphics_designs' ? 'active' : ''}`}
            onClick={() => setActiveTab('graphics_designs')}
          >
            <ImageIcon size={18} />
            Ranled's Graphic & Designs
          </button>
        </div>

        {/* AIM Graphic Studio Panel */}
        {activeTab === 'aim' && (
          <div className="venture-panel">
            <div className="glass-panel venture-header-card">
              <div className="venture-logo-box">
                <img src="/logo of raians ventures/AIM/AIM_LOGO_NO_BG.png" alt="AIM Logo" />
              </div>
              <div className="venture-header-info">
                <div className="venture-meta">
                  <h3 className="venture-title">AIM Graphic Studio</h3>
                  <span className="venture-badge">Design Agency</span>
                  <a href="https://www.facebook.com/aim.graphicstudio" target="_blank" rel="noopener noreferrer" className="venture-link">
                    Facebook Page <ExternalLink size={14} />
                  </a>
                </div>
                <p className="hero-description" style={{ margin: '8px 0 0 0' }}>
                  AIM Graphic Studio is a standalone creative design agency specializing in high-impact posters, modern brand identities, marketing materials, and digital art layouts. Our portfolio reflects bold colors, clean alignment, and creative branding.
                </p>
              </div>
            </div>

            <div className="graphics-masonry">
              {aimImages.slice(0, visibleAimCount).map((img, idx) => (
                <div 
                  key={idx} 
                  className="graphics-item"
                  onClick={() => handleOpenLightbox(img)}
                >
                  <img src={img.src} alt={img.category} loading="lazy" />
                  <div className="img-overlay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: '#fff' }}>
                      <span className="img-overlay-text">{img.category}</span>
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleAimCount < aimImages.length && (
              <div className="load-more-container">
                <button onClick={handleLoadMore} className="btn btn-secondary">
                  Load More Graphics
                </button>
              </div>
            )}
          </div>
        )}

        {/* Ranled's Shop Panel */}
        {activeTab === 'shop' && (
          <div className="venture-panel">
            <div className="glass-panel venture-header-card">
              <div className="venture-logo-box">
                <img src="/logo of raians ventures/RANLED_S SHOP/AIM_LOGO_NO_BG.png" alt="Ranled's Shop Logo" />
              </div>
              <div className="venture-header-info">
                <div className="venture-meta">
                  <h3 className="venture-title">Ranled's Shop</h3>
                  <span className="venture-badge">E-Commerce & Printing</span>
                  <a href="https://www.facebook.com/ranledshop" target="_blank" rel="noopener noreferrer" className="venture-link">
                    Facebook Page <ExternalLink size={14} />
                  </a>
                </div>
                <p className="hero-description" style={{ margin: '8px 0 0 0' }}>
                  Your premium custom merchandise hub. We bring digital designs to life with top-tier printing technologies. Providing customized t-shirts, mugs, canvas tote bags, custom caps, keychains, and unified corporate branding packages.
                </p>
              </div>
            </div>

            <div className="shop-grid">
              {shopImages.map((product, idx) => (
                <div key={idx} className="shop-card" onClick={() => handleOpenLightbox({ src: product.src, category: product.title })}>
                  <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                    <img src={product.src} alt={product.title} className="shop-card-img" />
                    <div className="img-overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0 }}>
                      <Eye size={24} style={{ color: '#fff' }} />
                    </div>
                  </div>
                  <div className="shop-card-content">
                    <h4 className="shop-card-title">{product.title}</h4>
                    <span className="shop-card-price">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rise & Live Panel */}
        {activeTab === 'rise' && (
          <div className="venture-panel">
            <div className="glass-panel venture-header-card">
              <div className="venture-logo-box">
                <img src="/logo of raians ventures/RL/AIM_LOGO_NO_BG.png" alt="Rise & Live Logo" />
              </div>
              <div className="venture-header-info">
                <div className="venture-meta">
                  <h3 className="venture-title">Rise & Live</h3>
                  <span className="venture-badge">Lifestyle Brand & Media</span>
                  <a href="https://www.facebook.com/risendlive" target="_blank" rel="noopener noreferrer" className="venture-link">
                    Facebook Page <ExternalLink size={14} />
                  </a>
                </div>
                <p className="hero-description" style={{ margin: '8px 0 0 0' }}>
                  Rise&Live is a lifestyle brand established by Raian Lee D. Vallejo to inspire people to pursue self-improvement through self-discipline, growth, and purposeful action. Built on the belief that lasting change comes from within, the brand encourages individuals to rise above challenges and live with confidence, resilience, and intention. More than just an apparel brand, Rise&Live represents a community and mindset that empowers people to become the best version of themselves every day.
                </p>
              </div>
            </div>

            {/* Video Showcase Card */}
            <div className="rise-live-grid">
              <div className="video-container">
                <span className="video-label">Promo Showcase 1</span>
                <video src="/rise&live/vid 1.mp4" controls preload="metadata" playsInline></video>
              </div>
              <div className="video-container">
                <span className="video-label">Lifestyle Recap 2</span>
                <video src="/rise&live/vid 2.mp4" controls preload="metadata" playsInline></video>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="photos-grid">
              {riseLiveImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="img-card"
                  onClick={() => handleOpenLightbox(img)}
                >
                  <img src={img.src} alt={img.caption} />
                  <div className="img-overlay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Maximize2 size={24} style={{ color: '#fff' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ranled's Graphic & Designs Panel */}
        {activeTab === 'graphics_designs' && (
          <div className="venture-panel">
            <div className="glass-panel venture-header-card">
              <div className="venture-logo-box">
                <img src="/logo of raians ventures/ranleds graphic anaad designs.jpg" alt="Ranled's Graphic & Designs Logo" />
              </div>
              <div className="venture-header-info">
                <div className="venture-meta">
                  <h3 className="venture-title">Ranled's Graphic & Designs</h3>
                  <span className="venture-badge">Freelance & Studio</span>
                  <a href="https://www.facebook.com/aim.graphicstudio" target="_blank" rel="noopener noreferrer" className="venture-link">
                    Facebook Page <ExternalLink size={14} />
                  </a>
                </div>
                <p className="hero-description" style={{ margin: '8px 0 0 0' }}>
                  Professional freelance design services specializing in digital layout, typography, creative posters, and visual branding. Bringing unique concepts to life with modern aesthetics.
                </p>
              </div>
            </div>

            <div className="graphics-masonry">
              {graphicDesignsImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="graphics-item"
                  onClick={() => handleOpenLightbox(img)}
                >
                  <img src={img.src} alt={img.category} loading="lazy" />
                  <div className="img-overlay">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: '#fff' }}>
                      <span className="img-overlay-text">{img.category}</span>
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="lightbox" onClick={handleCloseLightbox}>
          <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox-close" onClick={handleCloseLightbox}>
              <X size={32} />
            </span>
            <img src={activeLightbox.src} alt={activeLightbox.category} className="lightbox-img" />
            <p className="lightbox-caption">{activeLightbox.category || activeLightbox.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
