import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './AduConstruction.css';

const AduConstruction = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const aduTypes = [
    {
      title: 'Detached ADUs',
      description: 'Custom ground-up construction for maximum flexibility',
      features: [
        'Studio Units (400-600 sq ft) - Efficient, open-concept living',
        'One-Bedroom Units (500-800 sq ft) - Separate bedroom for privacy',
        'Two-Bedroom Units (800-1,200 sq ft) - Family-friendly layouts',
        'Luxury Units (1,000-1,200 sq ft) - High-end finishes and features'
      ],
      image: '/images/adu-exterior.webp'
    },
    {
      title: 'Attached ADUs',
      description: 'Addition-style construction that complements your home',
      features: [
        'First-Floor Additions - Accessible, single-level living',
        'Second-Story Additions - Maximize lot usage with vertical expansion',
        'Basement Conversions - Utilize existing below-grade space',
        'Garage Conversions - Transform underutilized garage space'
      ],
      image: '/images/ADU-GMS-scaled.jpeg'
    },
    {
      title: 'Junior ADUs (JADUs)',
      description: 'Compact, efficient units up to 500 sq ft',
      features: [
        'Maximum 500 sq ft - Efficient use of existing space',
        'Shared Kitchen Option - Can share kitchen with main house',
        'Interior Access - Can connect internally to main house',
        'Conversion Friendly - Often created within existing structures'
      ],
      image: '/images/adu-cross-section-3d-render.webp'
    }
  ];

  return (
    <div className="adu-page">
      <SEO 
        title="ADU Construction Services | BN Construction Brentwood, CA"
        description="Unlock your property's potential with ADU construction in Brentwood, CA. Build accessory dwelling units for rental income & family housing. Detached ADUs, garage conversions, Junior ADUs. Expert ADU contractors. Call +1 (925) 497-9802 for consultation."
        keywords="ADU construction Brentwood CA, accessory dwelling unit, granny flat, backyard cottage, garage conversion, ADU contractors, rental income property, in-law unit, Junior ADU, detached ADU"
      />
      <Header />
      
      {/* Hero Section - Card Layout */}
      <section className="adu-hero">
        <div className="adu-hero-container">
          <div className="adu-hero-card">
            <div className="adu-hero-badge">
              <span>ADU Construction Services</span>
            </div>
            <h1 className="adu-hero-title">
              Unlock Your Property's
              <span className="adu-hero-highlight">Hidden Potential</span>
            </h1>
            <p className="adu-hero-description">
              Transform your backyard into a valuable income-producing asset. ADUs represent one of the most 
              exciting opportunities to maximize property value while addressing California's housing needs.
            </p>
            <div className="adu-hero-stats">
              <div className="adu-stat">
                <div className="adu-stat-value">$1,500-$3,500</div>
                <div className="adu-stat-label">Monthly Rental Income</div>
              </div>
              <div className="adu-stat">
                <div className="adu-stat-value">$150K-$400K</div>
                <div className="adu-stat-label">Property Value Increase</div>
              </div>
              <div className="adu-stat">
                <div className="adu-stat-value">8-15%</div>
                <div className="adu-stat-label">Annual ROI</div>
              </div>
            </div>
            <div className="adu-hero-actions">
              <a href="tel:+19254979802" className="adu-cta-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Free ADU Consultation
              </a>
              <a href="#adu-types" className="adu-cta-secondary">
                Explore ADU Types
              </a>
            </div>
          </div>
          <div className="adu-hero-visual">
            <img src="/images/types-of-adu-infographic.png" alt="Types of ADUs infographic" />
          </div>
        </div>
      </section>

      {/* Benefits Section - Icon Grid */}
      <section className="adu-benefits">
        <div className="adu-container">
          <h2 className="adu-section-title">Why Build an ADU?</h2>
          <div className="adu-benefits-grid">
            <div className="adu-benefit-category">
              <h3 className="adu-benefit-category-title">Financial Benefits</h3>
              <div className="adu-benefit-items">
                <div className="adu-benefit-item">
                  <svg className="adu-benefit-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="adu-benefit-content">
                    <h4>Rental Income</h4>
                    <p>Generate $1,500-$3,500+ monthly rental income</p>
                  </div>
                </div>
                <div className="adu-benefit-item">
                  <svg className="adu-benefit-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="adu-benefit-content">
                    <h4>Property Value Increase</h4>
                    <p>Add $150,000-$400,000+ to property value</p>
                  </div>
                </div>
                <div className="adu-benefit-item">
                  <svg className="adu-benefit-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="adu-benefit-content">
                    <h4>Investment Return</h4>
                    <p>Typical ROI of 8-15% annually</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="adu-benefit-category">
              <h3 className="adu-benefit-category-title">Lifestyle Benefits</h3>
              <div className="adu-benefit-items">
                <div className="adu-benefit-item">
                  <svg className="adu-benefit-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="adu-benefit-content">
                    <h4>Multi-Generational Living</h4>
                    <p>Keep aging parents or adult children close</p>
                  </div>
                </div>
                <div className="adu-benefit-item">
                  <svg className="adu-benefit-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="adu-benefit-content">
                    <h4>Home Office</h4>
                    <p>Dedicated workspace separate from main house</p>
                  </div>
                </div>
                <div className="adu-benefit-item">
                  <svg className="adu-benefit-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <div className="adu-benefit-content">
                    <h4>Guest Accommodations</h4>
                    <p>Comfortable spaces for visiting family and friends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADU Types Section - Expandable Cards */}
      <section id="adu-types" className="adu-types">
        <div className="adu-container">
          <h2 className="adu-section-title">Types of ADUs We Build</h2>
          <div className="adu-types-grid">
            {aduTypes.map((type, index) => (
              <div key={index} className="adu-type-card">
                <div className="adu-type-image">
                  <img src={type.image} alt={type.title} />
                </div>
                <div className="adu-type-content">
                  <h3 className="adu-type-title">{type.title}</h3>
                  <p className="adu-type-description">{type.description}</p>
                  <ul className="adu-type-features">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section className="adu-process">
        <div className="adu-container">
          <h2 className="adu-section-title">Our ADU Design & Construction Process</h2>
          <div className="adu-timeline">
            <div className="adu-timeline-item">
              <div className="adu-timeline-marker">1</div>
              <div className="adu-timeline-content">
                <h3 className="adu-timeline-title">Consultation & Feasibility</h3>
                <div className="adu-timeline-duration">1-2 Weeks</div>
                <p className="adu-timeline-description">
                  Property evaluation, zoning review, utility assessment, and budget discussion to determine 
                  your ADU's feasibility and potential.
                </p>
                <ul className="adu-timeline-features">
                  <li>Property evaluation and site analysis</li>
                  <li>Zoning review and compliance verification</li>
                  <li>Utility capacity assessment</li>
                  <li>Budget discussion and financing options</li>
                </ul>
              </div>
            </div>
            <div className="adu-timeline-item">
              <div className="adu-timeline-marker">2</div>
              <div className="adu-timeline-content">
                <h3 className="adu-timeline-title">Design Development</h3>
                <div className="adu-timeline-duration">2-4 Weeks</div>
                <p className="adu-timeline-description">
                  Architectural design, 3D renderings, material selection, and engineering to create 
                  permit-ready plans for your custom ADU.
                </p>
                <ul className="adu-timeline-features">
                  <li>Schematic design and floor plans</li>
                  <li>3D renderings and visualizations</li>
                  <li>Material and finish selections</li>
                  <li>Structural and MEP engineering</li>
                </ul>
              </div>
            </div>
            <div className="adu-timeline-item">
              <div className="adu-timeline-marker">3</div>
              <div className="adu-timeline-content">
                <h3 className="adu-timeline-title">Permitting</h3>
                <div className="adu-timeline-duration">4-8 Weeks</div>
                <p className="adu-timeline-description">
                  Complete permit management including application submission, plan review, utility 
                  coordination, and final permit issuance.
                </p>
                <ul className="adu-timeline-features">
                  <li>Building permit application and submission</li>
                  <li>Plan review and revision management</li>
                  <li>Utility coordination and approvals</li>
                  <li>Regulatory compliance verification</li>
                </ul>
              </div>
            </div>
            <div className="adu-timeline-item">
              <div className="adu-timeline-marker">4</div>
              <div className="adu-timeline-content">
                <h3 className="adu-timeline-title">Construction</h3>
                <div className="adu-timeline-duration">8-16 Weeks</div>
                <p className="adu-timeline-description">
                  From site preparation through final finishes, we handle every aspect of construction 
                  with expert craftsmanship and attention to detail.
                </p>
                <ul className="adu-timeline-features">
                  <li>Site preparation and foundation work</li>
                  <li>Framing, roofing, and exterior completion</li>
                  <li>Interior finishing and final details</li>
                  <li>Final inspections and occupancy approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section - Pricing Tiers */}
      <section className="adu-investment">
        <div className="adu-container">
          <h2 className="adu-section-title">Investment Analysis & ROI</h2>
          <div className="adu-pricing-tiers">
            <div className="adu-pricing-tier">
              <h3 className="adu-tier-title">Basic ADU</h3>
              <div className="adu-tier-size">400-600 sq ft</div>
              <div className="adu-tier-price">$150,000-$220,000</div>
              <ul className="adu-tier-features">
                <li>Standard finishes and fixtures</li>
                <li>Basic kitchen and bathroom</li>
                <li>Standard energy efficiency features</li>
                <li>Simple architectural design</li>
              </ul>
              <div className="adu-tier-rental">
                <strong>Rental Income: $1,800-$2,500/month</strong>
              </div>
            </div>
            <div className="adu-pricing-tier featured">
              <div className="adu-tier-badge">Most Popular</div>
              <h3 className="adu-tier-title">Mid-Range ADU</h3>
              <div className="adu-tier-size">600-900 sq ft</div>
              <div className="adu-tier-price">$220,000-$320,000</div>
              <ul className="adu-tier-features">
                <li>Quality finishes throughout</li>
                <li>Well-appointed kitchen with stone counters</li>
                <li>Luxury bathroom with tile shower</li>
                <li>Energy-efficient systems and appliances</li>
              </ul>
              <div className="adu-tier-rental">
                <strong>Rental Income: $2,200-$3,200/month</strong>
              </div>
            </div>
            <div className="adu-pricing-tier">
              <h3 className="adu-tier-title">Premium ADU</h3>
              <div className="adu-tier-size">900-1,200 sq ft</div>
              <div className="adu-tier-price">$320,000-$450,000</div>
              <ul className="adu-tier-features">
                <li>High-end finishes and fixtures</li>
                <li>Gourmet kitchen with premium appliances</li>
                <li>Spa-like bathroom with luxury features</li>
                <li>Smart home technology integration</li>
              </ul>
              <div className="adu-tier-rental">
                <strong>Rental Income: $2,800-$4,000/month</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion */}
      <section className="adu-faq">
        <div className="adu-container">
          <h2 className="adu-section-title">Frequently Asked Questions</h2>
          <div className="adu-faq-list">
            {[
              {
                question: "How long does it take to build an ADU?",
                answer: "From design to completion, most ADUs take 6-10 months. This includes 2-4 weeks for design, 4-8 weeks for permits, and 8-16 weeks for construction."
              },
              {
                question: "Do I need special permits for an ADU?",
                answer: "Yes, ADUs require building permits, but California law requires ministerial approval (no discretionary review) for most ADU projects."
              },
              {
                question: "Can I rent out my ADU immediately?",
                answer: "Yes, once you receive your Certificate of Occupancy, you can legally rent your ADU to tenants or use it for short-term rentals where allowed."
              },
              {
                question: "Will an ADU affect my property taxes?",
                answer: "Yes, ADUs will increase your property's assessed value and therefore your property taxes. However, the rental income typically more than offsets the tax increase."
              },
              {
                question: "Can I build an ADU if I have an HOA?",
                answer: "California law prevents HOAs from prohibiting ADUs, but they may have design guidelines you must follow. We help navigate HOA requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="adu-faq-item">
                <button 
                  className={`adu-faq-question ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`adu-faq-icon ${activeAccordion === index ? 'rotated' : ''}`}
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                <div className={`adu-faq-answer ${activeAccordion === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="adu-final-cta">
        <div className="adu-container">
          <div className="adu-cta-content">
            <h2 className="adu-cta-title">Ready to Unlock Your Property's Potential?</h2>
            <p className="adu-cta-description">
              An ADU isn't just a building—it's an investment in your family's financial future. 
              Let us help you unlock your property's hidden potential.
            </p>
            <div className="adu-cta-buttons">
              <a href="tel:+19254979802" className="adu-cta-primary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Schedule FREE ADU Consultation
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="adu-cta-secondary large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Your Project Details
              </a>
            </div>
            <div className="adu-free-services">
              <h3>Free ADU Services:</h3>
              <div className="adu-services-list">
                <span>Property feasibility assessment</span>
                <span>ADU design consultation</span>
                <span>Rental income analysis</span>
                <span>Permit requirement review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AduConstruction;
