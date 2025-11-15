import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  trackPageView, 
  trackFormSubmission, 
  trackCTAClick, 
  trackServiceInquiry, 
  trackPhoneCall, 
  trackQuoteRequest,
  trackUserJourney,
  trackSectionView,
  initGA 
} from '../lib/analytics';

// Hook for automatic page view tracking with enhanced section detection
export const usePageTracking = () => {
  const location = useLocation();
  const previousLocationRef = useRef<string>('');

  useEffect(() => {
    // Initialize GA on first load
    initGA();
  }, []);

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    const previousPath = previousLocationRef.current;
    
    // Track user journey if there was a previous page
    if (previousPath && previousPath !== currentPath) {
      trackUserJourney('page_navigation', previousPath, currentPath);
    }
    
    // Track page view with enhanced data
    setTimeout(() => {
      trackPageView(currentPath, document.title);
    }, 100);

    // Update previous location
    previousLocationRef.current = currentPath;

    // Set up intersection observer for section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px', // Only trigger when section is well in view
      threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section') || 
                             entry.target.id || 
                             entry.target.className.split(' ')[0];
          if (sectionName) {
            trackSectionView(sectionName);
          }
        }
      });
    }, observerOptions);

    // Observe all sections with data-section attribute or common section selectors
    const sectionsToObserve = document.querySelectorAll('[data-section], section, .hero, .services, .contact');
    sectionsToObserve.forEach(section => sectionObserver.observe(section));

    return () => {
      sectionObserver.disconnect();
    };
  }, [location]);
};

// Enhanced form tracking with detailed analytics
export const useFormTracking = () => {
  const trackForm = (formType: string, formData?: Record<string, any>, additionalProperties?: Record<string, any>) => {
    // Enhanced form data with more context
    const enhancedFormData = {
      ...formData,
      ...additionalProperties,
      form_completion_time: performance.now(), // How long to fill form
      form_field_count: formData ? Object.keys(formData).length : 0,
      has_phone: !!formData?.phone,
      has_email: !!formData?.email,
      urgency_level: formData?.urgency || 'normal',
      page_context: window.location.pathname,
      referrer_context: document.referrer,
      time_of_day: new Date().getHours(),
      day_of_week: new Date().getDay(),
    };

    trackFormSubmission(formType, enhancedFormData);
  };

  return { trackForm };
};

// Enhanced CTA tracking with position and context
export const useCTATracking = () => {
  const trackCTA = (ctaName: string, ctaLocation: string, targetUrl?: string, additionalContext?: Record<string, any>) => {
    // Get scroll position for context
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    const enhancedContext = {
      ...additionalContext,
      scroll_position: scrollPercent,
      viewport_height: window.innerHeight,
      viewport_width: window.innerWidth,
      time_on_page: performance.now(),
      clicks_before_cta: parseInt(sessionStorage.getItem('click_count') || '0'),
      page_load_time: performance.timing ? performance.timing.loadEventEnd - performance.timing.navigationStart : 0,
    };

    // Increment click counter
    const currentClicks = parseInt(sessionStorage.getItem('click_count') || '0') + 1;
    sessionStorage.setItem('click_count', currentClicks.toString());

    trackCTAClick(ctaName, ctaLocation, targetUrl);
  };

  return { trackCTA };
};

// Enhanced service tracking with user intent analysis
export const useServiceTracking = () => {
  const trackService = (serviceType: string, inquiryMethod: string, additionalProperties?: Record<string, any>) => {
    const enhancedProperties = {
      ...additionalProperties,
      service_category: getServiceCategory(serviceType),
      inquiry_urgency: getInquiryUrgency(serviceType),
      estimated_project_size: getProjectSize(serviceType),
      season_context: getSeason(),
      business_hours: isBusinessHours(),
    };

    trackServiceInquiry(serviceType, inquiryMethod);
  };

  const trackQuote = (serviceType: string, urgency?: string, projectDetails?: Record<string, any>) => {
    const enhancedDetails = {
      ...projectDetails,
      quote_trigger: getQuoteTrigger(),
      competition_research: hasCompetitorReferrer(),
      local_search: isLocalSearch(),
      repeat_visitor: isRepeatVisitor(),
    };

    trackQuoteRequest(serviceType, urgency);
  };

  const trackCall = (callType?: string, callContext?: Record<string, any>) => {
    const enhancedContext = {
      ...callContext,
      call_readiness_score: getCallReadinessScore(),
      page_dwell_time: performance.now(),
      previous_interactions: getSessionInteractionCount(),
      call_timing: isOptimalCallTime(),
    };

    trackPhoneCall(callType);
  };

  return { 
    trackService, 
    trackQuote, 
    trackCall 
  };
};

// Navigation tracking with user flow analysis
export const useNavigationTracking = () => {
  const trackNavigation = (action: string, fromPage: string, toPage: string, navigationContext?: Record<string, any>) => {
    const enhancedContext = {
      ...navigationContext,
      navigation_method: getNavigationMethod(action),
      user_intent: getUserIntent(fromPage, toPage),
      flow_efficiency: getFlowEfficiency(),
      bounce_risk: getBounceRisk(),
    };

    trackUserJourney(action, fromPage, toPage);
  };

  return { trackNavigation };
};

// Helper functions for enhanced analytics
const getServiceCategory = (serviceType: string): string => {
  if (serviceType.includes('shower')) return 'bathroom';
  if (serviceType.includes('balcony')) return 'outdoor';
  if (serviceType.includes('grout')) return 'restoration';
  return 'general';
};

const getInquiryUrgency = (serviceType: string): string => {
  if (serviceType.includes('leak')) return 'urgent';
  if (serviceType.includes('emergency')) return 'emergency';
  return 'normal';
};

const getProjectSize = (serviceType: string): string => {
  if (serviceType.includes('full') || serviceType.includes('restoration')) return 'large';
  if (serviceType.includes('repair')) return 'medium';
  return 'small';
};

const getSeason = (): string => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'autumn';
  if (month >= 5 && month <= 7) return 'winter';
  if (month >= 8 && month <= 10) return 'spring';
  return 'summer';
};

const isBusinessHours = (): boolean => {
  const hour = new Date().getHours();
  const day = new Date().getDay();
  return day >= 1 && day <= 5 && hour >= 7 && hour <= 18;
};

const getQuoteTrigger = (): string => {
  const referrer = document.referrer;
  if (referrer.includes('google')) return 'search';
  if (referrer.includes('facebook') || referrer.includes('instagram')) return 'social';
  return 'direct';
};

const hasCompetitorReferrer = (): boolean => {
  const referrer = document.referrer.toLowerCase();
  const competitors = ['smartsealed', 'groutpro', 'sealright', 'leakstop'];
  return competitors.some(comp => referrer.includes(comp));
};

const isLocalSearch = (): boolean => {
  const referrer = document.referrer;
  return referrer.includes('google') && (
    referrer.includes('sydney') || 
    referrer.includes('nsw') || 
    referrer.includes('australia')
  );
};

const isRepeatVisitor = (): boolean => {
  const visitCount = parseInt(localStorage.getItem('visit_count') || '0');
  return visitCount > 1;
};

const getCallReadinessScore = (): number => {
  let score = 0;
  
  // More page views = higher readiness
  const pageViews = parseInt(sessionStorage.getItem('page_views') || '0');
  score += Math.min(pageViews * 2, 10);
  
  // Time on site
  const timeOnSite = performance.now() / 1000 / 60; // minutes
  score += Math.min(timeOnSite, 5);
  
  // Services viewed
  const servicesViewed = JSON.parse(sessionStorage.getItem('services_viewed') || '[]').length;
  score += servicesViewed * 2;
  
  return Math.min(score, 20);
};

const getSessionInteractionCount = (): number => {
  return parseInt(sessionStorage.getItem('interaction_count') || '0');
};

const isOptimalCallTime = (): boolean => {
  const hour = new Date().getHours();
  const day = new Date().getDay();
  
  // Business hours on weekdays
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) return true;
  
  // Saturday morning
  if (day === 6 && hour >= 9 && hour <= 12) return true;
  
  return false;
};

const getNavigationMethod = (action: string): string => {
  if (action.includes('click')) return 'click';
  if (action.includes('scroll')) return 'scroll';
  if (action.includes('keyboard')) return 'keyboard';
  return 'unknown';
};

const getUserIntent = (fromPage: string, toPage: string): string => {
  if (fromPage === '/' && toPage.includes('service')) return 'service_exploration';
  if (fromPage.includes('service') && toPage.includes('contact')) return 'conversion_intent';
  if (toPage.includes('about')) return 'trust_building';
  return 'general_browsing';
};

const getFlowEfficiency = (): number => {
  const pageViews = parseInt(sessionStorage.getItem('page_views') || '0');
  const timeSpent = performance.now() / 1000 / 60; // minutes
  
  if (timeSpent === 0) return 0;
  return Math.round((pageViews / timeSpent) * 10) / 10;
};

const getBounceRisk = (): number => {
  const timeOnPage = performance.now() / 1000; // seconds
  const scrollDepth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  
  let risk = 100;
  
  // Reduce risk based on time spent
  risk -= Math.min(timeOnPage / 30 * 50, 50);
  
  // Reduce risk based on scroll depth
  risk -= scrollDepth * 30;
  
  // Reduce risk based on interactions
  const interactions = parseInt(sessionStorage.getItem('interaction_count') || '0');
  risk -= Math.min(interactions * 5, 20);
  
  return Math.max(0, Math.round(risk));
};