
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, Phone, MapPin, Shield, Clock, Award, Zap, Upload, X, Loader2 } from 'lucide-react';
import { useFormTracking } from '../hooks/useAnalytics';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { trackForm } = useFormTracking();
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          message: formData.message || null,
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save your request');
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-quote-notification', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
      });

      if (emailError) {
        console.error('Email error:', emailError);
      }

      trackForm('hero-contact', { type: 'quote-request' });
      toast({
        title: "Thank you!",
        description: "We'll contact you within 24 hours.",
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
      setUploadedFiles([]);
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="bg-gradient-to-br from-blue-50 to-blue-100 py-8 sm:py-12 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Mobile-first Z-pattern layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Primary Content - Mobile First */}
          <article className="order-1">
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
            
            <h1 id="hero-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Sydney's Trusted Experts in
              <span className="text-primary"> Shower Leak Repair & Waterproofing</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Professional waterproofing solutions for showers, balconies, and bathrooms across Sydney. 
              AS3740 certified, 5-year warranty, same-day emergency service. No tile removal required.
            </p>

            <div className="bg-blue-50 border-l-4 border-primary p-3 sm:p-4 mb-6 sm:mb-8 rounded-r-lg">
              <div className="flex items-start space-x-2">
                <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">AS3740 Certified Waterproofing</h3>
                  <p className="text-blue-800 text-sm sm:text-base">All our work meets Australian Standards for waterproofing wet areas in buildings, ensuring code compliance and long-term protection for your property.</p>
                </div>
              </div>
            </div>
            
            {/* Mobile-optimized CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 touch-manipulation min-h-[48px] font-semibold"
                onClick={() => window.location.href = 'tel:0421043444'}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call 0421 043 444
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleQuoteClick}
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

            {/* Trust Statistics */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 sm:gap-8 mt-8 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">24hr</div>
                <div className="text-sm sm:text-base text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">5yr</div>
              <div className="text-sm sm:text-base text-muted-foreground">Warranty</div>
              </div>
            </div>
          </article>
          
          {/* Contact Form - Mobile First */}
          <aside className="order-2" aria-label="Get free assessment form">
            <Card className="p-4 sm:p-6 lg:p-8 bg-card shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 sm:mb-6 text-center">Get Your Free Assessment</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="touch-manipulation min-h-[48px] text-base"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="touch-manipulation min-h-[48px] text-base"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="touch-manipulation min-h-[48px] text-base"
                />
                <textarea
                  name="message"
                  placeholder="Describe your leak or restoration needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-3 border border-input bg-background rounded-md focus:ring-2 focus:ring-ring focus:border-transparent touch-manipulation text-base resize-none"
                ></textarea>
                
                {/* File Upload Section */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-card-foreground">
                    Upload Photos or Videos (Optional)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-input border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">Photos: PNG, JPG, GIF (MAX. 10MB)</p>
                        <p className="text-xs text-muted-foreground">Videos: MP4, MOV, AVI (MAX. 50MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                  
                  {/* Display uploaded files */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-card-foreground">Uploaded files:</p>
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                          <span className="text-sm text-card-foreground truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-destructive hover:text-destructive/80"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  className="w-full text-base sm:text-lg py-3 sm:py-4 touch-manipulation min-h-[48px] font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Get Free Assessment'
                  )}
                </Button>
              </form>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
