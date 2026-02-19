
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, Shield, Clock, Award, Hammer, Wrench, Layers, Droplets, AlertTriangle } from 'lucide-react';

const ShowerReTile = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Shower Re-Tile Sydney - Permanent Shower Rip-Out & Reconstruction | Sydney Seal</title>
        <meta name="description" content="Stop shower leaks permanently with our full rip-out and re-tile service in Sydney. Complete demolition, compliant waterproofing, epoxy grout finish. 2-day job, 5-year warranty. Call 0421 043 444" />
        <meta name="keywords" content="shower re-tile Sydney, shower rip-out Sydney, shower reconstruction, shower waterproofing membrane, epoxy grout shower, permanent shower repair Sydney, shower floor replacement Sydney" />
        <link rel="canonical" href="https://sydneyseal.com.au/shower-re-tile" />
        <meta property="og:title" content="Shower Re-Tile Sydney | Permanent Reconstruction | Sydney Seal" />
        <meta property="og:description" content="Full shower rip-out and re-tile in Sydney. Complete waterproofing membrane, epoxy grout finish, 5-year warranty. Permanent fix for chronic leaks." />
        <meta property="og:url" content="https://sydneyseal.com.au/shower-re-tile" />
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
              The definitive solution for failed waterproofing membranes and chronic shower leaks, involving a full rip-out and reconstruction to guarantee a watertight, long-lasting result.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call 0421 043 444 Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Book Your Comprehensive Shower Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section - Attention/Interest */}
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
                  <p className="text-sm text-muted-foreground">Damp, swollen, or stained walls near the shower recess</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <h3 className="font-bold mb-2 text-foreground">Peeling Paint</h3>
                  <p className="text-sm text-muted-foreground">Peeling paint or bubbling plaster in the bathroom or adjoining room</p>
                </CardContent>
              </Card>
              <Card className="border-destructive/20">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🔊</div>
                  <h3 className="font-bold mb-2 text-foreground">Hollow Tiles</h3>
                  <p className="text-sm text-muted-foreground">Loose, hollow-sounding, or cracked tiles on the floor or lower walls</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="font-bold text-lg text-foreground mb-4">Additional Warning Signs:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Persistent musty smell that cleaning cannot eliminate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Brown stains or drips on the ceiling directly below the bathroom</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Extensive missing or crumbling grout that returns quickly after patching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section - Desire */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-6">
              Why a Leaking Shower Isn't 'Just a Little Damp'
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-10">
              When water breaches the membrane, the damage is structural, not just cosmetic. Ignoring it leads to:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Timber Rot and Structural Damage</h3>
                      <p className="text-sm text-muted-foreground">Water saturates the wall framing and floor joists, leading to costly and complex structural repairs.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Mould and Health Risks</h3>
                      <p className="text-sm text-muted-foreground">Hidden moisture feeds toxic mould growth within the wall cavity, compromising indoor air quality.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Compromised Substrate</h3>
                      <p className="text-sm text-muted-foreground">The screed and bedding become saturated, losing integrity and causing tiles to lift and crack.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Expensive Rectification</h3>
                      <p className="text-sm text-muted-foreground">The longer the leak is left, the more extensive the demolition and repair work becomes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-destructive/30 md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Insurance and Resale Issues</h3>
                      <p className="text-sm text-muted-foreground">Undisclosed water damage can complicate insurance claims and significantly devalue your property.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Interest/Trust */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              The Permanent Shower Re-Tile (Rip-Up) System
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              When non-invasive repairs are no longer viable, we implement our full-scale, permanent re-tiling process. This is a 2-day job designed for quality and compliance.
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
                    <p className="text-muted-foreground">Minor demolition work on the shower base, including the removal of all floor tiles, screed, and the first bottom row of wall tiles to expose the structural substrate.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Substrate Preparation & Cleaning</h4>
                    <p className="text-muted-foreground">The area is thoroughly cleaned, dried, and prepared. Any necessary repairs to the substrate are completed to ensure a sound foundation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Compliant Waterproofing</h4>
                    <p className="text-muted-foreground">Application of a high-performance, compliant two-part waterproofing membrane, including bond breakers and reinforcing fabric, extending up the walls and into the waste penetration.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">New Screed & Falls</h4>
                    <p className="text-muted-foreground">A new sand cement screed is laid and precisely leveled to ensure correct falls towards the drain, eliminating water pooling.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Re-Tiling & Epoxy Grout</h4>
                    <p className="text-muted-foreground">The floor and lower wall tiles are re-laid. We use epoxy grout for the floor and critical wall junctions, providing superior chemical resistance, stain-proofing, and a completely watertight seal.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Final Seal & Cure</h4>
                    <p className="text-muted-foreground">Perimeter joints are sealed with flexible, anti-mould silicone. The job is completed in 2 days, followed by a 24-hour cure period—your shower is ready to use on Day 3.</p>
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

      {/* What You Can Expect Section */}
      <section className="py-16 bg-muted/30">
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
                  <h3 className="font-bold text-foreground mb-1">5-Year Warranty</h3>
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
            <div className="bg-background p-8 rounded-lg border">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8">Why Homeowners Choose Our Re-Tile Service</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Licensed Waterproofing Specialists</h4>
                    <p className="text-sm text-muted-foreground">Our team are experts in wet area compliance and permanent leak resolution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Cleanliness and Containment</h4>
                    <p className="text-sm text-muted-foreground">We use drop sheets, protect adjacent areas, and remove all demolition debris and rubbish from your property</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Guaranteed Workmanship</h4>
                    <p className="text-sm text-muted-foreground">We stand behind the quality of our full rip-out and re-tile system with a comprehensive warranty</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Clear Communication</h4>
                    <p className="text-sm text-muted-foreground">You receive an itemised quote and a clear explanation of the process before any work begins—no hidden costs or surprises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Durable, Premium Materials</h4>
                    <p className="text-sm text-muted-foreground">We use professional-grade membranes and the superior performance of epoxy grout for the most critical areas</p>
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
                Call 0411 563 444 Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Your Free Quote
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              ✓ 2-day completion &nbsp;|&nbsp; ✓ Compliant waterproofing &nbsp;|&nbsp; ✓ Epoxy grout finish &nbsp;|&nbsp; ✓ 5-year warranty
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services Overview */}
      <section className="py-16 bg-background">
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
