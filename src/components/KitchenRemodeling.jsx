import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './KitchenRemodeling.css';

const KitchenRemodeling = () => {
  return (
    <div className="kitchen-page">
      <SEO 
        title="Kitchen Remodeling Services | BN Construction Brentwood, CA"
        description="Transform your kitchen into the heart of your home with BN Construction's expert kitchen remodeling services in Brentwood, CA. Custom cabinetry, countertops, flooring & lighting. 20+ years experience. Free consultation. Call (909) 349-5255."
        keywords="kitchen remodeling Brentwood CA, kitchen renovation, custom cabinetry, kitchen countertops, kitchen design, modern farmhouse kitchen, contemporary kitchen, kitchen contractors Brentwood"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="kitchen-hero">
        <div className="hero-background">
          <img 
            src="/images/kitchen-with-dining.jpg" 
            alt="Beautiful kitchen remodeling" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-badge">
              <span>Kitchen Remodeling Services</span>
            </div>
            <h1 className="hero-title">
              Transform Your Kitchen Into the
              <span className="hero-title-highlight">Heart of Your Home</span>
            </h1>
            <p className="hero-subtitle">
              Your kitchen is more than just a place to prepare meals—it's where families gather, memories are made, 
              and life happens. Our expert team has the skills and creativity to bring your vision to life.
            </p>
            <div className="hero-cta">
              <a href="tel:9093495255" className="cta-button primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Get Free Consultation
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
          <h2 className="section-title">Why Choose BN Construction for Your Kitchen Remodel?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="feature-title">Custom Design Excellence</h3>
              </div>
              <p className="feature-description">
                No two families are alike, and neither should their kitchens be. Our design team works closely with you 
                to create a completely customized space that fits your cooking style, family size, and aesthetic preferences.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="feature-title">Master Craftsmanship</h3>
              </div>
              <p className="feature-description">
                With over 20 years of experience, our skilled craftsmen bring unparalleled expertise to every project. 
                We take pride in our attention to detail, from perfectly aligned cabinet doors to flawlessly installed countertops.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                <h3 className="feature-title">Innovative Solutions</h3>
              </div>
              <p className="feature-description">
                We stay current with the latest kitchen trends, technologies, and materials to offer you cutting-edge solutions. 
                Smart storage, energy-efficient appliances, and innovative lighting designs maximize your kitchen's potential.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-header">
                <svg className="feature-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 className="feature-title">Minimal Disruption Promise</h3>
              </div>
              <p className="feature-description">
                We understand that kitchen renovations can disrupt your daily routine. Our efficient project management 
                and streamlined processes minimize downtime, maintaining some cooking capability throughout the renovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Comprehensive Kitchen Remodeling Services</h2>
          <div className="services-grid">
            
            {/* Custom Cabinetry */}
            <div className="service-card">
              <div className="service-image">
                <img src="/images/w00d-workers-cabinets.jpg" alt="Custom cabinetry" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Custom Cabinetry & Storage</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Custom Cabinetry & Storage Solutions</h3>
                <p className="service-description">
                  Premium cabinet options and innovative storage features designed for your lifestyle.
                </p>
                <div className="service-categories">
                  <div className="service-category">
                    <h4>Premium Cabinet Options:</h4>
                    <ul className="service-features">
                      <li>Solid Wood Cabinets - Oak, maple, cherry, and exotic wood species</li>
                      <li>Modern Frameless Cabinets - Sleek, contemporary European-style designs</li>
                      <li>Painted Cabinets - Custom colors and finishes to match any décor</li>
                      <li>Two-Tone Designs - Mix and match colors for visual interest</li>
                      <li>Glass Front Cabinets - Display beautiful dishes and glassware</li>
                    </ul>
                  </div>
                  <div className="service-category">
                    <h4>Innovative Storage Features:</h4>
                    <ul className="service-features">
                      <li>Pull-out drawers and organizers</li>
                      <li>Lazy Susans for corner cabinets</li>
                      <li>Spice racks and pantry systems</li>
                      <li>Hidden trash and recycling centers</li>
                      <li>Deep drawer storage for pots and pans</li>
                      <li>Under-cabinet lighting integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Countertops */}
            <div className="service-card">
              <div className="service-image">
                <img src="/images/kitchen-counter-design.jpg" alt="Kitchen countertops" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Countertop Installation</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Countertop Installation & Fabrication</h3>
                <p className="service-description">
                  Beautiful, durable countertops with expert fabrication and installation.
                </p>
                <div className="service-categories">
                  <div className="service-category">
                    <h4>Material Options:</h4>
                    <ul className="service-features">
                      <li>Quartz Countertops - Durable, non-porous, hundreds of colors</li>
                      <li>Granite Countertops - Natural beauty with unique patterns</li>
                      <li>Marble Countertops - Luxurious surfaces perfect for baking</li>
                      <li>Butcher Block - Warm, natural wood surfaces</li>
                      <li>Concrete Countertops - Industrial chic with unlimited customization</li>
                      <li>Stainless Steel - Professional-grade surfaces for serious cooks</li>
                    </ul>
                  </div>
                  <div className="service-category">
                    <h4>Expert Fabrication & Installation:</h4>
                    <ul className="service-features">
                      <li>Precise digital templating for perfect fit</li>
                      <li>Professional edge profiles and finishes</li>
                      <li>Seamless integration with sinks and appliances</li>
                      <li>Waterfall edges and specialty cuts</li>
                      <li>Matching backsplashes available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Flooring */}
            <div className="service-card">
              <div className="service-image">
                <img src="/images/kitechen-wooden-with-dining.jpg" alt="Kitchen flooring" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Flooring Solutions</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Flooring That Stands Up to Life</h3>
                <p className="service-description">
                  Durable and beautiful flooring options with professional installation.
                </p>
                <div className="service-categories">
                  <div className="service-category">
                    <h4>Durable & Beautiful Options:</h4>
                    <ul className="service-features">
                      <li>Luxury Vinyl Plank - Waterproof, comfortable underfoot</li>
                      <li>Ceramic & Porcelain Tile - Classic durability with modern designs</li>
                      <li>Hardwood Flooring - Timeless beauty that adds value</li>
                      <li>Natural Stone - Travertine, slate, and marble for luxury</li>
                      <li>Laminate Flooring - Budget-friendly with realistic wood looks</li>
                    </ul>
                  </div>
                  <div className="service-category">
                    <h4>Professional Installation:</h4>
                    <ul className="service-features">
                      <li>Proper subfloor preparation</li>
                      <li>Moisture barriers and underlayment</li>
                      <li>Precision cutting and fitting</li>
                      <li>Seamless transitions to adjoining rooms</li>
                      <li>Baseboards and trim work included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lighting & Electrical */}
            <div className="service-card">
              <div className="service-image">
                <img src="/images/kitchen-with-dining.jpg" alt="Kitchen lighting" />
                <div className="service-overlay">
                  <h3 className="service-overlay-title">Lighting & Electrical</h3>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">Lighting Design & Electrical</h3>
                <p className="service-description">
                  Layered lighting approach and electrical upgrades for modern kitchens.
                </p>
                <div className="service-categories">
                  <div className="service-category">
                    <h4>Layered Lighting Approach:</h4>
                    <ul className="service-features">
                      <li>Task Lighting - Under-cabinet LED strips and pendant lights</li>
                      <li>Ambient Lighting - Recessed ceiling lights and chandeliers</li>
                      <li>Accent Lighting - Display lighting and decorative fixtures</li>
                      <li>Natural Light - Skylights and window enhancements</li>
                    </ul>
                  </div>
                  <div className="service-category">
                    <h4>Electrical Upgrades:</h4>
                    <ul className="service-features">
                      <li>GFCI outlets and USB charging stations</li>
                      <li>Dedicated circuits for major appliances</li>
                      <li>Smart switches and dimmer controls</li>
                      <li>Kitchen island electrical planning</li>
                      <li>Code-compliant electrical work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Styles Section */}
      <section className="styles-section">
        <div className="container">
          <h2 className="section-title">Popular Kitchen Styles We Create</h2>
          <div className="styles-grid">
            <div className="style-card">
              <div className="style-header">
                <svg className="style-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
                <h3 className="style-title">Modern Farmhouse</h3>
              </div>
              <p className="style-description">
                Combine rustic charm with contemporary functionality.
              </p>
              <ul className="style-features">
                <li>Shaker-style cabinets in white or sage green</li>
                <li>Butcher block or quartz countertops</li>
                <li>Farmhouse sinks and vintage-inspired fixtures</li>
                <li>Shiplap accents and barn door pantries</li>
                <li>Open shelving with decorative brackets</li>
              </ul>
            </div>
            <div className="style-card">
              <div className="style-header">
                <svg className="style-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 4v8l4-4 4 4V4"/>
                </svg>
                <h3 className="style-title">Contemporary & Modern</h3>
              </div>
              <p className="style-description">
                Clean lines and minimalist design for today's lifestyle.
              </p>
              <ul className="style-features">
                <li>Flat-panel cabinets with hidden handles</li>
                <li>Waterfall quartz or concrete countertops</li>
                <li>Stainless steel appliances and fixtures</li>
                <li>Large format tile or hardwood floors</li>
                <li>Pendant lighting and under-cabinet LEDs</li>
              </ul>
            </div>
            <div className="style-card">
              <div className="style-header">
                <svg className="style-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <h3 className="style-title">Traditional & Transitional</h3>
              </div>
              <p className="style-description">
                Timeless designs that never go out of style.
              </p>
              <ul className="style-features">
                <li>Raised panel cabinets in rich wood tones</li>
                <li>Granite or marble countertops</li>
                <li>Classic subway tile backsplashes</li>
                <li>Crown molding and decorative trim</li>
                <li>Warm lighting and traditional hardware</li>
              </ul>
            </div>
            <div className="style-card">
              <div className="style-header">
                <svg className="style-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
                <h3 className="style-title">Coastal & Mediterranean</h3>
              </div>
              <p className="style-description">
                Bring the beach or European villa to your home.
              </p>
              <ul className="style-features">
                <li>Light blue or seafoam green cabinets</li>
                <li>Natural stone countertops and backsplashes</li>
                <li>Beadboard and nautical accents</li>
                <li>Terracotta or natural stone floors</li>
                <li>Wrought iron and aged brass fixtures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Kitchen Remodeling Process</h2>
          <div className="process-timeline">
            <div className="process-phase">
              <div className="phase-number">1</div>
              <div className="phase-content">
                <h3 className="phase-title">Design & Planning <span className="phase-duration">(1-2 Weeks)</span></h3>
                <ul className="phase-steps">
                  <li>Initial Consultation - Discuss your vision, needs, and budget</li>
                  <li>Design Development - Create detailed plans and 3D renderings</li>
                  <li>Material Selection - Visit showrooms and choose finishes</li>
                  <li>Permit Application - Handle all regulatory requirements</li>
                  <li>Contract Finalization - Transparent pricing and timeline</li>
                </ul>
              </div>
            </div>
            <div className="process-phase">
              <div className="phase-number">2</div>
              <div className="phase-content">
                <h3 className="phase-title">Preparation <span className="phase-duration">(1 Week)</span></h3>
                <ul className="phase-steps">
                  <li>Site Protection - Protect adjoining areas from dust and debris</li>
                  <li>Demolition - Careful removal of existing components</li>
                  <li>Structural Assessment - Evaluate and address any structural needs</li>
                  <li>Utility Rough-In - Plumbing, electrical, and gas line work</li>
                  <li>Inspection - Ensure all rough work meets code requirements</li>
                </ul>
              </div>
            </div>
            <div className="process-phase">
              <div className="phase-number">3</div>
              <div className="phase-content">
                <h3 className="phase-title">Installation <span className="phase-duration">(2-4 Weeks)</span></h3>
                <ul className="phase-steps">
                  <li>Drywall & Paint - Prepare and finish all wall surfaces</li>
                  <li>Flooring Installation - Install your chosen flooring material</li>
                  <li>Cabinet Installation - Precise fitting and alignment</li>
                  <li>Countertop Fabrication - Custom templating and installation</li>
                  <li>Backsplash & Trim - Detailed finish work</li>
                </ul>
              </div>
            </div>
            <div className="process-phase">
              <div className="phase-number">4</div>
              <div className="phase-content">
                <h3 className="phase-title">Finishing Touches <span className="phase-duration">(1 Week)</span></h3>
                <ul className="phase-steps">
                  <li>Appliance Installation - Professional connection and testing</li>
                  <li>Plumbing Fixtures - Sinks, faucets, and disposal installation</li>
                  <li>Electrical Completion - Switches, outlets, and lighting</li>
                  <li>Hardware Installation - Cabinet pulls and decorative elements</li>
                  <li>Final Cleanup - Thorough cleaning and walkthrough</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="investment-section">
        <div className="container">
          <h2 className="section-title">Investment & Value</h2>
          <div className="budget-ranges">
            <div className="budget-card">
              <h3 className="budget-title">Basic Refresh</h3>
              <div className="budget-price">$15,000 - $30,000</div>
              <ul className="budget-features">
                <li>Cabinet refacing or painting</li>
                <li>New countertops and backsplash</li>
                <li>Updated lighting and fixtures</li>
                <li>Fresh paint and hardware</li>
              </ul>
            </div>
            <div className="budget-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3 className="budget-title">Mid-Range Renovation</h3>
              <div className="budget-price">$30,000 - $60,000</div>
              <ul className="budget-features">
                <li>New cabinets and countertops</li>
                <li>Appliance upgrades</li>
                <li>Flooring replacement</li>
                <li>Electrical and plumbing updates</li>
              </ul>
            </div>
            <div className="budget-card">
              <h3 className="budget-title">Luxury Transformation</h3>
              <div className="budget-price">$60,000 - $100,000+</div>
              <ul className="budget-features">
                <li>Custom cabinetry and millwork</li>
                <li>Premium countertops and appliances</li>
                <li>Structural modifications</li>
                <li>High-end finishes throughout</li>
              </ul>
            </div>
          </div>
          <div className="roi-section">
            <h3 className="roi-title">Return on Investment</h3>
            <div className="roi-stats">
              <div className="roi-stat">
                <div className="roi-number">60-80%</div>
                <div className="roi-label">Typical ROI</div>
              </div>
              <div className="roi-stat">
                <div className="roi-number">↗</div>
                <div className="roi-label">Home Value Increase</div>
              </div>
              <div className="roi-stat">
                <div className="roi-number">⚡</div>
                <div className="roi-label">Energy Savings</div>
              </div>
              <div className="roi-stat">
                <div className="roi-number">❤</div>
                <div className="roi-label">Enhanced Living</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How long does a typical kitchen remodel take?</h3>
              <p className="faq-answer">
                Most kitchen remodels take 4-8 weeks depending on scope and complexity. We provide detailed 
                timelines during planning.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can we use our kitchen during the renovation?</h3>
              <p className="faq-answer">
                We work to minimize disruption and can often maintain basic cooking capability with portable 
                appliances and temporary setups.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you handle permits and inspections?</h3>
              <p className="faq-answer">
                Yes, we handle all permit applications and schedule required inspections as part of our 
                comprehensive service.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What if we discover problems during demolition?</h3>
              <p className="faq-answer">
                We conduct thorough assessments before starting and address any unexpected issues with 
                transparent communication and fair pricing.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you offer financing options?</h3>
              <p className="faq-answer">
                Yes, we offer various financing options including 0% APR for qualified buyers and special 
                discounts for seniors, military, and first responders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Kitchen?</h2>
            <p className="cta-description">
              Let's create the kitchen of your dreams together! Your dream kitchen is just a phone call away. 
              Let our 20+ years of experience transform your space into something truly spectacular.
            </p>
            <div className="cta-buttons">
              <a href="tel:9093495255" className="cta-button primary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call Today: (909) 349-5255
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="cta-button secondary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Us
              </a>
            </div>
            <div className="free-services">
              <h3>Free Services Included:</h3>
              <div className="services-list">
                <span>Initial consultation and design ideas</span>
                <span>Detailed written estimates</span>
                <span>3D renderings for major projects</span>
                <span>Kitchen functionality assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KitchenRemodeling;
