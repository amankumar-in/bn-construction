import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './BathroomRemodeling.css';

const BathroomRemodeling = () => {
  const [activeTab, setActiveTab] = useState('showers');
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      name: 'Spa-Inspired Retreat',
      description: 'Transform your bathroom into a luxury spa experience',
      features: [
        'Natural stone and wood materials',
        'Neutral, calming color palettes',
        'Freestanding soaking tubs',
        'Walk-in rain showers',
        'Plants and natural lighting',
        'Heated floors and towel warmers'
      ],
      mockupClass: ''
    },
    {
      name: 'Modern Minimalist',
      description: 'Clean lines and uncluttered spaces',
      features: [
        'Floating vanities and wall-mounted toilets',
        'Frameless glass and sleek fixtures',
        'Monochromatic color schemes',
        'Hidden storage solutions',
        'LED strip lighting',
        'Smart technology integration'
      ],
      mockupClass: 'modern'
    },
    {
      name: 'Classic Traditional',
      description: 'Timeless elegance that never goes out of style',
      features: [
        'Subway tiles and marble surfaces',
        'Pedestal sinks and clawfoot tubs',
        'Warm wood vanities',
        'Crystal lighting fixtures',
        'Rich, warm color palettes',
        'Decorative molding and trim'
      ],
      mockupClass: 'traditional'
    },
    {
      name: 'Coastal & Beach-Inspired',
      description: 'Bring the relaxation of the beach home',
      features: [
        'Light blues and sandy beiges',
        'Natural textures and materials',
        'Vessel sinks and sea glass accents',
        'Driftwood and weathered finishes',
        'Plenty of natural light',
        'Ocean-inspired artwork and décor'
      ],
      mockupClass: 'coastal'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };
  return (
    <div className="bathroom-page">
      <SEO 
        title="Bathroom Remodeling Services | BN Construction Brentwood, CA"
        description="Create your personal spa retreat with BN Construction's bathroom remodeling services in Brentwood, CA. Walk-in showers, luxury tubs, custom vanities & more. Transform your bathroom into a relaxing oasis. Free consultation (909) 349-5255."
        keywords="bathroom remodeling Brentwood CA, bathroom renovation, spa bathroom, walk-in shower, luxury bathroom, bathroom contractors, master bathroom, bathroom design, accessible bathroom"
      />
      <Header />
      
      {/* Hero Section - Split Layout */}
      <section className="bathroom-hero">
        <div className="hero-split">
          <div className="hero-left">
            <div className="hero-content-wrapper">
              <div className="hero-badge">
                <span>Bathroom Remodeling Services</span>
              </div>
              <h1 className="hero-title">
                Create Your Personal
                <span className="bathroom-hero-title-highlight">Spa Retreat at Home</span>
              </h1>
              <p className="bathroom-hero-subtitle">
                Transform your bathroom into an extraordinary spa-like retreat that combines luxury, 
                comfort, and practical functionality. Your sanctuary awaits.
              </p>
              <div className="hero-features-list">
                <div className="hero-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>20+ Years Spa Design Experience</span>
                </div>
                <div className="hero-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Moisture & Waterproofing Experts</span>
                </div>
                <div className="hero-feature-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Universal Design Certified</span>
                </div>
              </div>
              <div className="hero-cta">
                <a href="tel:9093495255" className="cta-button primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Start Your Spa Transformation
                </a>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-images">
              <div className="hero-image-main">
                <img src="/images/bathroom-white.jpg" alt="Luxury bathroom remodeling" />
              </div>
              <div className="hero-image-accent">
                <img src="/images/bathroom-beige.jpg" alt="Spa bathroom design" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Alternating Layout */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why BN Construction for Your Bathroom Remodel?</h2>
          <div className="reasons-alternating">
            <div className="reason-item">
              <div className="reason-content">
                <div className="reason-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="reason-text">
                  <h3 className="reason-title">Spa-Inspired Design Philosophy</h3>
                  <p className="reason-description">
                    We believe every bathroom should feel like a luxury spa retreat. Our design team incorporates 
                    natural materials, soothing color palettes, and therapeutic lighting to create spaces that 
                    promote relaxation and well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="reason-item reverse">
              <div className="reason-content">
                <div className="reason-text">
                  <h3 className="reason-title">Water & Moisture Expertise</h3>
                  <p className="reason-description">
                    Bathrooms require specialized knowledge of waterproofing, ventilation, and moisture management. 
                    Our 20+ years of experience ensures your bathroom will be beautiful, functional, and built to 
                    last in high-humidity environments.
                  </p>
                </div>
                <div className="reason-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="reason-item">
              <div className="reason-content">
                <div className="reason-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
                <div className="reason-text">
                  <h3 className="reason-title">Universal Design Principles</h3>
                  <p className="reason-description">
                    We design with accessibility and aging-in-place in mind, incorporating features that make your 
                    bathroom safe and comfortable for users of all ages and abilities, without sacrificing style or luxury.
                  </p>
                </div>
              </div>
            </div>
            <div className="reason-item reverse">
              <div className="reason-content">
                <div className="reason-text">
                  <h3 className="reason-title">Code Compliance Specialists</h3>
                  <p className="reason-description">
                    Bathroom renovations involve complex electrical, plumbing, and ventilation requirements. We handle 
                    all permits, inspections, and code compliance to ensure your project meets all safety standards.
                  </p>
                </div>
                <div className="reason-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Tab Layout */}
      <section className="services-section">
        <div className="bathroom-container">
          <h2 className="bathroom-section-title">Comprehensive Bathroom Remodeling Services</h2>
          <div className="services-tabs">
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'showers' ? 'active' : ''}`} 
                onClick={() => setActiveTab('showers')}
              >
                Showers & Bathing
              </button>
              <button 
                className={`tab-btn ${activeTab === 'vanities' ? 'active' : ''}`} 
                onClick={() => setActiveTab('vanities')}
              >
                Vanities & Storage
              </button>
              <button 
                className={`tab-btn ${activeTab === 'lighting' ? 'active' : ''}`} 
                onClick={() => setActiveTab('lighting')}
              >
                Lighting & Electrical
              </button>
              <button 
                className={`tab-btn ${activeTab === 'flooring' ? 'active' : ''}`} 
                onClick={() => setActiveTab('flooring')}
              >
                Flooring & Walls
              </button>
            </div>
            {activeTab === 'showers' && (
              <div className="tab-content active">
                <div className="service-detail">
                  <div className="service-detail-left">
                    <img src="/images/bathroom-2.jpg" alt="Luxury shower systems" />
                  </div>
                  <div className="service-detail-right">
                    <h3>Luxury Shower & Bathing Solutions</h3>
                    <div className="service-columns">
                      <div className="service-column">
                        <h4>Luxury Shower Systems:</h4>
                        <ul>
                          <li>Walk-In Showers - Curbless designs with linear drains</li>
                          <li>Steam Showers - Built-in steam generators</li>
                          <li>Multi-Head Systems - Rain heads, body jets, and handheld</li>
                          <li>Frameless Glass Enclosures - Custom-fitted glass</li>
                          <li>Tile & Stone Surrounds - Natural stone and porcelain</li>
                          <li>Niche & Bench Seating - Built-in storage and comfort</li>
                        </ul>
                      </div>
                      <div className="service-column">
                        <h4>Bathtub Options:</h4>
                        <ul>
                          <li>Freestanding Soaking Tubs - Statement pieces</li>
                          <li>Alcove & Drop-In Tubs - Space-efficient options</li>
                          <li>Walk-In Tubs - Safe, accessible bathing</li>
                          <li>Jetted & Air Tubs - Therapeutic features</li>
                          <li>Japanese Soaking Tubs - Deep, compact designs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'vanities' && (
              <div className="tab-content active">
                <div className="service-detail">
                  <div className="service-detail-left">
                    <img src="/images/bathroom-transparent-interior.png" alt="Custom vanities" />
                  </div>
                  <div className="service-detail-right">
                    <h3>Vanities & Storage Solutions</h3>
                    <div className="service-columns">
                      <div className="service-column">
                        <h4>Custom Vanity Designs:</h4>
                        <ul>
                          <li>Floating Vanities - Modern, space-enhancing designs</li>
                          <li>Double Sink Vanities - Perfect for master bathrooms</li>
                          <li>Vessel Sink Combinations - Artistic focal points</li>
                          <li>Antique & Repurposed Vanities - Unique character pieces</li>
                          <li>Built-In Linen Storage - Seamless integration</li>
                        </ul>
                      </div>
                      <div className="service-column">
                        <h4>Countertop Materials:</h4>
                        <ul>
                          <li>Quartz Surfaces - Non-porous and stain-resistant</li>
                          <li>Natural Stone - Marble, granite, and travertine</li>
                          <li>Solid Surface - Seamless undermount integration</li>
                          <li>Concrete Counters - Industrial chic with custom colors</li>
                          <li>Wood Countertops - Warm, natural surfaces</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'lighting' && (
              <div className="tab-content active">
                <div className="service-detail">
                  <div className="service-detail-left">
                    <img src="/images/bathroom.jpg" alt="Bathroom lighting" />
                  </div>
                  <div className="service-detail-right">
                    <h3>Lighting Design & Electrical</h3>
                    <div className="service-columns">
                      <div className="service-column">
                        <h4>Lighting Design:</h4>
                        <ul>
                          <li>Vanity Lighting - Proper illumination for grooming</li>
                          <li>Recessed Ceiling Lights - General ambient lighting</li>
                          <li>Accent Lighting - Toe-kick lights and decorative fixtures</li>
                          <li>Natural Light Enhancement - Skylights and windows</li>
                          <li>Dimmer Controls - Adjustable lighting for different moods</li>
                        </ul>
                      </div>
                      <div className="service-column">
                        <h4>Electrical Upgrades:</h4>
                        <ul>
                          <li>GFCI Outlets - Safety-required outlets near water</li>
                          <li>USB Charging Stations - Convenient device charging</li>
                          <li>Exhaust Fan Installation - Proper ventilation</li>
                          <li>Heated Floor Systems - Radiant heating for comfort</li>
                          <li>Smart Home Integration - Automated controls</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'flooring' && (
              <div className="tab-content active">
                <div className="service-detail">
                  <div className="service-detail-left">
                    <img src="/images/bathroom-beige.jpg" alt="Bathroom flooring" />
                  </div>
                  <div className="service-detail-right">
                    <h3>Flooring & Wall Treatments</h3>
                    <div className="service-columns">
                      <div className="service-column">
                        <h4>Waterproof Flooring Options:</h4>
                        <ul>
                          <li>Porcelain & Ceramic Tile - Classic durability</li>
                          <li>Natural Stone - Marble, travertine, and slate</li>
                          <li>Luxury Vinyl Plank - Waterproof and comfortable</li>
                          <li>Heated Floor Systems - Radiant warmth</li>
                          <li>Penny & Mosaic Tiles - Textured slip resistance</li>
                        </ul>
                      </div>
                      <div className="service-column">
                        <h4>Wall Treatments:</h4>
                        <ul>
                          <li>Subway & Metro Tiles - Timeless designs</li>
                          <li>Natural Stone Walls - Travertine and marble features</li>
                          <li>Waterproof Paint Systems - Specialized paints</li>
                          <li>Shiplap & Wainscoting - Traditional charm</li>
                          <li>Glass & Metal Accents - Contemporary touches</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bathroom Styles - Carousel Layout */}
      <section className="styles-section">
        <div className="bathroom-container">
          <h2 className="bathroom-section-title">Popular Bathroom Styles</h2>
          <div className="styles-carousel">
            <div className="style-slide active">
              <div className="style-visual">
                <div className={`style-mockup ${slides[activeSlide].mockupClass}`}>
                  {slides[activeSlide].mockupClass === '' && (
                    <>
                      <div className="mockup-element tub"></div>
                      <div className="mockup-element vanity"></div>
                      <div className="mockup-element shower"></div>
                      <div className="mockup-element plants"></div>
                    </>
                  )}
                  {slides[activeSlide].mockupClass === 'modern' && (
                    <>
                      <div className="mockup-element floating-vanity"></div>
                      <div className="mockup-element frameless-shower"></div>
                      <div className="mockup-element wall-toilet"></div>
                      <div className="mockup-element led-strip"></div>
                    </>
                  )}
                  {slides[activeSlide].mockupClass === 'traditional' && (
                    <>
                      <div className="mockup-element clawfoot-tub"></div>
                      <div className="mockup-element pedestal-sink"></div>
                      <div className="mockup-element subway-tile"></div>
                      <div className="mockup-element crown-molding"></div>
                    </>
                  )}
                  {slides[activeSlide].mockupClass === 'coastal' && (
                    <>
                      <div className="mockup-element vessel-sink"></div>
                      <div className="mockup-element driftwood"></div>
                      <div className="mockup-element sea-glass"></div>
                      <div className="mockup-element natural-light"></div>
                    </>
                  )}
                </div>
              </div>
              <div className="style-info">
                <h3 className="style-name">{slides[activeSlide].name}</h3>
                <p className="style-desc">{slides[activeSlide].description}</p>
                <ul className="style-features">
                  {slides[activeSlide].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="carousel-nav">
              <button className="nav-btn prev" onClick={prevSlide}>‹</button>
              <div className="nav-dots">
                {slides.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${index === activeSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
              <button className="nav-btn next" onClick={nextSlide}>›</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Types - Grid with Overlays */}
      <section className="bathroom-types-section">
        <div className="container">
          <h2 className="section-title">Bathroom Types We Remodel</h2>
          <div className="types-grid">
            <div className="type-card master">
              <div className="type-background">
                <div className="type-overlay">
                  <h3 className="type-title">Master Bathroom Suites</h3>
                  <p className="type-description">Create your personal luxury retreat</p>
                  <ul className="type-features">
                    <li>Large walk-in showers with multiple heads</li>
                    <li>Freestanding soaking tubs</li>
                    <li>Double vanities with ample storage</li>
                    <li>Private toilet areas</li>
                    <li>Heated floors and towel warmers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="type-card family">
              <div className="type-background">
                <div className="type-overlay">
                  <h3 className="type-title">Family Bathrooms</h3>
                  <p className="type-description">Functional spaces that work for everyone</p>
                  <ul className="type-features">
                    <li>Durable, easy-to-clean surfaces</li>
                    <li>Combination tub/shower units</li>
                    <li>Ample storage for supplies</li>
                    <li>Safety features and non-slip surfaces</li>
                    <li>Kid-friendly heights and features</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="type-card guest">
              <div className="type-background">
                <div className="type-overlay">
                  <h3 className="type-title">Guest & Powder Rooms</h3>
                  <p className="type-description">Make a great impression on visitors</p>
                  <ul className="type-features">
                    <li>Stylish vanities for small spaces</li>
                    <li>Decorative mirrors and lighting</li>
                    <li>High-end finishes in compact packages</li>
                    <li>Interesting wall treatments</li>
                    <li>Unique design elements that wow</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="type-card accessible">
              <div className="type-background">
                <div className="type-overlay">
                  <h3 className="type-title">Accessible Bathrooms</h3>
                  <p className="type-description">Safe, comfortable spaces for all abilities</p>
                  <ul className="type-features">
                    <li>Curbless showers with grab bars</li>
                    <li>Comfort-height toilets</li>
                    <li>Wide doorways and turning spaces</li>
                    <li>Non-slip flooring and safety features</li>
                    <li>Stylish designs that don't feel institutional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment - Visual Budget Bars */}
      <section className="investment-section">
        <div className="container">
          <h2 className="section-title">Investment & Value</h2>
          <div className="budget-visual">
            <div className="budget-bar-container">
              <div className="budget-bar basic">
                <div className="budget-fill" style={{width: '25%'}}></div>
                <div className="budget-info">
                  <h3>Refresh & Update</h3>
                  <div className="budget-range">$8,000 - $15,000</div>
                  <ul>
                    <li>New vanity and countertop</li>
                    <li>Updated lighting and fixtures</li>
                    <li>Fresh paint and accessories</li>
                    <li>Minor plumbing updates</li>
                  </ul>
                </div>
              </div>
              <div className="budget-bar mid">
                <div className="budget-fill" style={{width: '60%'}}></div>
                <div className="budget-info">
                  <h3>Mid-Range Renovation</h3>
                  <div className="budget-range">$15,000 - $35,000</div>
                  <ul>
                    <li>New shower or tub installation</li>
                    <li>Quality tile work and flooring</li>
                    <li>Custom vanity and storage</li>
                    <li>Electrical and ventilation upgrades</li>
                  </ul>
                </div>
              </div>
              <div className="budget-bar luxury">
                <div className="budget-fill" style={{width: '100%'}}></div>
                <div className="budget-info">
                  <h3>Luxury Transformation</h3>
                  <div className="budget-range">$35,000 - $75,000+</div>
                  <ul>
                    <li>High-end materials and finishes</li>
                    <li>Custom features and built-ins</li>
                    <li>Smart technology integration</li>
                    <li>Complete layout modifications</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="roi-highlight">
              <div className="roi-stat">
                <div className="roi-number">60-70%</div>
                <div className="roi-label">Return on Investment</div>
              </div>
              <div className="roi-benefits">
                <div className="benefit-item">✓ Improves home marketability</div>
                <div className="benefit-item">✓ Enhances daily quality of life</div>
                <div className="benefit-item">✓ Increases home's overall value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Split with Process */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-split">
            <div className="cta-left">
              <h2 className="cta-title">Ready to Create Your Dream Bathroom?</h2>
              <p className="cta-description">
                Transform your daily routine with a bathroom that inspires and rejuvenates! 
                Every morning should start in a space that makes you feel pampered and refreshed.
              </p>
              <div className="cta-buttons">
                <a href="tel:9093495255" className="cta-button primary large">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Call for FREE Consultation
                </a>
                <a href="mailto:bnbuilders@yahoo.com" className="cta-button secondary large">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email Your Vision
                </a>
              </div>
            </div>
            <div className="cta-right">
              <h3>Start Your Transformation:</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-icon">1</div>
                  <div className="step-text">
                    <strong>Schedule</strong> your free consultation
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-icon">2</div>
                  <div className="step-text">
                    <strong>Design</strong> your perfect bathroom retreat
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-icon">3</div>
                  <div className="step-text">
                    <strong>Relax</strong> while we build your spa oasis
                  </div>
                </div>
              </div>
              <div className="free-services">
                <h4>Free Services Included:</h4>
                <div className="services-tags">
                  <span>Initial design consultation</span>
                  <span>Detailed project estimates</span>
                  <span>3D renderings for major remodels</span>
                  <span>Fixture and material guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BathroomRemodeling;
