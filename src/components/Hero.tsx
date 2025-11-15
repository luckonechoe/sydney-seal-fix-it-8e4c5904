
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, Phone, MapPin, Shield, Clock, Award, Zap } from 'lucide-react';
import { useFormTracking } from '../hooks/useAnalytics';

const Hero = () => {
  const { trackForm } = useFormTracking();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackForm('hero-contact', { type: 'quote-request' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile-first Z-pattern layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Primary Content - Mobile First */}
          <div className="order-1">
            {/* Trust Badge Bar - Mobile Optimized */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1" />
                <span className="text-xs sm:text-sm font-medium text-green-700">Licensed</span>
              </div>
              <div className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-1" />
                <span className="text-xs sm:text-sm font-medium text-blue-700">Anti-Microbial</span>
              </div>
              <div className="flex items-center bg-orange-100 px-2 py-1 rounded-full">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600 mr-1" />
                <span className="text-xs sm:text-sm font-medium text-orange-700">Same Day</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-primary font-semibold text-sm sm:text-base">Serving Sydney & Surrounds</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Advanced Leak Repair & 
              <span className="text-primary"> Restoration Services</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Expert waterproofing solutions for showers, balconies, and bathrooms. 10-year warranty. Same-day emergency service across Sydney.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 mb-6 sm:mb-8 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">Advanced Technology</h3>
                  <p className="text-blue-800 text-sm sm:text-base">Our silver-ion nanoparticle grout & sealant provides permanent antimicrobial protection and mould resistance for the lifetime of your installation.</p>
                </div>
              </div>
            </div>
            
            {/* Mobile-optimized CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 touch-manipulation min-h-[48px] font-semibold"
                onClick={() => window.location.href = 'tel:0412345678'}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call 0412 345 678
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 touch-manipulation min-h-[48px] font-semibold"
              >
                Get Free Quote
              </Button>
            </div>
            
            
            {/* Trust indicators - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center space-x-2 bg-white/50 p-2 rounded-lg">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground text-sm sm:text-base font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 p-2 rounded-lg">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground text-sm sm:text-base font-medium">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/50 p-2 rounded-lg">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-foreground text-sm sm:text-base font-medium">Lifetime Protection</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form - Mobile First */}
          <div className="order-2">
            <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6 text-center">Get Your Free Assessment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="touch-manipulation min-h-[48px] text-base"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="touch-manipulation min-h-[48px] text-base"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="touch-manipulation min-h-[48px] text-base"
                />
                <textarea
                  placeholder="Describe your leak or restoration needs..."
                  rows={4}
                  className="w-full px-3 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent touch-manipulation text-base resize-none"
                ></textarea>
                <Button 
                  type="submit"
                  className="w-full text-base sm:text-lg py-3 sm:py-4 touch-manipulation min-h-[48px] font-semibold"
                >
                  Get Free Assessment
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
