
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Phone, AlertTriangle, Shield, Clock, Award, Hammer, Wrench, Layers, Droplets } from 'lucide-react';

const ShowerReTile = () => {
  const warningSignsItems = [
    "Damp, swollen, or stained walls near the shower recess",
    "Peeling paint or bubbling plaster in the bathroom or adjoining room",
    "Loose, hollow-sounding, or cracked tiles on the floor or lower walls",
    "Persistent musty smell that cleaning cannot eliminate",
    "Brown stains or drips on the ceiling directly below the bathroom",
    "Extensive missing or crumbling grout that returns quickly after patching"
  ];

  const consequencesItems = [
    { title: "Timber Rot and Structural Damage", description: "Water saturates the wall framing and floor joists, leading to costly and complex structural repairs" },
    { title: "Mould and Health Risks", description: "Hidden moisture feeds toxic mould growth within the wall cavity, compromising indoor air quality" },
    { title: "Compromised Substrate", description: "The screed and bedding become saturated, losing integrity and causing tiles to lift and crack" },
    { title: "Expensive Rectification", description: "The longer the leak is left, the more extensive the demolition and repair work becomes" },
    { title: "Insurance and Resale Issues", description: "Undisclosed water damage can complicate insurance claims and significantly devalue your property" }
  ];

  const processSteps = [
    { step: 1, title: "Controlled Demolition", description: "Minor demolition work on the shower base, including the removal of all floor tiles, screed, and the first bottom row of wall tiles to expose the structural substrate" },
    { step: 2, title: "Substrate Preparation & Cleaning", description: "The area is thoroughly cleaned, dried, and prepared. Any necessary repairs to the substrate are completed to ensure a sound foundation" },
    { step: 3, title: "Compliant Waterproofing", description: "Application of a high-performance, compliant two-part waterproofing membrane, including bond breakers and reinforcing fabric, extending up the walls and into the waste penetration" },
    { step: 4, title: "New Screed & Falls", description: "A new sand cement screed is laid and precisely leveled to ensure correct falls towards the drain, eliminating water pooling" },
    { step: 5, title: "Re-Tiling & Epoxy Grout", description: "The floor and lower wall tiles are re-laid. We use epoxy grout for the floor and critical wall junctions, providing superior chemical resistance, stain-proofing, and a completely watertight seal" },
    { step: 6, title: "Final Seal & Cure", description: "Perimeter joints are sealed with flexible, anti-mould silicone. The job is completed in 2 days, followed by a 24-hour cure period—your shower is ready to use on Day 3" }
  ];

  const expectationsItems = [
    { icon: Award, title: "Licensed Waterproofing Specialists", description: "Our team are experts in wet area compliance and permanent leak resolution" },
    { icon: Shield, title: "Cleanliness and Containment", description: "We use drop sheets, protect adjacent areas, and remove all demolition debris and rubbish from your property" },
    { icon: CheckCircle, title: "Guaranteed Workmanship", description: "We stand behind the quality of our full rip-out and re-tile system with a comprehensive warranty" },
    { icon: Clock, title: "Clear Communication", description: "You receive an itemised quote and a clear explanation of the process before any work begins—no hidden costs or surprises" },
    { icon: Layers, title: "Durable, Premium Materials", description: "We use professional-grade membranes and the superior performance of epoxy grout for the most critical areas" }
  ];

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
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
              The definitive solution for failed waterproofing membranes and chronic shower leaks, involving a full rip-out and reconstruction to guarantee a watertight, long-lasting result.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">2-Day Job</span>
              </div>
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">Ready Day 3</span>
              </div>
              <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="font-medium">10-Year Warranty</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Book Your Comprehensive Shower Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Is Your Shower Quietly Leaking?
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-lg">
              If you've noticed any of these signs, your shower is past the point of a simple seal and needs a permanent fix:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {warningSignsItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              Why a Leaking Shower Isn't 'Just a Little Damp'
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-lg">
              When water breaches the membrane, the damage is structural, not just cosmetic. Ignoring it leads to:
            </p>
            <div className="space-y-4">
              {consequencesItems.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                The Permanent Shower Re-Tile (Rip-Up) System
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                When non-invasive repairs are no longer viable, we implement our full-scale, permanent re-tiling process. This is a 2-day job designed for quality and compliance.
              </p>
            </div>
            
            <div className="grid gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4 bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-primary/10 p-8 rounded-lg text-center border border-primary/20">
              <div className="flex flex-wrap justify-center gap-8">
                <div>
                  <Hammer className="w-10 h-10 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Complete</p>
                  <p className="text-2xl font-bold text-foreground">2-Day Job</p>
                </div>
                <div>
                  <Clock className="w-10 h-10 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">24-Hour Cure</p>
                  <p className="text-2xl font-bold text-foreground">Ready Day 3</p>
                </div>
                <div>
                  <Shield className="w-10 h-10 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Comprehensive</p>
                  <p className="text-2xl font-bold text-foreground">10-Year Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">
              What You Can Expect From Our Service
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-lg">
              We deliver a permanent fix with minimal stress and maximum professionalism.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expectationsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <item.icon className="w-8 h-8 text-primary mr-3" />
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
