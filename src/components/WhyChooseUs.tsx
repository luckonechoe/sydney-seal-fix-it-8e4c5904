
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Sparkles, FileCheck, DollarSign } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WhyChooseUs = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const reasons = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "1,000+ Leaks Fixed",
      description: "Not just years in business — real results. Over one thousand Sydney homes protected since 2015, from Bondi to Parramatta."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Sydney's Only Antimicrobial Waterproofer",
      description: "Our silver-ion epoxy grout is clinically proven to prevent mould and bacteria at the source — a permanent health-protecting upgrade no standard sealer can match."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Written Warranty — Not Just a Promise",
      description: "A 5-year written warranty on every repair. Covers both materials and workmanship. We back our work in writing because we know it lasts."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Transparent Pricing From $749",
      description: "No hidden fees. No surprise invoices. You get a clear written quote before we start — and our non-invasive method costs 70% less than full retiling."
    }
  ];

  return (
    <section 
      ref={elementRef}
      aria-labelledby="why-choose-heading"
      className={`py-16 bg-secondary/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 id="why-choose-heading" className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Sydney Sealed Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four reasons Sydney homeowners and strata managers choose us over every other waterproofing company
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
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
