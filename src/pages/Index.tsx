import { Helmet } from 'react-helmet-async';
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
import ServiceCalculator from '../components/ServiceCalculator';
import SEOStructuredData from '../components/SEOStructuredData';

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
      <Helmet>
        <title>Sydney Seal | Shower Leak Repair & Waterproofing Experts Sydney | 5-Year Warranty</title>
        <meta name="description" content="Sydney's #1 waterproofing specialists. Expert shower leak repair without tile removal, balcony waterproofing & bathroom restoration. AS3740 certified, licensed professionals with 5-year warranty. Same-day emergency service across Eastern Suburbs, North Shore, Inner West, Parramatta & all Sydney suburbs. Silver-ion antimicrobial technology. Call 0411 563 444 for free assessment." />
        <meta name="keywords" content="shower leak repair Sydney, waterproofing Sydney, balcony leak repair, bathroom waterproofing, grout sealing Sydney, waterproof shower without removing tiles, leak repair Eastern Suburbs, waterproofing North Shore Sydney, bathroom restoration Inner West, AS3740 certified waterproofing, antimicrobial grout sealing, mould resistant bathroom Sydney, emergency leak repair Sydney, commercial waterproofing Sydney, strata waterproofing services" />
        <link rel="canonical" href="https://sydneyseal.com.au/" />
        
        {/* E-E-A-T Enhanced Meta */}
        <meta name="author" content="Sydney Seal - Licensed Waterproofing Professionals" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sydney Seal | Expert Shower Leak Repair & Waterproofing Sydney" />
        <meta property="og:description" content="Sydney's trusted waterproofing specialists. Shower leak repair, balcony waterproofing & bathroom restoration. AS3740 certified, 5-year warranty." />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AU" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sydney Seal | Waterproofing Experts Sydney" />
        <meta name="twitter:description" content="Expert shower leak repair & waterproofing across Sydney. AS3740 certified, 5-year warranty." />
      </Helmet>
      
      {/* JSON-LD Structured Data */}
      <SEOStructuredData page="home" />
      
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <WhyChooseUs />
        <BeforeAfterGallery />
        <ServiceCalculator />
        <PerformanceMetrics />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
