import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Cookie, X } from 'lucide-react';
import { setAnalyticsConsent, isConsentDecisionMade, initGA } from '../lib/analytics';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Show banner if consent decision hasn't been made
    if (!isConsentDecisionMade()) {
      setShowBanner(true);
    } else {
      // Initialize GA if consent was previously given
      initGA();
    }
  }, []);

  const handleAcceptAll = () => {
    setAnalyticsConsent(true);
    setShowBanner(false);
    initGA();
  };

  const handleRejectAll = () => {
    setAnalyticsConsent(false);
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    setAnalyticsConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-card border-border shadow-lg">
        <div className="p-6">
          {!showDetails ? (
            // Simple Banner
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <Cookie className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Cookie Preferences</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to improve your experience and analyze site usage. 
                    <button 
                      onClick={() => setShowDetails(true)}
                      className="text-primary hover:underline ml-1"
                    >
                      Learn more
                    </button>
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:flex-row md:gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRejectAll}
                >
                  Reject All
                </Button>
                <Button 
                  size="sm"
                  onClick={handleAcceptAll}
                >
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Detailed Banner
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Cookie Preferences</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for basic site functionality. These cannot be disabled.
                  </p>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <span className="inline-block bg-muted px-2 py-1 rounded text-xs">Always Active</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. Includes Google Analytics 4 for traffic analysis, form submissions, 
                    and user journey tracking.
                  </p>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <strong>Data collected:</strong> Page views, click events, form submissions, device type, 
                    referral source, session duration
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">GDPR Compliance</h4>
                  <p className="text-sm text-muted-foreground">
                    We comply with EU privacy regulations. Your data is anonymized and you can withdraw 
                    consent at any time. No personal data is shared with third parties without consent.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:flex-row md:gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleAcceptNecessary}
                >
                  Essential Only
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRejectAll}
                >
                  Reject All
                </Button>
                <Button 
                  size="sm"
                  onClick={handleAcceptAll}
                >
                  Accept All
                </Button>
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                By clicking "Accept All", you agree to our use of analytics cookies. 
                View our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for more details.
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;