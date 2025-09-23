import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './ConcreteServices.css';

const ConcreteServices = () => {
  const [activeCategory, setActiveCategory] = useState('foundations');

  const concreteServices = {
    foundations: {
      title: 'Foundation Services',
      image: '/images/exterior-work-foundation.jpg',
      description: 'Strong foundations that support your dreams for generations',
      services: [
        'Slab-on-Grade Foundations - Efficient, cost-effective for single-story homes',
        'Basement Foundations - Full or partial with proper waterproofing',
        'Crawl Space Foundations - Ventilated designs for moisture control',
        'Foundation Repair & Reinforcement - Crack repair and strengthening',
        'Seismic Retrofitting - Earthquake preparedness upgrades',
        'Drainage Solutions - French drains and foundation protection'
      ]
    },
    driveways: {
      title: 'Driveways & Parking Areas',
      image: '/images/closeup-cement-mixture.jpg',
      description: 'Durable surfaces that welcome you home every day',
      services: [
        'Standard Concrete Driveways - Long-lasting vehicle surfaces',
        'Decorative Concrete - Stamped, stained, and textured designs',
        'Exposed Aggregate - Natural stone textures with superior traction',
        'Colored Concrete - Integral colors and surface staining',
        'Commercial Parking Lots - Engineered for heavy traffic loads',
        'Heated Driveways - Radiant heating for snow prevention'
      ]
    },
    patios: {
      title: 'Patios & Outdoor Living',
      image: '/images/cement-closeup-2.jpg',
      description: 'Beautiful outdoor spaces for entertainment and relaxation',
      services: [
        'Custom Patios - Sized and shaped for your lifestyle',
        'Pool Decks - Non-slip surfaces with proper drainage',
        'Fire Pit Areas - Heat-resistant concrete with safety features',
        'Outdoor Kitchens - Foundations for grills and appliances',
        'Stamped Concrete - Realistic stone and tile patterns',
        'Acid Staining - Rich, variegated colors'
      ]
    },
    structural: {
      title: 'Structural Elements',
      image: '/images/working-on-cement-closeup.jpg',
      description: 'Custom concrete structures that solve unique challenges',
      services: [
        'Retaining Walls - Gravity and reinforced wall systems',
        'Steps & Staircases - Safe, code-compliant access solutions',
        'Privacy Walls - Sound barriers and visual screening',
        'Equipment Pads - Foundations for HVAC and utilities',
        'Planters & Raised Beds - Integrated landscape elements',
        'Water Features - Foundations for fountains and ponds'
      ]
    }
  };

  const decorativeOptions = [
    {
      name: 'Stamped Concrete',
      description: 'Realistic patterns mimicking stone, brick, and tile',
      features: ['Natural Stone Patterns', 'Brick & Paver Looks', 'Wood Plank Designs', 'Custom Patterns']
    },
    {
      name: 'Acid Staining',
      description: 'Chemical reactions creating unique, permanent colors',
      features: ['Variegated Colors', 'Permanent Finish', 'Low Maintenance', 'Eco-Friendly Process']
    },
    {
      name: 'Exposed Aggregate',
      description: 'Natural stone textures with superior slip resistance',
      features: ['Enhanced Traction', 'Natural Beauty', 'Durable Surface', 'Weather Resistant']
    },
    {
      name: 'Polished Concrete',
      description: 'Mirror-like finishes for modern, sophisticated spaces',
      features: ['High-Gloss Finish', 'Easy Maintenance', 'Stain Resistant', 'Industrial Chic']
    }
  ];

  return (
    <div className="concrete-page">
      <SEO 
        title="Concrete Services | BN Construction Brentwood, CA"
        description="Professional concrete services in Brentwood, CA. Foundations, driveways, patios, retaining walls, decorative concrete & more. Expert concrete contractors with 20+ years experience. Licensed & insured. Call +1 (925) 497-9802 for free estimate."
        keywords="concrete services Brentwood CA, concrete contractors, foundations, driveways, patios, retaining walls, decorative concrete, stamped concrete, concrete repair, commercial concrete"
      />
      <Header />
      
      {/* Hero Section - Diagonal Split */}
      <section className="concrete-hero">
        <div className="concrete-hero-container">
          <div className="concrete-hero-content">
            <div className="concrete-hero-badge">
              <span>Concrete Services</span>
            </div>
            <h1 className="concrete-hero-title">
              Building Strong
              <span className="concrete-hero-highlight">Foundations for Life</span>
            </h1>
            <p className="concrete-hero-description">
              Concrete is the backbone of construction—providing strength, durability, and reliability 
              that lasts for generations. With 20+ years of mastered craftsmanship, we deliver concrete 
              solutions that stand the test of time.
            </p>
            <div className="concrete-hero-features">
              <div className="concrete-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>30-50+ Year Lifespan</span>
              </div>
              <div className="concrete-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Professional Equipment</span>
              </div>
              <div className="concrete-feature-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Premium Materials</span>
              </div>
            </div>
            <div className="concrete-hero-actions">
              <a href="tel:9093495255" className="concrete-cta-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Free Site Evaluation
              </a>
              <a href="#services" className="concrete-cta-secondary">
                View Concrete Services
              </a>
            </div>
          </div>
          <div className="concrete-hero-visual">
            <div className="concrete-hero-image-container">
              <img src="/images/working-on-cement-closeup.jpg" alt="Professional concrete work" />
              <div className="concrete-hero-overlay-badge">
                <div className="concrete-overlay-stat">
                  <span className="concrete-stat-value">$8-35</span>
                  <span className="concrete-stat-label">per sq ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Interactive Cards */}
      <section id="services" className="concrete-services">
        <div className="concrete-container">
          <h2 className="concrete-section-title">Comprehensive Concrete Services</h2>
          <div className="concrete-services-grid">
            <div className="concrete-category-nav">
              {Object.entries(concreteServices).map(([key, service]) => (
                <button
                  key={key}
                  className={`concrete-category-btn ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <span className="concrete-category-title">{service.title}</span>
                  <span className="concrete-category-description">{service.description}</span>
                </button>
              ))}
            </div>
            
            <div className="concrete-service-display">
              <div className="concrete-service-image">
                <img 
                  src={concreteServices[activeCategory].image} 
                  alt={concreteServices[activeCategory].title}
                />
              </div>
              <div className="concrete-service-details">
                <h3 className="concrete-service-title">
                  {concreteServices[activeCategory].title}
                </h3>
                <p className="concrete-service-description">
                  {concreteServices[activeCategory].description}
                </p>
                <div className="concrete-service-list">
                  {concreteServices[activeCategory].services.map((service, index) => (
                    <div key={index} className="concrete-service-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Options Section - Card Grid */}
      <section className="concrete-decorative">
        <div className="concrete-container">
          <h2 className="concrete-section-title">Decorative Concrete Techniques</h2>
          <p className="concrete-decorative-intro">
            Transform plain concrete into beautiful surfaces that rival expensive materials 
            while maintaining durability and value.
          </p>
          <div className="concrete-decorative-grid">
            {decorativeOptions.map((option, index) => (
              <div key={index} className="concrete-decorative-card">
                <div className="concrete-decorative-header">
                  <h3 className="concrete-decorative-title">{option.name}</h3>
                  <p className="concrete-decorative-description">{option.description}</p>
                </div>
                <div className="concrete-decorative-features">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="concrete-decorative-feature">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Step-by-Step */}
      <section className="concrete-process">
        <div className="concrete-container">
          <h2 className="concrete-section-title">Our Concrete Process</h2>
          <div className="concrete-process-steps">
            <div className="concrete-process-step">
              <div className="concrete-process-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="concrete-process-content">
                <h3>Planning & Preparation</h3>
                <p className="concrete-process-duration">1-2 Days</p>
                <p>Site assessment, soil testing, design engineering, permit acquisition, and precise excavation to proper depths and grades.</p>
              </div>
            </div>
            
            <div className="concrete-process-step">
              <div className="concrete-process-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <div className="concrete-process-content">
                <h3>Formation & Reinforcement</h3>
                <p className="concrete-process-duration">1-2 Days</p>
                <p>Compacted base preparation, precise form setting, steel reinforcement installation, and utility coordination.</p>
              </div>
            </div>
            
            <div className="concrete-process-step">
              <div className="concrete-process-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="concrete-process-content">
                <h3>Concrete Placement</h3>
                <p className="concrete-process-duration">1 Day</p>
                <p>Fresh concrete delivery, proper placement and leveling, surface finishing, and application of curing compounds.</p>
              </div>
            </div>
            
            <div className="concrete-process-step">
              <div className="concrete-process-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div className="concrete-process-content">
                <h3>Curing & Completion</h3>
                <p className="concrete-process-duration">3-28 Days</p>
                <p>Protected curing process, form removal, decorative treatments, quality inspection, and site cleanup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Tiered Cards */}
      <section className="concrete-pricing">
        <div className="concrete-container">
          <h2 className="concrete-section-title">Investment & Value</h2>
          <div className="concrete-pricing-tiers">
            <div className="concrete-pricing-card">
              <div className="concrete-pricing-header">
                <h3>Basic Concrete</h3>
                <div className="concrete-price-range">
                  <span className="concrete-price">$8-12</span>
                  <span className="concrete-price-unit">per sq ft</span>
                </div>
              </div>
              <div className="concrete-pricing-features">
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Standard gray concrete</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Basic broom finish</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Standard reinforcement</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Basic thickness and design</span>
                </div>
              </div>
            </div>
            
            <div className="concrete-pricing-card featured">
              <div className="concrete-pricing-badge">Most Popular</div>
              <div className="concrete-pricing-header">
                <h3>Decorative Concrete</h3>
                <div className="concrete-price-range">
                  <span className="concrete-price">$12-20</span>
                  <span className="concrete-price-unit">per sq ft</span>
                </div>
              </div>
              <div className="concrete-pricing-features">
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Colored or stamped concrete</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Exposed aggregate finishes</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Enhanced reinforcement</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Decorative borders and accents</span>
                </div>
              </div>
            </div>
            
            <div className="concrete-pricing-card">
              <div className="concrete-pricing-header">
                <h3>Premium Concrete</h3>
                <div className="concrete-price-range">
                  <span className="concrete-price">$20-35</span>
                  <span className="concrete-price-unit">per sq ft</span>
                </div>
              </div>
              <div className="concrete-pricing-features">
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Multiple colors and patterns</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Complex designs and layouts</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>High-end sealers and finishes</span>
                </div>
                <div className="concrete-pricing-feature">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>Specialty features and details</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="concrete-value-proposition">
            <h3>Long-Term Value Benefits:</h3>
            <div className="concrete-value-items">
              <div className="concrete-value-item">
                <span className="concrete-value-highlight">30-50+ years</span>
                <span>Lifespan with proper maintenance</span>
              </div>
              <div className="concrete-value-item">
                <span className="concrete-value-highlight">Low maintenance</span>
                <span>Minimal ongoing costs</span>
              </div>
              <div className="concrete-value-item">
                <span className="concrete-value-highlight">Property value</span>
                <span>Increases home worth</span>
              </div>
              <div className="concrete-value-item">
                <span className="concrete-value-highlight">Functionality</span>
                <span>Enhanced usability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="concrete-final-cta">
        <div className="concrete-container">
          <div className="concrete-cta-content">
            <h2 className="concrete-cta-title">Ready to Build Something Solid?</h2>
            <p className="concrete-cta-description">
              Strong foundations require expert knowledge and quality materials. Trust BN Construction 
              for concrete work that stands the test of time.
            </p>
            <div className="concrete-cta-buttons">
              <a href="tel:9093495255" className="concrete-cta-primary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Free Site Evaluation
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="concrete-cta-secondary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Project Details
              </a>
            </div>
            <div className="concrete-free-services">
              <h3>Free Services Include:</h3>
              <div className="concrete-services-list">
                <span>Site evaluation and consultation</span>
                <span>Detailed written estimates</span>
                <span>Soil testing recommendations</span>
                <span>Design assistance and options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConcreteServices;
