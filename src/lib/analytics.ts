// Google Analytics 4 implementation with comprehensive business intelligence
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 measurement ID

// Business Intelligence Data Structure
export interface AnalyticsEvent {
  id: string;
  timestamp: number;
  sessionId: string;
  type: string;
  category: string;
  label: string;
  value?: number;
  properties: Record<string, any>;
  page: string;
  userAgent: string;
  deviceType: string;
  referrer: string;
}

export interface UserSession {
  id: string;
  startTime: number;
  endTime?: number;
  pageViews: string[];
  events: AnalyticsEvent[];
  totalEvents: number;
  convertedToQuote: boolean;
  convertedToCall: boolean;
  preferredContactMethod?: 'phone' | 'email';
  servicesViewed: string[];
  lastActiveTime: number;
}

// Initialize Google Analytics with enhanced tracking
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag && hasAnalyticsConsent()) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true,
      allow_google_signals: hasAnalyticsConsent(),
      allow_ad_personalization_signals: hasAnalyticsConsent(),
      custom_map: {
        custom_parameter_1: 'device_type',
        custom_parameter_2: 'traffic_source',
        custom_parameter_3: 'service_interest',
        custom_parameter_4: 'user_journey_stage',
      }
    });

    // Initialize enhanced tracking
    initScrollTracking();
    initTimeTracking();
    initSessionTracking();
  }
};

// GDPR Consent Management (existing)
export const setAnalyticsConsent = (consent: boolean) => {
  localStorage.setItem('analytics_consent', consent.toString());
  
  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: consent ? 'granted' : 'denied',
      ad_storage: consent ? 'granted' : 'denied',
      ad_user_data: consent ? 'granted' : 'denied',
      ad_personalization: consent ? 'granted' : 'denied',
    });
  }

  if (consent && !window.gtag) {
    initGA();
  }
};

export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'true';
};

export const isConsentDecisionMade = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') !== null;
};

// Enhanced Business Intelligence Tracking
class BusinessIntelligence {
  private static instance: BusinessIntelligence;
  private currentSession: UserSession;
  private events: AnalyticsEvent[] = [];

  constructor() {
    this.currentSession = this.initializeSession();
    this.loadStoredEvents();
  }

  static getInstance(): BusinessIntelligence {
    if (!BusinessIntelligence.instance) {
      BusinessIntelligence.instance = new BusinessIntelligence();
    }
    return BusinessIntelligence.instance;
  }

  private initializeSession(): UserSession {
    const existingSessionId = sessionStorage.getItem('analytics_session_id');
    const sessionId = existingSessionId || this.generateSessionId();
    
    if (!existingSessionId) {
      sessionStorage.setItem('analytics_session_id', sessionId);
    }

    return {
      id: sessionId,
      startTime: Date.now(),
      pageViews: [],
      events: [],
      totalEvents: 0,
      convertedToQuote: false,
      convertedToCall: false,
      servicesViewed: [],
      lastActiveTime: Date.now(),
    };
  }

  private generateSessionId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  private loadStoredEvents(): void {
    try {
      const stored = localStorage.getItem('analytics_events');
      if (stored) {
        this.events = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load stored analytics events:', error);
    }
  }

  private saveEvents(): void {
    try {
      // Keep only last 1000 events to prevent storage bloat
      const eventsToStore = this.events.slice(-1000);
      localStorage.setItem('analytics_events', JSON.stringify(eventsToStore));
    } catch (error) {
      console.warn('Failed to save analytics events:', error);
    }
  }

  trackEvent(
    type: string,
    category: string,
    label: string,
    properties: Record<string, any> = {},
    value?: number
  ): void {
    if (!hasAnalyticsConsent()) return;

    const event: AnalyticsEvent = {
      id: this.generateEventId(),
      timestamp: Date.now(),
      sessionId: this.currentSession.id,
      type,
      category,
      label,
      value,
      properties,
      page: window.location.pathname,
      userAgent: navigator.userAgent,
      deviceType: this.getDeviceType(),
      referrer: document.referrer,
    };

    this.events.push(event);
    this.currentSession.events.push(event);
    this.currentSession.totalEvents++;
    this.currentSession.lastActiveTime = Date.now();

    // Track specific conversions
    if (type === 'quote_request') {
      this.currentSession.convertedToQuote = true;
    }
    if (type === 'phone_call') {
      this.currentSession.convertedToCall = true;
    }
    if (properties.contact_method) {
      this.currentSession.preferredContactMethod = properties.contact_method;
    }
    if (properties.service_type && !this.currentSession.servicesViewed.includes(properties.service_type)) {
      this.currentSession.servicesViewed.push(properties.service_type);
    }

    this.saveEvents();

    // Send to GA4 if available
    if (window.gtag) {
      window.gtag('event', type, {
        event_category: category,
        event_label: label,
        value: value || 1,
        custom_parameter_1: this.getDeviceType(),
        custom_parameter_2: this.getTrafficSource(),
        custom_parameter_3: properties.service_type || 'unknown',
        custom_parameter_4: this.getUserJourneyStage(),
        ...properties,
      });
    }
  }

  private generateEventId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 5);
  }

  private getDeviceType(): string {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private getTrafficSource(): string {
    const referrer = document.referrer;
    if (!referrer) return 'direct';
    if (referrer.includes('google')) return 'google';
    if (referrer.includes('facebook')) return 'facebook';
    if (referrer.includes('instagram')) return 'instagram';
    if (referrer.includes('linkedin')) return 'linkedin';
    return 'other';
  }

  private getUserJourneyStage(): string {
    const pageViews = this.currentSession.pageViews;
    if (pageViews.length === 1) return 'landing';
    if (this.currentSession.convertedToQuote || this.currentSession.convertedToCall) return 'converted';
    if (this.currentSession.servicesViewed.length > 0) return 'interested';
    return 'browsing';
  }

  // Business Intelligence Analytics
  getAnalyticsSummary() {
    const last7Days = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const last30Days = Date.now() - (30 * 24 * 60 * 60 * 1000);

    const recentEvents = this.events.filter(e => e.timestamp > last7Days);
    const monthlyEvents = this.events.filter(e => e.timestamp > last30Days);

    return {
      totalEvents: this.events.length,
      last7Days: recentEvents.length,
      last30Days: monthlyEvents.length,
      conversionRate: this.calculateConversionRate(),
      topServices: this.getTopServices(),
      contactMethodPreference: this.getContactMethodPreference(),
      deviceBreakdown: this.getDeviceBreakdown(),
      trafficSources: this.getTrafficSources(),
      userJourneyAnalysis: this.getUserJourneyAnalysis(),
      peakHours: this.getPeakHours(),
    };
  }

  private calculateConversionRate(): number {
    const totalSessions = new Set(this.events.map(e => e.sessionId)).size;
    const convertedSessions = this.events.filter(e => 
      e.type === 'quote_request' || e.type === 'phone_call'
    ).length;
    
    return totalSessions > 0 ? (convertedSessions / totalSessions) * 100 : 0;
  }

  private getTopServices(): Array<{ service: string; count: number }> {
    const serviceCounts: Record<string, number> = {};
    
    this.events.forEach(event => {
      if (event.properties.service_type) {
        serviceCounts[event.properties.service_type] = 
          (serviceCounts[event.properties.service_type] || 0) + 1;
      }
    });

    return Object.entries(serviceCounts)
      .map(([service, count]) => ({ service, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }

  private getContactMethodPreference(): Record<string, number> {
    const methods: Record<string, number> = { phone: 0, email: 0, form: 0 };
    
    this.events.forEach(event => {
      if (event.type === 'phone_call') methods.phone++;
      else if (event.type === 'form_submit') methods.form++;
      else if (event.properties.contact_method === 'email') methods.email++;
    });

    return methods;
  }

  private getDeviceBreakdown(): Record<string, number> {
    const devices: Record<string, number> = {};
    
    this.events.forEach(event => {
      devices[event.deviceType] = (devices[event.deviceType] || 0) + 1;
    });

    return devices;
  }

  private getTrafficSources(): Record<string, number> {
    const sources: Record<string, number> = {};
    
    this.events.forEach(event => {
      const source = this.getTrafficSourceFromReferrer(event.referrer);
      sources[source] = (sources[source] || 0) + 1;
    });

    return sources;
  }

  private getTrafficSourceFromReferrer(referrer: string): string {
    if (!referrer) return 'direct';
    if (referrer.includes('google')) return 'google';
    if (referrer.includes('facebook')) return 'facebook';
    if (referrer.includes('instagram')) return 'instagram';
    return 'other';
  }

  private getUserJourneyAnalysis(): Array<{ path: string; count: number }> {
    const journeys: Record<string, number> = {};
    
    // Group events by session and analyze paths
    const sessionEvents = this.groupEventsBySession();
    
    Object.values(sessionEvents).forEach(events => {
      const path = events.map(e => e.type).join(' → ');
      journeys[path] = (journeys[path] || 0) + 1;
    });

    return Object.entries(journeys)
      .map(([path, count]) => ({ path, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);
  }

  private groupEventsBySession(): Record<string, AnalyticsEvent[]> {
    return this.events.reduce((acc, event) => {
      if (!acc[event.sessionId]) {
        acc[event.sessionId] = [];
      }
      acc[event.sessionId].push(event);
      return acc;
    }, {} as Record<string, AnalyticsEvent[]>);
  }

  private getPeakHours(): Array<{ hour: number; count: number }> {
    const hourCounts: Record<number, number> = {};
    
    this.events.forEach(event => {
      const hour = new Date(event.timestamp).getHours();
      hourCounts[hour] = (hourCounts[hour] || 0) + 1;
    });

    return Object.entries(hourCounts)
      .map(([hour, count]) => ({ hour: parseInt(hour), count }))
      .sort((a, b) => a.hour - b.hour);
  }

  exportData(): string {
    return JSON.stringify({
      events: this.events,
      summary: this.getAnalyticsSummary(),
      exportDate: new Date().toISOString(),
    }, null, 2);
  }
}

// Initialize BI instance
const BI = BusinessIntelligence.getInstance();

// Enhanced Tracking Functions
export const trackPageView = (path: string, title?: string) => {
  if (!hasAnalyticsConsent()) return;

  BI.trackEvent('page_view', 'Navigation', 'Page View', {
    page_title: title || document.title,
    page_path: path,
    page_location: window.location.href,
  });

  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
    });
  }
};

export const trackFormSubmission = (formType: string, formData?: Record<string, any>) => {
  BI.trackEvent('form_submit', 'Form', formType, {
    form_type: formType,
    form_location: window.location.pathname,
    service_type: formData?.service_type || 'general',
    suburb: formData?.suburb || 'unknown',
    contact_method: formData?.phone ? 'phone' : 'email',
    urgency: formData?.urgency || 'normal',
  }, 5);
};

export const trackCTAClick = (ctaName: string, ctaLocation: string, targetUrl?: string) => {
  BI.trackEvent('cta_click', 'CTA', ctaName, {
    cta_name: ctaName,
    cta_location: ctaLocation,
    target_url: targetUrl,
    page_path: window.location.pathname,
  }, 3);
};

export const trackServiceInquiry = (serviceType: string, inquiryMethod: string) => {
  BI.trackEvent('service_inquiry', 'Service', serviceType, {
    service_type: serviceType,
    inquiry_method: inquiryMethod,
    page_path: window.location.pathname,
  }, 7);
};

export const trackPhoneCall = (callType: string = 'header') => {
  BI.trackEvent('phone_call', 'Contact', 'Phone Call', {
    call_type: callType,
    page_path: window.location.pathname,
    contact_method: 'phone',
  }, 10);
};

export const trackQuoteRequest = (serviceType: string, urgency?: string) => {
  BI.trackEvent('quote_request', 'Conversion', 'Quote Request', {
    service_type: serviceType,
    urgency: urgency || 'normal',
    page_path: window.location.pathname,
  }, 15);
};

export const trackScrollDepth = (depth: number) => {
  BI.trackEvent('scroll_depth', 'Engagement', `${depth}% Scroll`, {
    scroll_depth: depth,
    page_path: window.location.pathname,
  });
};

export const trackTimeOnPage = (timeSpent: number) => {
  BI.trackEvent('time_on_page', 'Engagement', 'Time Spent', {
    time_spent_seconds: timeSpent,
    page_path: window.location.pathname,
  });
};

export const trackSectionView = (sectionName: string) => {
  BI.trackEvent('section_view', 'Content', 'Section View', {
    section_name: sectionName,
    page_path: window.location.pathname,
  });
};

// Enhanced Tracking Initialization
const initScrollTracking = () => {
  let scrollDepths = [25, 50, 75, 90, 100];
  let trackedDepths: number[] = [];

  const trackScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
        trackedDepths.push(depth);
        trackScrollDepth(depth);
      }
    });
  };

  window.addEventListener('scroll', trackScroll, { passive: true });
};

const initTimeTracking = () => {
  const startTime = Date.now();
  let timeTracked = false;

  const trackTime = () => {
    if (!timeTracked) {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 30) { // Only track if user spent more than 30 seconds
        trackTimeOnPage(timeSpent);
        timeTracked = true;
      }
    }
  };

  // Track time on page before unload
  window.addEventListener('beforeunload', trackTime);
  
  // Track time on page when user switches tabs
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      trackTime();
    }
  });
};

const initSessionTracking = () => {
  // Update last active time periodically
  setInterval(() => {
    BI.trackEvent('session_heartbeat', 'Session', 'Active', {
      page_path: window.location.pathname,
    });
  }, 30000); // Every 30 seconds
};

// Export BI instance for dashboard
export const getAnalyticsSummary = () => BI.getAnalyticsSummary();
export const exportAnalyticsData = () => BI.exportData();

// User Journey Tracking
export const trackUserJourney = (action: string, fromPage: string, toPage: string) => {
  BI.trackEvent('user_journey', 'Navigation', `${fromPage} → ${toPage}`, {
    journey_action: action,
    from_page: fromPage,
    to_page: toPage,
    session_id: sessionStorage.getItem('analytics_session_id'),
  });
};