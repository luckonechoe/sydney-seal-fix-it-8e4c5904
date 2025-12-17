
import { Card, CardContent } from '@/components/ui/card';
import { Construction, Shield, Wrench, Hammer } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const reasons = [
    {
      icon: <Construction className="w-8 h-8 text-blue-600" />,
      title: "15+ Years Experience",
      description: "Decades of expertise in advanced leak repair and restoration across Sydney"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "AS3740 Certified",
      description: "Fully compliant with Australian Standards for waterproofing of wet areas in buildings"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Premium Materials",
      description: "Built using premium, water-resistant grout trusted in swimming pools"
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600" />,
      title: "5 Year Warranty",
      description: "Every leak repair is protected by our lifetime protection and 5 year warranty"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-16 bg-secondary/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why Choose Sydney Seal & Grout?
          </h2>
          <p className="text-xl text-muted-foreground">
            Advanced technology, professional expertise, and lifetime protection guarantee
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
