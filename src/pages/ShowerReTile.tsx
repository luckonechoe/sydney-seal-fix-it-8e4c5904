
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Shield, Clock, Award, Hammer, Wrench, Layers, Droplets } from 'lucide-react';

const ShowerReTile = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Shower Re-Tile Sydney - Permanent Shower Rip-Out & Reconstruction | Sydney Sealed</title>
        <meta name="description" content="Stop shower leaks permanently with our full rip-out and re-tile service in Sydney. Complete demolition, compliant waterproofing, epoxy grout finish. 2-day job, 10-year warranty. Call 0412 345 678" />
        <meta name="keywords" content="shower re-tile Sydney, shower rip-out Sydney, shower reconstruction, shower waterproofing membrane, epoxy grout shower, permanent shower repair Sydney, shower floor replacement Sydney" />
        <link rel="canonical" href="https://yourdomain.com/shower-re-tile" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Stop Your Leaking Shower – Permanently.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              The Definitive Solution for Failed Waterproofing Membranes
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              When non-invasive repairs are no longer viable, our full rip-out and reconstruction service 
              guarantees a watertight, long-lasting result. Complete in just 2 days—ready to use on Day 3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Book Comprehensive Shower Assessment
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
              Is Your Shower Quietly Leaking?
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
              If you've noticed any of these signs, your shower is past the point of a simple seal and needs a permanent fix:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">💧</div>
                  <h3 className="font-bold mb-2 text-foreground">Damp Walls</h3>
                  <p className="text-sm text-muted-foreground">Swollen, stained walls near the shower recess or peeling paint in adjoining rooms</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🔊</div>
                  <h3 className="font-bold mb-2 text-foreground">Hollow Tiles</h3>
                  <p className="text-sm text-muted-foreground">Loose, hollow-sounding, or cracked tiles on the floor or lower walls</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🦠</div>
                  <h3 className="font-bold mb-2 text-foreground">Persistent Odours</h3>
                  <p className="text-sm text-muted-foreground">Musty smell that cleaning cannot eliminate, or crumbling grout that returns after patching</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center border-l-4 border-primary">
              <p className="text-lg text-foreground mb-4 italic">
                "When water breaches the membrane, the damage is structural, not just cosmetic. 
                Timber rot, toxic mould growth, and compromised substrate mean the longer you wait, 
                the more extensive—and expensive—the repair becomes."
              </p>
              <p className="text-muted-foreground">
                Don't risk insurance complications or property devaluation. Get a permanent solution today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process and Value Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              The Permanent Shower Re-Tile (Rip-Up) System
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our full-scale, permanent re-tiling process is designed for quality and compliance. 
              Complete in 2 days with a 24-hour cure period—your shower is ready on Day 3.
            </p>
            <div className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg">
              <p className="text-sm uppercase tracking-wide mb-1">Completed In</p>
              <p className="text-4xl font-bold">2 Days</p>
              <p className="text-sm opacity-90 mt-1">Ready to use on Day 3</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our 6-Step Reconstruction Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Controlled Demolition</h4>
                    <p className="text-muted-foreground">Removal of all floor tiles, screed, and first bottom row of wall tiles to expose the structural substrate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Substrate Preparation</h4>
                    <p className="text-muted-foreground">Thorough cleaning, drying, and repair of the substrate to ensure a sound foundation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Compliant Waterproofing</h4>
                    <p className="text-muted-foreground">Two-part membrane with bond breakers and reinforcing fabric, extending up walls and into waste penetration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">New Screed & Falls</h4>
                    <p className="text-muted-foreground">Sand cement screed precisely leveled to ensure correct falls toward drain, eliminating pooling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Re-Tiling & Epoxy Grout</h4>
                    <p className="text-muted-foreground">Floor and lower wall tiles re-laid with epoxy grout for superior chemical resistance and watertight seal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Final Seal & Cure</h4>
                    <p className="text-muted-foreground">Perimeter joints sealed with flexible, anti-mould silicone. 24-hour cure, ready Day 3</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <Layers className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-bold text-lg text-foreground mb-2">Why Epoxy Grout?</h3>
                  <p className="text-muted-foreground mb-4">
                    We use epoxy grout for the floor and critical wall junctions because it provides 
                    superior performance where it matters most.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Superior chemical resistance</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Complete stain-proofing</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> 100% watertight seal</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-primary mr-2" /> Long-lasting durability</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h4 className="font-bold text-foreground mb-3">Permanent Peace of Mind</h4>
                <p className="text-muted-foreground">
                  Stop the cycle of temporary fixes. Our full rip-out and re-tile system delivers a 
                  permanent, compliant solution that protects your home for years to come. Wake up knowing 
                  your shower is completely sealed—no more ceiling stains, no more stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Expectations Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              What You Can Expect From Our Service
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              We deliver a permanent fix with minimal stress and maximum professionalism
            </p>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Licensed Specialists</h3>
                  <p className="text-sm text-muted-foreground">Experts in wet area compliance and permanent leak resolution</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">10-Year Warranty</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive coverage on our full rip-out and re-tile system</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">2-Day Completion</h3>
                  <p className="text-sm text-muted-foreground">Fast, efficient work with minimal disruption to your home</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-1">Clear Communication</h3>
                  <p className="text-sm text-muted-foreground">Itemised quote and clear explanation—no hidden costs</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Benefits */}
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Why Homeowners Choose Our Re-Tile Service</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Cleanliness and Containment</h4>
                    <p className="text-sm text-muted-foreground">We use drop sheets, protect adjacent areas, and remove all demolition debris from your property</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Premium Materials Only</h4>
                    <p className="text-sm text-muted-foreground">Professional-grade membranes and epoxy grout for the most critical areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Correct Falls Guaranteed</h4>
                    <p className="text-sm text-muted-foreground">Precision screeding ensures water flows to the drain—no more pooling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Full Compliance</h4>
                    <p className="text-sm text-muted-foreground">All work meets Australian Standards for wet area waterproofing</p>
                  </div>
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
              Get a Free, No-Obligation Quote for Your Permanent Shower Solution
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop the cycle of temporary fixes. Our full rip-out and re-tile system delivers a permanent, compliant solution that lasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0412 345 678 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Your Free Quote
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ✓ 2-day completion &nbsp;|&nbsp; ✓ Compliant waterproofing &nbsp;|&nbsp; ✓ Epoxy grout finish &nbsp;|&nbsp; ✓ 10-year warranty
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">
              Complete Shower Re-Tile Services Sydney
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-lg">
              From controlled demolition to premium epoxy grout finishes, we deliver permanent shower reconstruction solutions across Sydney.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Hammer className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Controlled Demolition</h3>
                  <p className="text-muted-foreground text-sm">Professional removal of floor tiles, screed, and lower wall tiles to expose the substrate</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Layers className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Compliant Waterproofing</h3>
                  <p className="text-muted-foreground text-sm">Two-part membrane with bond breakers and reinforcing fabric for lasting protection</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Precision Screeding</h3>
                  <p className="text-muted-foreground text-sm">New sand cement screed with correct falls to eliminate water pooling</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">Epoxy Grout Finish</h3>
                  <p className="text-muted-foreground text-sm">Superior chemical resistance and stain-proofing for a completely watertight seal</p>
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

export default ShowerReTile;
