import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <img 
                src="/images/bn-construction-logo.jpg" 
                alt="BN Construction Logo" 
                className="footer-logo-img"
              />
              <div className="footer-company-info">
                <h3 className="footer-company-name">BN Construction</h3>
                <p className="footer-tagline">Premier Construction & Remodeling</p>
              </div>
            </div>
            <p className="footer-description">
              Licensed, bonded, and insured with 20+ years of experience serving Brentwood and the Bay Area.
            </p>
            <div className="footer-credentials">
              <span className="license-badge">CA License #1113409</span>
              <span className="since-badge">Since 2004</span>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-section-title">Services</h4>
            <ul className="footer-links">
              <li><a href="/kitchen-remodeling" className="footer-link">Kitchen Remodeling</a></li>
              <li><a href="/bathroom-remodeling" className="footer-link">Bathroom Remodeling</a></li>
              <li><a href="/concrete-services" className="footer-link">Concrete Services</a></li>
              <li><a href="/commercial-services" className="footer-link">Commercial Services</a></li>
              <li><a href="/adu-construction" className="footer-link">ADU Construction</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <div className="contact-details">
              <a href="tel:9093495255" className="contact-item phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>(909) 349-5255</span>
              </a>
              <a href="mailto:bnbuilders@yahoo.com" className="contact-item email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>bnbuilders@yahoo.com</span>
              </a>
              <div className="location">Brentwood, CA • Serving Bay Area</div>
            </div>
            
            <div className="business-hours">
              <div className="hours-item">
                <span>Mon-Fri: 8AM-9PM</span>
              </div>
              <div className="hours-item">
                <span>Sat-Sun: 9AM-10PM</span>
              </div>
              <div className="hours-item emergency">
                <span>Emergency: 24/7</span>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="footer-section">
            <h4 className="footer-section-title">Special Offers</h4>
            <div className="offers-list">
              <div className="offer-item">15% Off Military & Veterans</div>
              <div className="offer-item">10% Off Seniors & First Responders</div>
              <div className="offer-item">5% Off Referrals</div>
              <div className="offer-item">Financing Available</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2024 BN Construction. All rights reserved.
            </div>
            <div className="owner-info">
              Licensed & Bonded • Owner: B. Nsiala
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
