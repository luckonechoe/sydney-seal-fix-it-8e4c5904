
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

const Services = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const services: Array<{
    image: string;
    title: ReactNode;
    titleText: string;
    description: string;
    features: string[];
    link: string;
  }> = [
    {
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=400&fit=crop",
      title: (
        <>
          Shower Leak<br />Repair
        </>
      ),
      titleText: "Shower Leak Repair",
      description: "Stop water damage with our non-invasive sealing technology. No tiles removed, guaranteed results",
      features: ["No demolition", "Same day service", "Waterproof guarantee"],
      link: "/shower-leak-repair"
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=400&fit=crop",
      title: (
        <>
          Balcony Leak<br />Repair
        </>
      ),
      titleText: "Balcony Leak Repair",
      description: "Complete balcony waterproofing solution with advanced leak repair using efflorecense free technology",
      features: ["Weather resistant", "UV protection", "Balcony waterproofing"],
      link: "/balcony-leak-repair"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=400&fit=crop",
      title: "Commercial Waterproofing Services",
      titleText: "Commercial Waterproofing Services",
      description: "Reliable waterproofing for strata, real estate, property managers, and commercial organizations",
      features: ["Reliable & professional", "Cost-effective solution", "Convenient repair time"],
      link: "/commercial-waterproofing"
    },
    {
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=400&fit=crop",
      title: (
        <>
          Full Shower Waterproofing<br />& Re-Tile
        </>
      ),
      titleText: "Full Shower Waterproofing & Re-Tile",
      description: "Complete shower reconstruction with full rip-out and re-tiling for permanent leak resolution",
      features: ["Full reconstruction", "Compliant waterproofing", "Epoxy grout finish"],
      link: "/shower-re-tile"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=400&fit=crop",
      title: (
        <>
          Full Balcony Waterproofing<br />& Re-Tile
        </>
      ),
      titleText: "Full Balcony Waterproofing & Re-Tile",
      description: "Complete balcony reconstruction with new waterproofing membrane and premium tiling",
      features: ["Full demolition", "New membrane system", "Premium tile finish"],
      link: "/balcony-re-tile"
    },
    {
      image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=400&fit=crop",
      title: "Complete Reconstruction",
      titleText: "Complete Reconstruction",
      description: "Full tile reconstruction with double-layer waterproofing for severe leak situations requiring substrate-level repairs",
      features: ["Double-layer protection", "Full substrate rebuild", "Premium epoxy grout"],
      link: "/complete-reconstruction"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header section */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Advanced Leak Repair & Restoration Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionary silver-ion nanoparticle technology providing lifetime antimicrobial protection and mould resistance
          </p>
        </div>

        {/* Service cards grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`
              }}
            >
              {/* Image - Fixed height */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={service.image} 
                  alt={service.titleText}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Card Header with Title */}
              <CardHeader className="pb-4 pt-6 px-6 flex-shrink-0">
                <CardTitle className="text-2xl leading-tight">{service.title}</CardTitle>
              </CardHeader>
              
              {/* Card Content - Grows to fill space */}
              <CardContent className="flex flex-col flex-1 px-6 pb-6 pt-0">
                {/* Description - Fixed height with line clamp */}
                <CardDescription className="mb-6 min-h-[3rem] leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Features list - Fixed spacing and alignment */}
                <ul className="space-y-3 mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button - Pushed to bottom */}
                <Link to={service.link} className="mt-auto">
                  <Button className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Maintenance program card */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-accent/10 border-accent/20 max-w-2xl">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Annual Maintenance Program</h3>
              <p className="text-muted-foreground mb-4">
                Keep your waterproofing in perfect condition with our annual maintenance service
              </p>
              <div className="text-3xl font-bold text-secondary-foreground mb-4">
                $249/year
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Includes inspection, cleaning, and touch-up services to maintain warranty coverage
              </p>
              <Button asChild size="lg" className="mt-2">
                <a href="/preventative-maintenance">Learn More</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
