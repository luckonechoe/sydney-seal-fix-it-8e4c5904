import { Shield, Award, Clock, Star, CheckCircle2, Wrench } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "No Tile Removal Required",
      description: "Our non-invasive repair method saves you $2,000–$5,000 compared to a full retile — zero demolition mess.",
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Award,
      title: "Silver-Ion Antimicrobial Grout",
      description: "Clinically proven to permanently prevent mould, mildew, and bacteria — not just clean them away.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "Same-Day Emergency Callout",
      description: "Team dispatched within 2 hours across all Sydney suburbs. Available 7 days including weekends.",
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: Star,
      title: "5-Year Written Warranty",
      description: "Covers both materials and workmanship — it's a written guarantee, not just a verbal promise.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: CheckCircle2,
      title: "Fully Licensed & Insured",
      description: "NSW Licensed Waterproofer — Lic. 482739W — backed by $20M public liability insurance.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: Wrench,
      title: "15+ Years Sydney Experience",
      description: "Over 1,000 homes protected since 2015. Deep local knowledge of Sydney's building types and climate.",
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-background" aria-labelledby="trust-badges-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 id="trust-badges-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            The Sydney Sealed Difference
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Specific benefits that protect your home, your health, and your budget
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
              Shower Leaking? Stop It Today.
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              Every day you wait, hidden water damage spreads further — and costs more to fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:0421043444'}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold touch-manipulation min-h-[48px] hover:bg-primary/90 transition-colors"
              >
                Call Now: 0421 043 444
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold touch-manipulation min-h-[48px] hover:bg-primary/5 transition-colors"
              >
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
