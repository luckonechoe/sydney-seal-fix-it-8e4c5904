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
        <title>Shower Leak Repair Sydney | No Tile Removal | 5-Year Warranty | Sydney Sealed</title>
        <meta name="description" content="Shower leaking through the ceiling? Sydney's #1 rated repair specialists fix it permanently — no tile removal, same-day service, silver-ion antimicrobial waterproofing, 5-year written warranty. Serving Eastern Suburbs, North Shore, Inner West, Parramatta & all Sydney. Call 0421 043 444." />
        <meta name="keywords" content="shower leak repair Sydney, waterproofing Sydney, balcony leak repair, bathroom waterproofing, grout sealing Sydney, waterproof shower without removing tiles, leak repair Eastern Suburbs, waterproofing North Shore Sydney, bathroom restoration Inner West, licensed waterproofing experts, antimicrobial grout sealing, mould resistant bathroom Sydney, emergency leak repair Sydney, commercial waterproofing Sydney, strata waterproofing services, shower leak repair Bondi, waterproofing Chatswood, shower repair Parramatta, balcony waterproofing Manly" />
        <link rel="canonical" href="https://sydneyseal.com.au/" />
        
        {/* E-E-A-T Enhanced Meta */}
        <meta name="author" content="Sydney Sealed — Licensed Waterproofing Specialists NSW" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        
        {/* Local SEO */}
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Sydney, New South Wales, Australia" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shower Leak Repair Sydney | No Tile Removal | Sydney Sealed" />
        <meta property="og:description" content="Sydney's #1 rated waterproofing specialists. Shower leak repair without tile removal, balcony waterproofing & bathroom restoration. NSW licensed, 5-year written warranty, same-day emergency service." />
        <meta property="og:type" content="business.business" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:url" content="https://sydneyseal.com.au/" />
        <meta property="og:site_name" content="Sydney Sealed Waterproofing" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shower Leak Repair Sydney | Sydney Sealed Waterproofing" />
        <meta name="twitter:description" content="Sydney's #1 rated shower leak repair. No tile removal, same-day service, 5-year written warranty. Serving all Sydney suburbs." />
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
