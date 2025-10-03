import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './CommercialServices.css';

const CommercialServices = () => {
  const [activeService, setActiveService] = useState('retail');

  const services = {
    retail: {
      title: 'Retail & Restaurant Build-Outs',
      description: 'Creating spaces that attract customers and drive business success',
      features: [
        'Eye-catching storefront design that draws customers',
        'Efficient interior layouts optimizing customer experience',
        'Commercial kitchen construction with code compliance',
        'Custom bar construction with full integration',
        'Security systems and POS infrastructure',
        'ADA-compliant restroom facilities'
      ],
      applications: [
        'Restaurants & Cafes',
        'Retail Stores',
        'Medical Dispensaries',
        'Auto Service Centers',
        'Salons & Spas',
        'Fitness Centers'
      ]
    },
    office: {
      title: 'Office & Professional Spaces',
      description: 'Professional environments that enhance productivity and impress clients',
      features: [
        'Open floor plans promoting collaboration',
        'Soundproof private offices for confidentiality',
        'Conference rooms with technology integration',
        'Impressive reception areas for client visits',
        'Climate-controlled server rooms with backup power',
        'Employee break rooms with kitchen facilities'
      ],
      applications: [
        'Law Offices',
        'Medical Practices',
        'Accounting Firms',
        'Real Estate Offices',
        'Insurance Agencies',
        'Consulting Firms'
      ]
    },
    industrial: {
      title: 'Industrial & Warehouse Facilities',
      description: 'Heavy-duty construction for manufacturing and distribution',
      features: [
        'Heavy-duty concrete for equipment loads',
        'Efficient assembly line layouts',
        'Quality control areas with proper lighting',
        'Loading docks with truck access optimization',
        'High-bay storage with vertical optimization',
        'Climate control for sensitive processes'
      ],
      applications: [
        'Manufacturing Floors',
        'Warehouse Facilities',
        'Distribution Centers',
        'Storage Facilities',
        'Production Lines',
        'Quality Control Labs'
      ]
    }
  };

  return (
    <div className="commercial-page">
      <SEO 
        title="Commercial Construction Services | BN Construction Brentwood, CA"
        description="Expert commercial construction and build-out services in Brentwood, CA. Office renovations, retail build-outs, restaurant construction, medical facilities & more. Minimal business disruption. Licensed commercial contractors. Call +1 (925) 497-9802."
        keywords="commercial construction Brentwood CA, commercial contractors, office build-out, retail construction, restaurant build-out, medical office construction, commercial renovation, tenant improvements"
      />
      <Header />
      
      {/* Hero Section - Split with Stats */}
      <section className="commercial-hero">
        <div className="commercial-hero-overlay">
          <img 
            src="/images/office-building-tower-with-sky.jpg" 
            alt="Commercial office building" 
            className="commercial-hero-bg"
          />
          <div className="commercial-hero-gradient"></div>
        </div>
        <div className="commercial-hero-content">
          <div className="commercial-container">
            <div className="commercial-hero-main">
              <div className="commercial-hero-text">
                <div className="commercial-hero-badge">
                  <span>Commercial Construction Services</span>
                </div>
                <h1 className="commercial-hero-title">
                  Elevating Business Success Through
                  <span className="commercial-hero-highlight">Expert Construction</span>
                </h1>
                <p className="commercial-hero-description">
                  Your commercial space is the foundation of your business success. With 20+ years 
                  of experience, we deliver construction solutions that enhance productivity, attract 
                  customers, and support your business goals.
                </p>
                <div className="commercial-hero-actions">
                  <a href="tel:+19254979802" className="commercial-cta-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    Free Business Consultation
                  </a>
                  <a href="#services" className="commercial-cta-secondary">
                    View Our Services
                  </a>
                </div>
              </div>
              <div className="commercial-hero-stats">
                <div className="commercial-stat-card">
                  <div className="commercial-stat-number">20+</div>
                  <div className="commercial-stat-label">Years Experience</div>
                </div>
                <div className="commercial-stat-card">
                  <div className="commercial-stat-number">500+</div>
                  <div className="commercial-stat-label">Projects Completed</div>
                </div>
                <div className="commercial-stat-card">
                  <div className="commercial-stat-number">100%</div>
                  <div className="commercial-stat-label">Code Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Feature Grid */}
      <section className="commercial-why-choose">
        <div className="commercial-container">
          <h2 className="commercial-section-title">Why Choose BN Construction for Commercial Projects?</h2>
          <div className="commercial-features-grid">
            <div className="commercial-feature-card">
              <div className="commercial-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="commercial-feature-title">Commercial Code Expertise</h3>
              <p className="commercial-feature-description">
                Complex building codes, ADA compliance, fire safety, and zoning requirements. 
                Our team stays current with all commercial standards.
              </p>
            </div>
            <div className="commercial-feature-card">
              <div className="commercial-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="commercial-feature-title">Minimal Business Disruption</h3>
              <p className="commercial-feature-description">
                Time is money in business. Our project management minimizes disruption through 
                careful scheduling and flexible timing that accommodates your operations.
              </p>
            </div>
            <div className="commercial-feature-card">
              <div className="commercial-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <h3 className="commercial-feature-title">Industry-Specific Experience</h3>
              <p className="commercial-feature-description">
                From restaurant kitchens to medical offices, we have the specialized 
                knowledge to deliver spaces perfectly suited for your business needs.
              </p>
            </div>
            <div className="commercial-feature-card">
              <div className="commercial-feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="commercial-feature-title">Comprehensive Project Management</h3>
              <p className="commercial-feature-description">
                Multiple trades, strict timelines, complex coordination. Our experienced 
                managers handle every detail from permits to final inspections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Tabbed Interface */}
      <section id="services" className="commercial-services">
        <div className="commercial-container">
          <h2 className="commercial-section-title">Commercial Construction Services</h2>
          <div className="commercial-services-tabs">
            <div className="commercial-tab-navigation">
              <button 
                className={`commercial-tab-btn ${activeService === 'retail' ? 'active' : ''}`}
                onClick={() => setActiveService('retail')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                Retail & Restaurant
              </button>
              <button 
                className={`commercial-tab-btn ${activeService === 'office' ? 'active' : ''}`}
                onClick={() => setActiveService('office')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
                Office & Professional
              </button>
              <button 
                className={`commercial-tab-btn ${activeService === 'industrial' ? 'active' : ''}`}
                onClick={() => setActiveService('industrial')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 21H2v-2h20v2zM20 8h-3V6l-2.09-.73L12 4l-2.91 1.27L7 6v2H4c-1.1 0-2 .9-2 2v7h20v-7c0-1.1-.9-2-2-2zm0 7H4v-5h16v5z"/>
                </svg>
                Industrial & Warehouse
              </button>
            </div>
            
            <div className="commercial-tab-content">
              <div className="commercial-service-details">
                <div className="commercial-service-main">
                  <h3 className="commercial-service-title">{services[activeService].title}</h3>
                  <p className="commercial-service-description">{services[activeService].description}</p>
                  
                  <div className="commercial-service-features">
                    <h4>Key Features & Capabilities:</h4>
                    <ul>
                      {services[activeService].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="commercial-service-applications">
                  <h4>Perfect For:</h4>
                  <div className="commercial-applications-grid">
                    {services[activeService].applications.map((app, index) => (
                      <div key={index} className="commercial-application-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        {app}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section className="commercial-process">
        <div className="commercial-container">
          <h2 className="commercial-section-title">Our Project Management Process</h2>
          <div className="commercial-process-timeline">
            <div className="commercial-process-step">
              <div className="commercial-process-number">1</div>
              <div className="commercial-process-content">
                <h3>Pre-Construction</h3>
                <p className="commercial-process-duration">2-4 Weeks</p>
                <ul>
                  <li>Needs assessment and site analysis</li>
                  <li>Design development and permits</li>
                  <li>Budget finalization</li>
                </ul>
              </div>
            </div>
            <div className="commercial-process-connector"></div>
            <div className="commercial-process-step">
              <div className="commercial-process-number">2</div>
              <div className="commercial-process-content">
                <h3>Planning & Coordination</h3>
                <p className="commercial-process-duration">1-2 Weeks</p>
                <ul>
                  <li>Project scheduling coordination</li>
                  <li>Business continuity planning</li>
                  <li>Safety and quality protocols</li>
                </ul>
              </div>
            </div>
            <div className="commercial-process-connector"></div>
            <div className="commercial-process-step">
              <div className="commercial-process-number">3</div>
              <div className="commercial-process-content">
                <h3>Construction</h3>
                <p className="commercial-process-duration">Variable Timeline</p>
                <ul>
                  <li>Site preparation and protection</li>
                  <li>Structural and MEP installation</li>
                  <li>Interior construction and testing</li>
                </ul>
              </div>
            </div>
            <div className="commercial-process-connector"></div>
            <div className="commercial-process-step">
              <div className="commercial-process-number">4</div>
              <div className="commercial-process-content">
                <h3>Completion & Handover</h3>
                <p className="commercial-process-duration">1 Week</p>
                <ul>
                  <li>Final inspections and testing</li>
                  <li>System training and documentation</li>
                  <li>Project closeout and support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section - Pricing Cards */}
      <section className="commercial-investment">
        <div className="commercial-container">
          <h2 className="commercial-section-title">Investment & ROI</h2>
          <div className="commercial-pricing-cards">
            <div className="commercial-pricing-card">
              <h3 className="commercial-pricing-title">Tenant Improvements</h3>
              <div className="commercial-pricing-amount">$25-50</div>
              <div className="commercial-pricing-unit">per sq ft</div>
              <ul className="commercial-pricing-features">
                <li>Basic layout modifications</li>
                <li>Standard finishes and fixtures</li>
                <li>Essential electrical and plumbing updates</li>
                <li>Paint and flooring updates</li>
              </ul>
            </div>
            <div className="commercial-pricing-card featured">
              <div className="commercial-pricing-badge">Most Popular</div>
              <h3 className="commercial-pricing-title">Comprehensive Renovations</h3>
              <div className="commercial-pricing-amount">$50-100</div>
              <div className="commercial-pricing-unit">per sq ft</div>
              <ul className="commercial-pricing-features">
                <li>Major layout changes</li>
                <li>New HVAC and electrical systems</li>
                <li>Quality finishes throughout</li>
                <li>Technology integration</li>
              </ul>
            </div>
            <div className="commercial-pricing-card">
              <h3 className="commercial-pricing-title">Ground-Up Construction</h3>
              <div className="commercial-pricing-amount">$100-200+</div>
              <div className="commercial-pricing-unit">per sq ft</div>
              <ul className="commercial-pricing-features">
                <li>Complete new construction</li>
                <li>All building systems and infrastructure</li>
                <li>High-end finishes and features</li>
                <li>Full site development</li>
              </ul>
            </div>
          </div>
          
          <div className="commercial-roi-benefits">
            <h3>Return on Investment Benefits:</h3>
            <div className="commercial-roi-grid">
              <div className="commercial-roi-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
                <span>Increased Productivity</span>
              </div>
              <div className="commercial-roi-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Customer Attraction</span>
              </div>
              <div className="commercial-roi-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c4.42 0 8 3.58 8 8s-3.58 8-8 8c-1.95 0-3.73-.71-5.11-1.89L9.5 19.5 8 18l1.39-1.39C8.71 15.73 8 13.95 8 12c0-4.42 3.58-8 8-8z"/>
                </svg>
                <span>Employee Retention</span>
              </div>
              <div className="commercial-roi-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
                <span>Energy Savings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="commercial-final-cta">
        <div className="commercial-container">
          <div className="commercial-cta-content">
            <h2 className="commercial-cta-title">Ready to Transform Your Business Space?</h2>
            <p className="commercial-cta-description">
              Your business deserves a space that works as hard as you do. Let BN Construction 
              create the commercial environment that supports your success.
            </p>
            <div className="commercial-cta-buttons">
              <a href="tel:+19254979802" className="commercial-cta-primary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call for Business Consultation
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="commercial-cta-secondary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Project Details
              </a>
            </div>
            <div className="commercial-free-services">
              <h3>Free Services Include:</h3>
              <div className="commercial-services-list">
                <span>Business needs assessment</span>
                <span>Space planning consultation</span>
                <span>Detailed project estimates</span>
                <span>Code compliance review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialServices;
