
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Droplets, Shield, Clock, Award } from 'lucide-react';

const ShowerLeakRepair = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Stop Shower Leaks in Their Tracks—Sydney's Trusted Shower Repair Experts
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Protect Your Home, Save Your Bathroom, and Enjoy Peace of Mind
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert leaking shower repair Sydney services using advanced leak detection and waterproofing technology. 
              Stop bathroom leaks permanently with our guaranteed shower leak detection and grout repair Sydney solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Book Free Shower Leak Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section with NLP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Is Your Shower Silently Damaging Your Home?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">😰</div>
                  <h3 className="font-bold mb-2">Cracked Tiles?</h3>
                  <p className="text-sm text-muted-foreground">Water seeping through grout lines causing structural damage</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🤢</div>
                  <h3 className="font-bold mb-2">Damp Smells?</h3>
                  <p className="text-sm text-muted-foreground">Musty odors indicating hidden moisture and mould growth</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🦠</div>
                  <h3 className="font-bold mb-2">Mould in Bathroom?</h3>
                  <p className="text-sm text-muted-foreground">Black spots spreading despite constant cleaning</p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg text-center">
              <p className="text-lg text-foreground mb-4 italic">
                "Imagine stepping into your shower, free from leaks and worries. No more anxiety about water damage. 
                No more embarrassment when guests use your bathroom. Just a clean, dry, beautiful space you can be proud of."
              </p>
              <p className="text-muted-foreground">
                Every day you wait, the damage gets worse—and more expensive. But it doesn't have to be this way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Benefits with Future Pacing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Complete Shower Leak Solution—Fast, Lasting, Guaranteed
            </h2>
            <p className="text-lg text-muted-foreground">
              Picture your bathroom looking fresh and dry—permanently. No more stress, no more damage, 
              no more costly repairs down the line. Our proven shower waterproofing process stops leaks at the source.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Proven Shower Leak Repair Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Advanced Leak Detection</h4>
                    <p className="text-muted-foreground">We pinpoint exactly where water is escaping using thermal imaging and moisture meters—no guesswork</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Professional Grout Restoration</h4>
                    <p className="text-muted-foreground">Expert grout repair Sydney services that seal every crack and prevent future water penetration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Silver-Ion Waterproofing</h4>
                    <p className="text-muted-foreground">Revolutionary antimicrobial technology that prevents mould growth while creating an impenetrable water barrier</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Minimal Disruption</h4>
                    <p className="text-muted-foreground">Most repairs completed in 1-2 days with emergency shower repairs available within 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-medium">
                  <strong>Future-pace your success:</strong> In just a few days, you'll wake up knowing your shower is completely sealed. 
                  No more worrying about ceiling stains below. No more calling plumbers. Just peace of mind.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <h3 className="text-xl font-bold text-foreground mb-6">Why Homeowners & Property Managers Choose Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Speed & Efficiency</h4>
                    <p className="text-sm text-muted-foreground">Fast diagnosis, quick repairs, minimal downtime—we respect your schedule</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Guaranteed Results</h4>
                    <p className="text-sm text-muted-foreground">Lifetime warranty on workmanship and materials—we stand behind our work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Permanent Solution</h4>
                    <p className="text-sm text-muted-foreground">Stop the cycle of temporary fixes—our repairs last for decades</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Health Protection</h4>
                    <p className="text-sm text-muted-foreground">Silver-ion technology eliminates mould and bacteria—protect your family's health</p>
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
              Trusted by Sydney Homeowners & Property Managers
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Licensed, insured, and certified bathroom leak experts serving Sydney since 2010
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-bold text-foreground">Certified Professionals</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Fully licensed waterproofing specialists with advanced training</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-bold text-foreground">Lifetime Warranty</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage on all materials and workmanship</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-8 h-8 text-primary mr-3" />
                    <h3 className="font-bold text-foreground">24/7 Emergency Service</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Rapid response for urgent shower leak emergencies</p>
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
                    "These guys stopped the leak—fast! I'd been dealing with water damage for months. They found the problem in 30 minutes 
                    and had it fixed the next day. No more damp smell, no more stress. Highly recommend!"
                  </p>
                  <p className="font-bold text-foreground">— John M., Bondi</p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "As a property manager, I need reliable contractors. This team delivered quality shower leak repairs across three properties. 
                    Professional, punctual, and the tenants are thrilled. My go-to for all waterproofing work."
                  </p>
                  <p className="font-bold text-foreground">— Sarah L., Property Manager, Eastern Suburbs</p>
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
              Book Your Shower Leak Inspection Today—Don't Wait Until the Problem Gets Worse
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every day you delay costs you more in damage. Get a free assessment from Sydney's leading bathroom leak experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Free Inspection
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ✓ Same-day service available &nbsp;|&nbsp; ✓ No-obligation quotes &nbsp;|&nbsp; ✓ Lifetime warranty included
            </p>
          </div>
        </div>
      </section>

      {/* SEO-Rich Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">
              Complete Leaking Shower Repair Sydney Services
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              From shower leak detection to complete bathroom waterproofing, we deliver expert solutions 
              for residential and commercial properties across Sydney.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Advanced Leak Detection</h3>
                  <p className="text-muted-foreground text-sm">Pinpoint leak sources with thermal imaging and moisture meters—accurate diagnosis every time</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Antimicrobial Protection</h3>
                  <p className="text-muted-foreground text-sm">Silver-ion technology prevents bacteria and mould growth for lasting hygiene</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Emergency Repairs</h3>
                  <p className="text-muted-foreground text-sm">Same-day emergency shower repairs available—we're here when you need us most</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Lifetime Warranty</h3>
                  <p className="text-muted-foreground text-sm">Comprehensive coverage on all shower waterproofing materials and workmanship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShowerLeakRepair;
