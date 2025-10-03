import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Single Clean Header Row */}
        <div className="header-container">
          {/* Logo and Company Info */}
          <div className="logo-section">
            <img 
              src="/images/bn-construction-logo.jpg" 
              alt="BN Construction Logo" 
              className="logo"
            />
            <div className="company-info">
              <h1 className="company-name">BN Construction</h1>
              <p className="company-tagline">Premier Construction & Remodeling</p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="contact-actions">
            <div className="contact-info">
              <span className="phone-number">+1 (925) 497-9802</span>
              <span className="license-info">Licensed & Insured • CA #1113409</span>
            </div>
            <div className="action-buttons">
              <a href="mailto:bnbuilders@yahoo.com" className="email-btn">
                Get Quote
              </a>
              <a href="tel:+19254979802" className="call-btn">
                Call Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      {/* Navigation Menu */}
      <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-container">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
               <li className="nav-item dropdown">
                 <a href="#residential" className="nav-link">
                   <span>Residential</span>
                   <span className="dropdown-arrow">▼</span>
                 </a>
                 <div className="mega-dropdown">
                   <div className="dropdown-content">
                     <div className="service-category">
                       <h4>Residential Services</h4>
                       <ul>
                         <li><a href="/kitchen-remodeling" className="dropdown-link">
                           <span className="service-icon">◆</span>
                           <div>
                             <span className="service-name">Kitchen Remodeling</span>
                             <span className="service-desc">Custom kitchens & cabinets</span>
                           </div>
                         </a></li>
                         <li><a href="/bathroom-remodeling" className="dropdown-link">
                           <span className="service-icon">◆</span>
                           <div>
                             <span className="service-name">Bathroom Remodeling</span>
                             <span className="service-desc">Spa-like retreats & renovations</span>
                           </div>
                         </a></li>
                         <li><a href="/adu-construction" className="dropdown-link">
                           <span className="service-icon">◆</span>
                           <div>
                             <span className="service-name">ADU Construction</span>
                             <span className="service-desc">Accessory dwelling units</span>
                           </div>
                         </a></li>
                       </ul>
                     </div>
                     <div className="dropdown-cta">
                       <h4>Ready to Start?</h4>
                       <p>Get your free consultation today</p>
                       <a href="tel:+19254979802" className="dropdown-cta-btn">Call +1 (925) 497-9802</a>
                     </div>
                   </div>
                 </div>
               </li>
               <li className="nav-item dropdown">
                 <a href="#commercial" className="nav-link">
                   <span>Commercial</span>
                   <span className="dropdown-arrow">▼</span>
                 </a>
                 <div className="mega-dropdown">
                   <div className="dropdown-content">
                     <div className="service-category">
                       <h4>Commercial Services</h4>
                       <ul>
                         <li><a href="/commercial-services" className="dropdown-link">
                           <span className="service-icon">◆</span>
                           <div>
                             <span className="service-name">Commercial Services</span>
                             <span className="service-desc">Office & retail build-outs</span>
                           </div>
                         </a></li>
                         <li><a href="/concrete-services" className="dropdown-link">
                           <span className="service-icon">◆</span>
                           <div>
                             <span className="service-name">Concrete Services</span>
                             <span className="service-desc">Foundations & structural work</span>
                           </div>
                         </a></li>
                       </ul>
                     </div>
                     <div className="dropdown-cta">
                       <h4>Ready to Start?</h4>
                       <p>Get your free consultation today</p>
                       <a href="tel:+19254979802" className="dropdown-cta-btn">Call +1 (925) 497-9802</a>
                     </div>
                   </div>
                 </div>
               </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
          
          {/* Mobile Contact Section */}
          <div className="mobile-contact">
            <a href="tel:+19254979802" className="mobile-phone">
              <span>Call Now: +1 (925) 497-9802</span>
            </a>
            <a href="mailto:bnbuilders@yahoo.com" className="mobile-email">
              <span>Get Free Estimate</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
