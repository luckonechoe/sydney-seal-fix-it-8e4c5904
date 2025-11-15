
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useServiceTracking } from '../hooks/useAnalytics';
import { useState } from 'react';

const Header = () => {
  const { trackCall, trackQuote } = useServiceTracking();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePhoneClick = () => {
    trackCall('header');
    window.location.href = 'tel:0412345678';
    setIsMenuOpen(false);
  };

  const handleQuoteClick = () => {
    trackQuote('general', 'normal');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-xl flex items-center justify-center shadow-lg group overflow-hidden">
              {/* Animated background pulse */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl animate-pulse"></div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Logo text with floating animation */}
              <span className="relative text-primary-foreground font-bold text-sm sm:text-lg animate-bounce [animation-duration:2s] group-hover:scale-110 transition-transform duration-300">
                S&G
              </span>
              
              {/* Floating particles */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-foreground/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary-foreground/20 rounded-full animate-pulse [animation-delay:0.5s]"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors duration-300">
                Sydney Seal & Grout
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground animate-fade-in [animation-delay:0.3s]">
                Professional Leak Repair
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors touch-manipulation"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0412 345 678</span>
            </button>
            <Button onClick={handleQuoteClick} className="touch-manipulation">
              Get Free Quote
            </Button>
          </div>
          
          {/* Mobile CTA Buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button 
              onClick={handlePhoneClick} 
              size="sm" 
              className="text-xs px-3 py-2 touch-manipulation min-h-[44px]"
            >
              <Phone className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Call</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="p-2 touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-3">
              <Button 
                onClick={handleQuoteClick} 
                className="w-full touch-manipulation min-h-[48px]"
                size="lg"
              >
                Get Free Quote
              </Button>
              <div className="flex items-center justify-center space-x-2 py-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
