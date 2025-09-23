import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Project Inquiry - ${formData.service}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}

Message:
${formData.message}`;
    
    window.location.href = `mailto:bnbuilders@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const serviceAreas = [
    'Brentwood', 'Antioch', 'Oakley', 'Discovery Bay', 'Byron', 'Knightsen',
    'Concord', 'Pleasant Hill', 'Martinez', 'Pittsburg', 'Bay Point', 'Bethel Island'
  ];

  const discounts = [
    { group: 'Senior Citizens (65+)', discount: '10%', description: 'All services discount' },
    { group: 'Active Military & Veterans', discount: '15%', description: 'With valid ID' },
    { group: 'First Responders', discount: '10%', description: 'Police, Fire, EMT' },
    { group: 'Teachers & Healthcare', discount: '5%', description: 'With professional ID' }
  ];

  return (
    <div className="contact-page">
      <SEO 
        title="Contact BN Construction | Your Trusted Partner in Brentwood, CA"
        description="Contact BN Construction for expert construction and remodeling services in Brentwood, CA. Free consultations, 24/7 emergency service, licensed & insured contractors. Call (909) 349-5255 or email bnbuilders@yahoo.com for your project quote."
        keywords="contact BN Construction Brentwood CA, construction contractor contact, free consultation, emergency construction services, construction quote, Brentwood contractors phone number"
      />
      <Header />
      
      {/* Hero Section - Contact Cards */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <img 
            src="/images/coffe-area-office.jpg" 
            alt="Professional office space" 
            className="contact-hero-bg"
          />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content">
          <div className="contact-container">
            <div className="contact-hero-text">
              
              <h1 className="contact-hero-title">
                Let's Start Building Your
                <span className="contact-hero-highlight">Dream Project Today</span>
              </h1>
              <p className="contact-hero-description">
                Ready to transform your space with expert construction? We're here to answer your 
                questions, provide guidance, and deliver exceptional results that exceed expectations.
              </p>
            </div>
            
            <div className="contact-hero-cards">
              <div className="contact-method-card primary">
                <div className="contact-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h3>Call Directly</h3>
                  <p className="contact-primary-number">(909) 349-5255</p>
                  <p className="contact-card-description">24/7 Emergency Services Available</p>
                  <a href="tel:9093495255" className="contact-card-cta">Call Now</a>
                </div>
              </div>
              
              <div className="contact-method-card">
                <div className="contact-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <h3>Email Us</h3>
                  <p className="contact-email">bnbuilders@yahoo.com</p>
                  <p className="contact-card-description">Detailed project discussions</p>
                  <a href="mailto:bnbuilders@yahoo.com" className="contact-card-cta">Send Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Emergency Services */}
      <section className="contact-hours">
        <div className="contact-container">
          <div className="contact-hours-grid">
            <div className="contact-hours-card">
              <div className="contact-hours-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3>Regular Business Hours</h3>
              <div className="contact-hours-list">
                <div className="contact-hours-item">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 9:00 PM</span>
                </div>
                <div className="contact-hours-item">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="contact-hours-card emergency">
              <div className="contact-hours-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                </svg>
              </div>
              <h3>24-Hour Emergency Services</h3>
              <p className="contact-emergency-description">
                Construction emergencies don't wait for convenient times. Our emergency response team is available around the clock.
              </p>
              <div className="contact-emergency-promise">
                <div className="contact-promise-item">
                  <span className="contact-promise-highlight">1-Hour Response</span>
                  <span>for true emergencies</span>
                </div>
                <div className="contact-promise-item">
                  <span className="contact-promise-highlight">24/7 Availability</span>
                  <span>every day of the year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-grid">
            <div className="contact-form-info">
              <h2 className="contact-section-title">Get Your Free Consultation</h2>
              <p className="contact-form-description">
                Tell us about your project and we'll provide expert guidance, transparent pricing, 
                and a detailed plan to bring your vision to life.
              </p>
              
              <div className="contact-free-services">
                <h3>What You Get (Free):</h3>
                <div className="contact-service-items">
                  <div className="contact-service-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Project assessment & evaluation</span>
                  </div>
                  <div className="contact-service-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Design ideas & expert recommendations</span>
                  </div>
                  <div className="contact-service-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Transparent cost estimates</span>
                  </div>
                  <div className="contact-service-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Timeline planning & milestones</span>
                  </div>
                  <div className="contact-service-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Code requirements explanation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(909) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="contact-form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service...</option>
                    <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                    <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                    <option value="ADU Construction">ADU Construction</option>
                    <option value="Commercial Services">Commercial Services</option>
                    <option value="Concrete Services">Concrete Services</option>
                    <option value="Emergency Repair">Emergency Repair</option>
                    <option value="General Consultation">General Consultation</option>
                  </select>
                </div>
                
                <div className="contact-form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="contact-form-submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  Send Project Details
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="contact-service-areas">
        <div className="contact-container">
          <h2 className="contact-section-title">Our Service Areas</h2>
          <div className="contact-areas-grid">
            <div className="contact-primary-area">
              <h3>Primary Service Area</h3>
              <p className="contact-primary-location">Brentwood, California</p>
              <p className="contact-area-description">
                Our home base with fastest response times and comprehensive service coverage.
              </p>
            </div>
            
            <div className="contact-extended-areas">
              <h3>Extended Service Areas</h3>
              <div className="contact-areas-list">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="contact-area-item">{area}</span>
                ))}
              </div>
              <p className="contact-area-note">
                <em>Call to confirm service availability in other locations</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discounts & Financing */}
      <section className="contact-discounts">
        <div className="contact-container">
          <h2 className="contact-section-title">Special Discounts & Offers</h2>
          <div className="contact-discounts-grid">
            {discounts.map((discount, index) => (
              <div key={index} className="contact-discount-card">
                <div className="contact-discount-percentage">{discount.discount}</div>
                <h3 className="contact-discount-group">{discount.group}</h3>
                <p className="contact-discount-description">{discount.description}</p>
              </div>
            ))}
          </div>
          
          <div className="contact-additional-offers">
            <h3>Additional Programs</h3>
            <div className="contact-offers-list">
              <div className="contact-offer-item">
                <span className="contact-offer-highlight">$500 Credit</span>
                <span>for each successful referral</span>
              </div>
              <div className="contact-offer-item">
                <span className="contact-offer-highlight">5% Discount</span>
                <span>for repeat customers</span>
              </div>
              <div className="contact-offer-item">
                <span className="contact-offer-highlight">Package Discounts</span>
                <span>for combined projects</span>
              </div>
              <div className="contact-offer-item">
                <span className="contact-offer-highlight">0% APR Financing</span>
                <span>available for qualified customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Protection */}
      <section className="contact-credentials">
        <div className="contact-container">
          <h2 className="contact-section-title">Your Protection Guarantee</h2>
          <div className="contact-credentials-grid">
            <div className="contact-credential-card">
              <div className="contact-credential-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
              </div>
              <h3>Licensed & Bonded</h3>
              <p>California Contractor License #1113409</p>
              <p>Licensed General Contractor authorized for all construction types</p>
            </div>
            
            <div className="contact-credential-card">
              <div className="contact-credential-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.1,7 14,7.9 14,9C14,10.1 13.1,11 12,11C10.9,11 10,10.1 10,9C10,7.9 10.9,7 12,7M12,13C13.89,13 15.73,13.78 17,15.08C16,16.89 14.11,18 12,18C9.89,18 8,16.89 7,15.08C8.27,13.78 10.11,13 12,13Z"/>
                </svg>
              </div>
              <h3>Fully Insured</h3>
              <p>$2 Million General Liability Coverage</p>
              <p>Workers' Compensation Insurance for all employees</p>
            </div>
            
            <div className="contact-credential-card">
              <div className="contact-credential-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3>Quality Guaranteed</h3>
              <p>Written warranties on all construction work</p>
              <p>Licensed professionals perform all work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-final-cta">
        <div className="contact-container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-title">Ready to Get Started?</h2>
            <p className="contact-cta-description">
              Your dream project is just one phone call away. Contact BN Construction today 
              and let's transform your space together.
            </p>
            <div className="contact-cta-methods">
              <a href="tel:9093495255" className="contact-cta-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call (909) 349-5255
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="contact-cta-secondary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Project Details
              </a>
            </div>
            <p className="contact-license-info">
              Licensed | Bonded | Insured | CA License #1113409
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
