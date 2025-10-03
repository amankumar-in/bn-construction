import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <SEO 
        title="BN Construction - Premier Home & Commercial Construction in Brentwood, CA"
        description="Expert construction and remodeling services in Brentwood, CA. Kitchen remodeling, bathroom renovations, ADU construction, concrete services, and commercial build-outs. 20+ years experience. Licensed, bonded & insured. Call +1 (925) 497-9802 for free consultation."
        keywords="construction contractor Brentwood CA, home remodeling, kitchen renovation, bathroom remodeling, ADU construction, concrete services, commercial construction, licensed contractor, emergency construction services"
      />
      <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/house-exterior-with-sky.jpg" 
            alt="Beautiful home exterior" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-badge">
              <span>Premier Home & Commercial Construction in Brentwood, CA</span>
            </div>
            <h1 className="hero-title">
              Your Home is Your Canvas.<br />
              <span className="hero-title-highlight">We're Your Master Craftsmen.</span>
            </h1>
            <p className="hero-subtitle">
              For over two decades, we've been transforming homes and businesses throughout Brentwood and the Greater Bay Area, 
              earning the trust of thousands of satisfied clients through our unwavering commitment to quality, integrity, and innovation.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div>
                  <span className="feature-title">Licensed, Bonded & Insured</span>
                  <span className="feature-desc">CA License #1113409</span>
                </div>
              </div>
              <div className="hero-feature">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div>
                  <span className="feature-title">Serving Brentwood & Surrounding Areas</span>
                  <span className="feature-desc">24/7 Emergency Service Available</span>
                </div>
              </div>
            </div>
            <div className="hero-cta">
              <a href="tel:+19254979802" className="cta-button primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Now: +1 (925) 497-9802
              </a>
              <a href="#services" className="cta-button secondary">
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why BN Construction Stands Above the Rest</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="feature-title">Two Decades of Excellence</h3>
              </div>
              <p className="feature-description">
                Since 2004, owner B. Nsiala has built BN Construction's reputation on three core principles: exceptional craftsmanship, 
                transparent communication, and guaranteed satisfaction. Every project receives the same meticulous attention to detail 
                that has made us Brentwood's most trusted construction partner.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                </svg>
                <h3 className="feature-title">Unbeatable Value Promise</h3>
              </div>
              <p className="feature-description">
                We believe premium construction shouldn't break the bank. Our competitive pricing, combined with special discounts 
                for seniors, military personnel, veterans, and first responders, ensures that exceptional quality remains accessible 
                to our entire community.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                <h3 className="feature-title">24/7 Emergency Response</h3>
              </div>
              <p className="feature-description">
                Construction emergencies don't wait for business hours. Neither do we. Our rapid-response team is available around 
                the clock to address urgent repairs, storm damage, and emergency situations that can't wait until morning.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
                <h3 className="feature-title">Complete Peace of Mind</h3>
              </div>
              <p className="feature-description">
                Every project is fully licensed, bonded, and insured. We carry comprehensive liability coverage and provide written 
                warranties on all work, ensuring your investment is protected for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Comprehensive Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-image">
                <img src="/images/kitchen-with-dining.jpg" alt="Residential remodeling" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Residential Remodeling</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Residential Remodeling</h3>
                <p className="service-description">
                  Transform your house into your dream home with our full-service remodeling solutions.
                </p>
                <ul className="service-features">
                  <li>Kitchen Renovations - From modern minimalist to rustic farmhouse</li>
                  <li>Bathroom Remodeling - Luxury spa retreats and functional family bathrooms</li>
                  <li>Whole House Renovations - Complete home transformations</li>
                  <li>Home Additions - Expand your living space without moving</li>
                  <li>Basement Finishing - Convert unused space into functional areas</li>
                  <li>Exterior Renovations - Boost curb appeal and property value</li>
                </ul>
                <a href="/kitchen-remodeling" className="service-link">Learn More</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/images/commerical-office-ceiling-worker.jpg" alt="Commercial construction" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Commercial Construction</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Commercial Construction</h3>
                <p className="service-description">
                  Elevate your business with professional commercial spaces that impress clients and inspire employees.
                </p>
                <ul className="service-features">
                  <li>Office Build-Outs - Modern, efficient workspaces</li>
                  <li>Retail Renovations - Customer-focused designs</li>
                  <li>Restaurant Construction - Code-compliant kitchens</li>
                  <li>Tenant Improvements - Customized business spaces</li>
                  <li>Medical Facilities - Specialized healthcare construction</li>
                  <li>Warehouse & Industrial - Functional efficiency and safety</li>
                </ul>
                <a href="/commercial-services" className="service-link">Learn More</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/images/working-on-cement-closeup.jpg" alt="Concrete services" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Concrete & Foundation</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Concrete & Foundation Services</h3>
                <p className="service-description">
                  Strong foundations for lasting structures with expert concrete work and decorative solutions.
                </p>
                <ul className="service-features">
                  <li>New Foundation Construction - Engineered to last generations</li>
                  <li>Foundation Repair & Waterproofing - Expert solutions</li>
                  <li>Decorative Concrete - Stamped, stained, and polished</li>
                  <li>Driveways & Walkways - Durable, attractive pathways</li>
                  <li>Patios & Outdoor Living - California outdoor lifestyle</li>
                  <li>Retaining Walls - Functional erosion prevention</li>
                </ul>
                <a href="/concrete-services" className="service-link">Learn More</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/images/adu-exterior.webp" alt="ADU construction" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">ADU Construction</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">ADU Construction - California's Housing Solution</h3>
                <p className="service-description">
                  Maximize your property's potential with Accessory Dwelling Units for rental income or family housing.
                </p>
                <ul className="service-features">
                  <li>Detached ADUs - Standalone units for rental income</li>
                  <li>Attached ADUs - Seamlessly integrated additions</li>
                  <li>Garage Conversions - Transform unused garage space</li>
                  <li>Junior ADUs - Efficient, compact living solutions</li>
                  <li>Permit & Planning - We handle all paperwork</li>
                  <li>Income Property Setup - Turn ADU into profitable rental</li>
                </ul>
                <a href="/adu-construction" className="service-link">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">The BN Construction Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Discovery & Consultation <span className="free-badge">(FREE)</span></h3>
                <p className="step-description">
                  Every great project starts with understanding your vision, needs, and budget. Our initial consultation 
                  includes detailed site evaluation, needs assessment, preliminary design concepts, transparent budget 
                  discussion, and timeline planning.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Design & Planning</h3>
                <p className="step-description">
                  Our design team works closely with you to create detailed plans that capture your vision including 
                  3D renderings, material selection guidance, permit acquisition, detailed timeline, and fixed-price 
                  contracts with no surprises.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Construction Excellence</h3>
                <p className="step-description">
                  Watch your vision come to life through expert craftsmanship with daily progress updates, clean 
                  organized work sites, quality control inspections, minimal disruption, and responsive communication 
                  throughout.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Final Walkthrough & Warranty</h3>
                <p className="step-description">
                  Your satisfaction is our success through comprehensive final inspection, detailed walkthrough and 
                  training, complete cleanup, written warranty on all work, and ongoing support for any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  BN Construction exceeded every expectation. Our kitchen renovation was completed on time, 
                  within budget, and the quality is simply outstanding. Three years later, we still get 
                  compliments from every visitor!
                </p>
                <div className="testimonial-author">
                  <strong>Sarah M.</strong>
                  <span>Brentwood Homeowner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  As a restaurant owner, I needed a contractor who understood commercial codes and could 
                  work around my operating schedule. BN Construction delivered perfectly - minimal disruption 
                  and exceptional results.
                </p>
                <div className="testimonial-author">
                  <strong>Carlos R.</strong>
                  <span>Restaurant Owner</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                <p className="testimonial-text">
                  Our ADU project added $150,000 to our property value and now generates $2,800/month in 
                  rental income. Best investment we've ever made!
                </p>
                <div className="testimonial-author">
                  <strong>Jennifer & Mark T.</strong>
                  <span>Property Investors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Construction Journey?</h2>
            <p className="cta-description">
              At BN Construction, we don't just build structures - we build relationships, trust, and dreams. 
              Let us show you why thousands of satisfied clients have made us their construction partner of choice.
            </p>
            <div className="cta-buttons">
              <a href="tel:+19254979802" className="cta-button primary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call for FREE Consultation: +1 (925) 497-9802
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="cta-button secondary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Your Project Details
              </a>
            </div>
            <div className="cta-info">
              <div className="cta-owner-quote">
                <p>
                  <em>"At BN Construction, we don't just build structures - we build relationships, trust, and dreams."</em>
                </p>
                <strong>- B. Nsiala, Owner & Master Craftsman</strong>
              </div>
              <div className="business-hours">
                <h4>Business Hours:</h4>
                <div className="hours-grid">
                  <span>Monday - Friday: 8:00 AM - 9:00 PM</span>
                  <span>Saturday - Sunday: 9:00 AM - 10:00 PM</span>
                  <span className="emergency">Emergency Services: Available 24/7</span>
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

export default HomePage;