
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Services from '../components/Services';
import PerformanceMetrics from '../components/PerformanceMetrics';
import WhyChooseUs from '../components/WhyChooseUs';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import ServiceAreas from '../components/ServiceAreas';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { usePageTracking } from '../hooks/useAnalytics';
import { useEffect } from 'react';

const Index = () => {
  usePageTracking();

  useEffect(() => {
    // Initialize page view tracking
    const pageViews = parseInt(sessionStorage.getItem('page_views') || '0') + 1;
    sessionStorage.setItem('page_views', pageViews.toString());

    // Add section tracking attributes
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (!section.getAttribute('data-section')) {
        const sectionName = section.className.split(' ')[0] || `section-${index}`;
        section.setAttribute('data-section', sectionName);
      }
    });

    // Add scroll depth tracking
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      const milestones = [25, 50, 75, 90, 100];
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !sessionStorage.getItem(`scroll_${milestone}`)) {
          sessionStorage.setItem(`scroll_${milestone}`, 'true');
          // Track scroll milestone
          if (window.gtag) {
            window.gtag('event', 'scroll', {
              event_category: 'engagement',
              event_label: `${milestone}%`,
              value: milestone
            });
          }
        }
      });
    };

    const throttledScrollHandler = (() => {
      let ticking = false;
      return () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            trackScrollDepth();
            ticking = false;
          });
          ticking = true;
        }
      };
    })();

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <PerformanceMetrics />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <ServiceAreas />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default Index;
