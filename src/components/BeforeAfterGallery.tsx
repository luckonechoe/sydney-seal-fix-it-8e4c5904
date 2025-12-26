import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import showerBefore from '@/assets/shower-before.jpg';
import showerAfter from '@/assets/shower-after.jpg';
import balconyBefore from '@/assets/balcony-before.jpg';
import balconyAfter from '@/assets/balcony-after.jpg';
import kitchenBefore from '@/assets/kitchen-before.jpg';
import kitchenAfter from '@/assets/kitchen-after.jpg';

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: "Bathroom Shower Restoration",
      location: "Bondi Beach",
      beforeImage: showerBefore,
      afterImage: showerAfter,
      description: "Complete waterproofing with silver-ion antimicrobial treatment",
      testimonial: "Amazing transformation! No more leaks and the antimicrobial protection gives us peace of mind.",
      customer: "Sarah M."
    },
    {
      id: 2,
      title: "Balcony Leak Repair",
      location: "Manly",
      beforeImage: balconyBefore,
      afterImage: balconyAfter,
      description: "Structural waterproofing with lifetime antimicrobial protection",
      testimonial: "Professional service and the results speak for themselves. Highly recommend!",
      customer: "David L."
    },
    {
      id: 3,
      title: "Kitchen Splashback Restoration",
      location: "North Sydney",
      beforeImage: kitchenBefore,
      afterImage: kitchenAfter,
      description: "Grout renewal with stainproof antimicrobial technology",
      testimonial: "The kitchen looks brand new and the grout stays clean much longer now.",
      customer: "Emma R."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-gradient-to-br from-slate-50 to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformative power of our silver-ion antimicrobial technology
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              {/* Before/After Images */}
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative group">
                  <img 
                    src={currentProject.beforeImage} 
                    alt={`Before - ${currentProject.title}`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative group">
                  <img 
                    src={currentProject.afterImage} 
                    alt={`After - ${currentProject.title}`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AFTER
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-muted-foreground mb-1">{currentProject.location}</p>
                    <p className="text-foreground mb-4">{currentProject.description}</p>
                    
                    {/* Testimonial */}
                    <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
                      <Quote className="w-5 h-5 text-primary mb-2" />
                      <p className="text-foreground italic mb-2">"{currentProject.testimonial}"</p>
                      <p className="text-sm text-muted-foreground font-semibold">
                        - {currentProject.customer}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-4">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={prevSlide}
                        className="h-12 w-12"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      
                      {/* Slide Indicators */}
                      <div className="flex space-x-2">
                        {projects.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentSlide ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={nextSlide}
                        className="h-12 w-12"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Primary CTA - Hick's Law Compliance */}
                    <Button 
                      size="lg" 
                      className="px-8 py-3 text-lg font-semibold"
                      onClick={() => window.location.href = 'tel:0421043444'}
                    >
                      Get Your Free Assessment
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;