import { Shield, Award, Clock, Star, CheckCircle2, Zap } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "No Tile Removal Required",
      description: "Restore tiles without the mess",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Award,
      title: "Antimicrobial Protection",
      description: "Nanoparticle technology prevents mould & bacteria",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Emergency repairs available 24/7",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: Star,
      title: "10 Year Warranty",
      description: "Guaranteed workmanship & materials",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: CheckCircle2,
      title: "Sydney Specialists",
      description: "Local experts serving all suburbs",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: Zap,
      title: "Advanced Solutions",
      description: "Revolutionary leak repair methods",
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Why Choose Sydney Seal & Grout?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Professional expertise you can trust for lasting results
          </p>
        </div>

        {/* Mobile-first responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index}
                className={`${badge.bg} p-4 sm:p-6 rounded-lg border border-border hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 rounded-lg bg-white ${badge.color} flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                      {badge.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA section */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Ready to Fix Your Leak?
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              Get professional assessment and immediate solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:0412345678'}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold touch-manipulation min-h-[48px] hover:bg-primary/90 transition-colors"
              >
                Call Now: 0412 345 678
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold touch-manipulation min-h-[48px] hover:bg-primary/5 transition-colors">
                Request Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;