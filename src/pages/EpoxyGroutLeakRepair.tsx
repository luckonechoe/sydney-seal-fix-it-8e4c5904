
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Droplets, Shield, Clock, Award, Wrench, Sparkles } from 'lucide-react';

const EpoxyGroutLeakRepair = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Epoxy Grout Leak Repair Sydney - Expert Epoxy Regrouting Services | Sydney Sealed</title>
        <meta name="description" content="Professional epoxy grout leak repair in Sydney. Waterproof, stain-resistant epoxy regrouting that prevents leaks permanently. 5-year warranty. Call 0421 043 444" />
        <meta name="keywords" content="epoxy grout leak repair Sydney, epoxy regrouting Sydney, waterproof grout Sydney, shower grout repair, bathroom epoxy grout, tile grout waterproofing, epoxy grout sealing Sydney" />
        <link rel="canonical" href="https://sydneysealed.com.au/epoxy-grout-leak-repair" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Epoxy Grout Leak Repair—Sydney's Permanent Waterproof Solution
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Stop Leaks Forever with Industrial-Grade Epoxy Regrouting
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert epoxy grout leak repair Sydney services using premium two-part epoxy systems. 
              Completely waterproof, stain-resistant, and mould-proof grout that lasts for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="tel:0421043444">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0421 043 444 Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Book Free Epoxy Grout Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Is Your Cement Grout Failing You?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💧</div>
                  <h3 className="font-bold mb-2">Porous Grout?</h3>
                  <p className="text-sm text-muted-foreground">Traditional cement grout absorbs water and allows leaks through your tiles</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🟤</div>
                  <h3 className="font-bold mb-2">Stained & Discoloured?</h3>
                  <p className="text-sm text-muted-foreground">Cement grout stains easily and never looks clean despite scrubbing</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🔨</div>
                  <h3 className="font-bold mb-2">Cracking & Crumbling?</h3>
                  <p className="text-sm text-muted-foreground">Old grout breaking apart allowing water to penetrate behind tiles</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <p className="text-lg text-foreground mb-4 italic">
                "Imagine grout that never stains, never cracks, and never lets water through. 
                Epoxy grout transforms your bathroom into a permanently waterproof, low-maintenance space."
              </p>
              <p className="text-muted-foreground">
                Traditional cement grout is porous and fails over time. Epoxy grout is the professional solution that lasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Epoxy Grout Is the Superior Choice
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Epoxy grout is a two-part resin system that creates an impenetrable, waterproof barrier. 
              It's the same technology used in commercial kitchens, hospitals, and swimming pools.
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg">
              <p className="text-sm uppercase tracking-wide mb-1">Starting From</p>
              <p className="text-4xl font-bold">$899</p>
              <p className="text-sm opacity-90 mt-1">Complete epoxy regrouting</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Epoxy Grout Repair Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Complete Grout Removal</h4>
                    <p className="text-muted-foreground">We remove all old cement grout using precision oscillating tools—no damage to tiles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Surface Preparation</h4>
                    <p className="text-muted-foreground">Thorough cleaning and drying ensures optimal epoxy adhesion</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Premium Epoxy Application</h4>
                    <p className="text-muted-foreground">Industrial-grade two-part epoxy applied by certified specialists</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Curing & Sealing</h4>
                    <p className="text-muted-foreground">Proper curing time ensures maximum hardness and waterproofing</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-medium">
                  <strong>The Result:</strong> Grout that's 100% waterproof, won't stain or discolour, 
                  and will look perfect for 20+ years with zero maintenance.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-foreground mb-6">Epoxy vs Cement Grout</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Droplets className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">100% Waterproof</h4>
                    <p className="text-sm text-muted-foreground">Cement grout is porous and absorbs water. Epoxy grout is completely impermeable.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Stain Resistant</h4>
                    <p className="text-sm text-muted-foreground">Coffee, wine, oil—nothing penetrates epoxy grout. It stays clean effortlessly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mould & Bacteria Proof</h4>
                    <p className="text-sm text-muted-foreground">Non-porous surface means mould and bacteria can't grow—healthier bathroom.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Wrench className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Superior Durability</h4>
                    <p className="text-sm text-muted-foreground">Won't crack, shrink, or crumble. Withstands heavy use and chemical exposure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Sydney's Epoxy Grout Specialists
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Certified epoxy applicators with advanced training in two-part resin systems
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-bold text-foreground">Certified Applicators</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Factory-trained specialists in premium epoxy systems</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-bold text-foreground">5-Year Warranty</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage on all epoxy grout work</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-bold text-foreground">Fast Turnaround</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Most shower regrouting completed in 1-2 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">What Our Customers Say</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Had our entire shower regrouted with epoxy. The difference is incredible—the grout looks brand new 
                    and the shower no longer leaks to the room below. Should have done this years ago!"
                  </p>
                  <p className="font-bold text-foreground">— Michael T., Randwick</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our old cement grout was stained and mouldy no matter how much we cleaned. The epoxy grout is 
                    completely different—no mould, no stains, and it's been 2 years. Highly recommend!"
                  </p>
                  <p className="font-bold text-foreground">— Jenny W., Mosman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Upgrade to Epoxy Grout Today—Stop Leaks Permanently
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free assessment and quote for professional epoxy regrouting in your bathroom or kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <a href="tel:0421043444">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 0421 043 444 Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Free Assessment
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ✓ Free quotes &nbsp;|&nbsp; ✓ 5-year warranty &nbsp;|&nbsp; ✓ Premium epoxy systems
            </p>
          </div>
        </div>
      </section>

      {/* SEO-Rich Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">
              Complete Epoxy Grout Services Sydney
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              From shower regrouting to complete bathroom and kitchen epoxy applications, 
              we deliver permanent waterproofing solutions across Sydney.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Shower Epoxy Regrouting</h3>
                  <p className="text-muted-foreground text-sm">Complete shower floor and wall regrouting with waterproof epoxy</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Bathroom Epoxy Grout</h3>
                  <p className="text-muted-foreground text-sm">Full bathroom tile regrouting for permanent leak prevention</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Kitchen Epoxy Grout</h3>
                  <p className="text-muted-foreground text-sm">Stain-resistant grout perfect for kitchen splashbacks and floors</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Commercial Epoxy</h3>
                  <p className="text-muted-foreground text-sm">Industrial-grade solutions for commercial kitchens and wet areas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Epoxy Grout FAQs
            </h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-foreground mb-2">What is epoxy grout?</h3>
                <p className="text-muted-foreground">
                  Epoxy grout is a two-part resin-based grout made from epoxy resins and a hardener. Unlike cement grout, 
                  it's completely waterproof, non-porous, and highly resistant to stains, mould, and chemicals.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-foreground mb-2">How long does epoxy grout last?</h3>
                <p className="text-muted-foreground">
                  Properly applied epoxy grout can last 20+ years without cracking, staining, or deteriorating. 
                  It far outlasts traditional cement grout which typically needs resealing every 1-2 years.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-foreground mb-2">Is epoxy grout worth the extra cost?</h3>
                <p className="text-muted-foreground">
                  Yes! While epoxy grout costs more upfront, it eliminates the need for regular resealing, 
                  prevents water damage, and never needs replacing—saving money long-term.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-bold text-foreground mb-2">Can epoxy grout be applied over old grout?</h3>
                <p className="text-muted-foreground">
                  No, the old grout must be completely removed first. This ensures proper adhesion and 
                  allows us to inspect the substrate for any damage or waterproofing issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EpoxyGroutLeakRepair;
