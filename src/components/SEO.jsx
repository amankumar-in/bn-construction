import { useEffect } from 'react';

/**
 * SEO Component for managing page titles and meta descriptions
 * @param {string} title - The page title
 * @param {string} description - The meta description for SEO
 * @param {string} keywords - Optional keywords for meta tags
 */
const SEO = ({ title, description, keywords = '' }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    const existingDescription = document.querySelector('meta[name="description"]');
    if (existingDescription) {
      existingDescription.setAttribute('content', description);
    } else {
      const metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.getElementsByTagName('head')[0].appendChild(metaDescription);
    }

    // Update meta keywords if provided
    if (keywords) {
      const existingKeywords = document.querySelector('meta[name="keywords"]');
      if (existingKeywords) {
        existingKeywords.setAttribute('content', keywords);
      } else {
        const metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.getElementsByTagName('head')[0].appendChild(metaKeywords);
      }
    }

    // Add Open Graph meta tags for social media sharing
    const updateOrCreateOGTag = (property, content) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.content = content;
        document.getElementsByTagName('head')[0].appendChild(metaTag);
      }
    };

    updateOrCreateOGTag('og:title', title);
    updateOrCreateOGTag('og:description', description);
    updateOrCreateOGTag('og:type', 'website');
    updateOrCreateOGTag('og:site_name', 'BN Construction');

    // Add Twitter Card meta tags
    const updateOrCreateTwitterTag = (name, content) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.name = name;
        metaTag.content = content;
        document.getElementsByTagName('head')[0].appendChild(metaTag);
      }
    };

    updateOrCreateTwitterTag('twitter:card', 'summary');
    updateOrCreateTwitterTag('twitter:title', title);
    updateOrCreateTwitterTag('twitter:description', description);

  }, [title, description, keywords]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
