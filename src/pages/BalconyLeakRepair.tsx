
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Home, Umbrella, AlertTriangle, Zap } from 'lucide-react';

const BalconyLeakRepair = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Balcony Leak Repair Sydney - Expert Balcony Waterproofing & Restoration</title>
        <meta name="description" content="Stop balcony leaks permanently! Professional balcony waterproofing and leak repair across Sydney. Advanced detection, lifetime warranty, same-day service. Call 0421 043 444 for free assessment." />
        <meta name="keywords" content="balcony leak repair Sydney, balcony waterproofing Sydney, balcony restoration, deck waterproofing Sydney, outdoor leak repair, balcony membrane repair Sydney" />
        <link rel="canonical" href="https://yourdomain.com/balcony-leak-repair" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Restore Your Balcony—Sydney's Leading Leak Repair Specialists
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Enjoy Safe, Dry Outdoor Spaces Year-Round
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Expert balcony leak repair Sydney services for homeowners, strata managers, and builders. 
              Professional balcony waterproofing with tile and grout balcony repairs that last for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0421 043 444 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Get Free Balcony Inspection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Empathy Section with NLP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Leaking Balconies Ruin Outdoor Enjoyment and Cause Costly Damage
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
              We understand your frustration. Every time it rains, you worry. Is water seeping through? 
              Is the damage spreading? Will this become a nightmare repair bill?
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💧</div>
                  <h3 className="font-bold mb-2 text-foreground">Water Pooling</h3>
                  <p className="text-sm text-muted-foreground">Standing water after rain signals drainage failure and waterproofing breakdown</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏚️</div>
                  <h3 className="font-bold mb-2 text-foreground">Structural Damage</h3>
                  <p className="text-sm text-muted-foreground">Ceiling stains, wall damage, and concrete spalling from water penetration</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">😰</div>
                  <h3 className="font-bold mb-2 text-foreground">Outdoor Anxiety</h3>
                  <p className="text-sm text-muted-foreground">Can't enjoy your balcony—worried about safety and further deterioration</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center border-l-4 border-primary">
              <p className="text-lg text-foreground mb-4 italic">
                "Feel confident every time you step onto your balcony—no more hidden surprises. 
                Imagine hosting friends, enjoying your morning coffee, or simply relaxing outdoors, rain or shine, 
                knowing your balcony is completely protected."
              </p>
              <p className="text-muted-foreground">
                You deserve peace of mind. Let's make your balcony safe and enjoyable again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process and Value with Future-Pacing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Balcony Will Be Secured for Years to Come
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our proven strata balcony leak solution process delivers permanent waterproofing protection. 
              Envision gatherings and relaxation on your balcony, rain or shine—it all starts here.
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg">
              <p className="text-sm uppercase tracking-wide mb-1">Starting From</p>
              <p className="text-4xl font-bold">$1,649</p>
              <p className="text-sm opacity-90 mt-1">Complete balcony waterproofing</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Step-by-Step Balcony Waterproofing Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Comprehensive Leak Detection</h4>
                    <p className="text-muted-foreground">Advanced moisture testing and thermal imaging pinpoint every leak source—nothing gets missed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Tile & Grout Balcony Repairs</h4>
                    <p className="text-muted-foreground">Expert restoration of damaged tiles, grout lines, and joints with precision craftsmanship</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Waterproofing Membrane Application</h4>
                    <p className="text-muted-foreground">High-performance membranes with silver-ion technology create an impenetrable barrier</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Drainage Optimization</h4>
                    <p className="text-muted-foreground">Improved drainage systems prevent water pooling and ensure efficient water flow</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Quality Assurance & Warranty</h4>
                    <p className="text-muted-foreground">Rigorous testing and lifetime warranty certification for complete peace of mind</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <Home className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg text-foreground mb-2">Longevity & Protection</h3>
                  <p className="text-muted-foreground mb-4">
                    Our outdoor area leak specialist solutions don't just fix the problem—they prevent it from ever returning. 
                    Premium materials and expert workmanship ensure your balcony stays dry for decades.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> 20+ year membrane lifespan</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Antimicrobial mould protection</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> UV-resistant materials</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Weather-tested durability</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold text-foreground mb-3">Envision Your Future Balcony</h4>
                <p className="text-muted-foreground">
                  Picture yourself entertaining guests under the stars. Morning coffees with a view. 
                  Kids playing safely outdoors. A functional space that adds value to your home. 
                  That's what we deliver—a balcony you can trust and enjoy, rain or shine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers & Social Proof */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Trusted by Sydney Homeowners, Strata Managers & Builders
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Licensed balcony waterproofing specialists with proven results across residential and commercial properties
            </p>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-muted-foreground">Fully certified waterproofing contractors</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Umbrella className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">5-Year Warranty</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage on all work</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Fast Response</h3>
                  <p className="text-sm text-muted-foreground">Emergency repairs available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Home className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">15+ Years Experience</h3>
                  <p className="text-sm text-muted-foreground">Serving Sydney since 2008</p>
                </CardContent>
              </Card>
            </div>

            {/* Customer Reviews */}
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Real Results from Real Customers</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "Balcony fixed—no more leaks! These guys were professional, fast, and incredibly thorough. 
                      I can finally use my outdoor space without worry. Highly recommend for any strata work."
                    </p>
                    <p className="font-bold text-foreground">— Sarah K., Neutral Bay</p>
                    <p className="text-xs text-muted-foreground">Strata Manager</p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "Outstanding balcony waterproofing service. The team identified issues I didn't even know existed. 
                      Two years later, still perfectly dry. Worth every cent."
                    </p>
                    <p className="font-bold text-foreground">— Michael R., Bondi</p>
                    <p className="text-xs text-muted-foreground">Homeowner</p>
                  </CardContent>
                </Card>
                <Card className="border">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "We use them for all our projects. Reliable tile and grout balcony repairs, competitive pricing, 
                      and they always meet deadlines. A builder's dream contractor."
                    </p>
                    <p className="font-bold text-foreground">— David T., North Sydney</p>
                    <p className="text-xs text-muted-foreground">Commercial Builder</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Project Photos Placeholder */}
            <div className="mt-12 text-center p-8 bg-card border rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">See Our Work</h3>
              <p className="text-muted-foreground mb-6">
                Professional balcony leak repair Sydney projects completed across residential buildings, strata complexes, and commercial properties
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Gallery</span>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Completed Projects</span>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Warranty Certification</span>
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
              Get Your Free Balcony Leak Assessment in Sydney—Request Service Now
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let balcony leaks destroy your property value. Expert outdoor area leak specialist ready to help today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0421 043 444 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Book Free Inspection
              </Button>
            </div>
            <p className="text-sm opacity-75">
              ✓ Same-day service for emergencies &nbsp;|&nbsp; ✓ Free no-obligation quotes &nbsp;|&nbsp; ✓ Lifetime warranty on all work
            </p>
          </div>
        </div>
      </section>

      {/* SEO-Rich Service Areas */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Balcony Leak Repair Sydney - Servicing All Areas
            </h3>
            <p className="text-muted-foreground mb-4">
              Professional tile and grout balcony repairs and strata balcony leak solutions across Sydney's Eastern Suburbs, 
              North Shore, Inner West, and CBD. Our outdoor area leak specialist team services residential, commercial, 
              and strata properties with guaranteed balcony waterproofing results.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span>Bondi</span> • <span>Neutral Bay</span> • <span>North Sydney</span> • <span>Mosman</span> • 
              <span>Manly</span> • <span>Paddington</span> • <span>Surry Hills</span> • <span>CBD</span> • 
              <span>Double Bay</span> • <span>Woollahra</span> • <span>Eastern Suburbs</span> • <span>North Shore</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BalconyLeakRepair;
